// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, authUser } = require('../controllers/authController');
const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);

module.exports = router;
