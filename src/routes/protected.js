const jwt = require('jsonwebtoken');
const express = require('express');
const authenticateToken = require('../middleware/guard');

const router = express.Router();

// Protected route example - requires authentication
router.get('/profile', authenticateToken, (req, res) => {
    res.json({
        message: 'This is a protected profile route',
        user: req.user
    });
});

// Another protected route example
router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({
        message: `Welcome to your dashboard, ${req.user.name}!`,
        userInfo: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
});

module.exports = router;