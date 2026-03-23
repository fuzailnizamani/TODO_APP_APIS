const bcrypt = require('bcryptjs');
const pool = require('../config/db');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide username, email and password' });
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const sql = 'INSERT INTO users (username, email, Password_hash) VALUES (?, ?, ?)';
        const values = [username, email, hashedPassword];
        const result = await pool.query(sql, values);

        res.status(201).json({
            message: 'User added successfully!',
            userId: result.insertId
        });

    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

module.exports = {
    registerUser
}