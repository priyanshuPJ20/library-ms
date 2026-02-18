const mongoose = require('mongoose');

const issueTransactionSchema = new mongoose.Schema(
    {
        memberId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member',
            required: true,
        },
        bookMovieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BookMovie',
            required: true,
        },
        issueDate: {
            type: Date,
            default: Date.now,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        returnDate: {
            type: Date,
            default: null,
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },
        status: {
            type: String,
            enum: ['issued', 'returned', 'overdue'],
            default: 'issued',
        },
        fine: {
            type: Number,
            default: 0,
            min: 0,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const IssueTransaction = mongoose.model('IssueTransaction', issueTransactionSchema);

module.exports = IssueTransaction;
