const express = require('express');
const router = express.Router();
const BookMovie = require('../models/BookMovie');

// Create a new book/movie
router.post('/add', async (req, res) => {
    try {
        const { type, name, dateOfProcurement, quantity } = req.body;

        // Validate required fields
        if (!type || !name || !dateOfProcurement || !quantity) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Validate type
        if (!['book', 'movie'].includes(type)) {
            return res.status(400).json({ message: 'Type must be either "book" or "movie"' });
        }

        // Validate quantity
        if (quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        // Create new book/movie
        const bookMovie = new BookMovie({
            type,
            name,
            dateOfProcurement,
            quantity,
            availableQuantity: quantity, // Initially all are available
        });

        await bookMovie.save();

        res.status(201).json({
            message: 'Book/Movie created successfully',
            data: bookMovie,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating book/movie', error: error.message });
    }
});

// Get all books/movies
router.get('/', async (req, res) => {
    try {
        const { type } = req.query; // Optional filter by type

        let query = {};
        if (type && ['book', 'movie'].includes(type)) {
            query.type = type;
        }

        const bookMovies = await BookMovie.find(query).sort({ createdAt: -1 });
        res.status(200).json(bookMovies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books/movies', error: error.message });
    }
});

// Get a single book/movie by ID
router.get('/:id', async (req, res) => {
    try {
        const bookMovie = await BookMovie.findById(req.params.id);
        if (!bookMovie) {
            return res.status(404).json({ message: 'Book/Movie not found' });
        }
        res.status(200).json(bookMovie);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book/movie', error: error.message });
    }
});

// Update a book/movie
router.put('/:id', async (req, res) => {
    try {
        const { type, name, dateOfProcurement, quantity } = req.body;
        const updateData = {};

        if (type) {
            if (!['book', 'movie'].includes(type)) {
                return res.status(400).json({ message: 'Type must be either "book" or "movie"' });
            }
            updateData.type = type;
        }

        if (name) updateData.name = name;
        if (dateOfProcurement) updateData.dateOfProcurement = dateOfProcurement;

        if (quantity !== undefined) {
            if (quantity < 1) {
                return res.status(400).json({ message: 'Quantity must be at least 1' });
            }
            updateData.quantity = quantity;
        }

        updateData.updatedAt = Date.now();

        const bookMovie = await BookMovie.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!bookMovie) {
            return res.status(404).json({ message: 'Book/Movie not found' });
        }

        res.status(200).json({
            message: 'Book/Movie updated successfully',
            data: bookMovie,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating book/movie', error: error.message });
    }
});

// Delete a book/movie
router.delete('/:id', async (req, res) => {
    try {
        const bookMovie = await BookMovie.findByIdAndDelete(req.params.id);
        if (!bookMovie) {
            return res.status(404).json({ message: 'Book/Movie not found' });
        }

        res.status(200).json({ message: 'Book/Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book/movie', error: error.message });
    }
});

// Get books/movies statistics
router.get('/stats/summary', async (req, res) => {
    try {
        const totalBooks = await BookMovie.countDocuments({ type: 'book' });
        const totalMovies = await BookMovie.countDocuments({ type: 'movie' });
        const totalQuantity = await BookMovie.aggregate([
            {
                $group: {
                    _id: null,
                    totalQty: { $sum: '$quantity' },
                    totalAvailable: { $sum: '$availableQuantity' },
                },
            },
        ]);

        res.status(200).json({
            totalBooks,
            totalMovies,
            totalQuantity: totalQuantity[0] || { totalQty: 0, totalAvailable: 0 },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching statistics', error: error.message });
    }
});

module.exports = router;
