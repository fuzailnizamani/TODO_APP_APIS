const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, refreshAccessToken } = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.post('/logoutUser', authenticateToken, logoutUser);
router.post('/refreshAccessToken', refreshAccessToken);

module.exports = router;