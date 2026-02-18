const express = require('express');
const router = express.Router();
const IssueTransaction = require('../models/IssueTransaction');
const BookMovie = require('../models/BookMovie');

// Issue a book/movie
router.post('/issue', async (req, res) => {
    try {
        const { memberId, bookMovieId, quantity, dueDate } = req.body;

        // Validate required fields
        if (!memberId || !bookMovieId || !dueDate) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Check if book/movie exists and has available quantity
        const bookMovie = await BookMovie.findById(bookMovieId);
        if (!bookMovie) {
            return res.status(404).json({ message: 'Book/Movie not found' });
        }

        const requestedQty = quantity || 1;
        if (bookMovie.availableQuantity < requestedQty) {
            return res.status(400).json({
                message: `Insufficient quantity available. Available: ${bookMovie.availableQuantity}`,
            });
        }

        // Create issue transaction
        const issueTransaction = new IssueTransaction({
            memberId,
            bookMovieId,
            quantity: requestedQty,
            dueDate,
            status: 'issued',
        });

        // Update available quantity
        bookMovie.availableQuantity -= requestedQty;
        await bookMovie.save();

        await issueTransaction.save();

        res.status(201).json({
            message: 'Book/Movie issued successfully',
            data: issueTransaction,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error issuing book/movie', error: error.message });
    }
});

// Return a book/movie
router.put('/:id/return', async (req, res) => {
    try {
        const issueTransaction = await IssueTransaction.findById(req.params.id);
        if (!issueTransaction) {
            return res.status(404).json({ message: 'Issue transaction not found' });
        }

        if (issueTransaction.status === 'returned') {
            return res.status(400).json({ message: 'This book/movie has already been returned' });
        }

        // Calculate fine if overdue
        const today = new Date();
        let fine = 0;
        if (today > issueTransaction.dueDate) {
            const daysOverdue = Math.ceil((today - issueTransaction.dueDate) / (1000 * 60 * 60 * 24));
            fine = daysOverdue * 10; // 10 per day
        }

        // Update transaction
        issueTransaction.returnDate = today;
        issueTransaction.status = 'returned';
        issueTransaction.fine = fine;
        await issueTransaction.save();

        // Update available quantity
        const bookMovie = await BookMovie.findById(issueTransaction.bookMovieId);
        if (bookMovie) {
            bookMovie.availableQuantity += issueTransaction.quantity;
            await bookMovie.save();
        }

        res.status(200).json({
            message: 'Book/Movie returned successfully',
            data: issueTransaction,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error returning book/movie', error: error.message });
    }
});

// Get all transactions
router.get('/', async (req, res) => {
    try {
        const { status, memberId } = req.query;
        let query = {};

        if (status) query.status = status;
        if (memberId) query.memberId = memberId;

        const transactions = await IssueTransaction.find(query)
            .populate('memberId', 'name email')
            .populate('bookMovieId', 'name type')
            .sort({ issueDate: -1 });

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error: error.message });
    }
});

// Get a single transaction
router.get('/:id', async (req, res) => {
    try {
        const transaction = await IssueTransaction.findById(req.params.id)
            .populate('memberId')
            .populate('bookMovieId');

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transaction', error: error.message });
    }
});

// Get overdue books/movies
router.get('/overdue/list', async (req, res) => {
    try {
        const today = new Date();
        const overdueTransactions = await IssueTransaction.find({
            status: 'issued',
            dueDate: { $lt: today },
        })
            .populate('memberId', 'name email phone')
            .populate('bookMovieId', 'name type')
            .sort({ dueDate: 1 });

        res.status(200).json(overdueTransactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching overdue items', error: error.message });
    }
});

module.exports = router;
