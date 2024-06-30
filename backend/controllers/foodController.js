// backend/controllers/foodController.js
const asyncHandler = require('express-async-handler');
const Food = require('../models/Food');

// @desc    Get all food items
// @route   GET /api/food
// @access  Public
const getFoodItems = asyncHandler(async (req, res) => {
    const foodItems = await Food.find({});
    res.json(foodItems);
});

module.exports = {
    getFoodItems,
};
