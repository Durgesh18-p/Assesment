// backend/controllers/movieController.js
const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
});

module.exports = {
    getMovies,
};
