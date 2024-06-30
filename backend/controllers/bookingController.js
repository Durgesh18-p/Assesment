// backend/controllers/bookingController.js
const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = asyncHandler(async (req, res) => {
    const { movie, seats, showtime, totalPrice } = req.body;

    const booking = new Booking({
        user: req.user._id,
        movie,
        seats,
        showtime,
        totalPrice,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});

module.exports = {
    createBooking,
};
