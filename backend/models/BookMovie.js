const mongoose = require('mongoose');

const bookMovieSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ['book', 'movie'],
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        dateOfProcurement: {
            type: Date,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        availableQuantity: {
            type: Number,
            required: true,
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

const BookMovie = mongoose.model('BookMovie', bookMovieSchema);

module.exports = BookMovie;
