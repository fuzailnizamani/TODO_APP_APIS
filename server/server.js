const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoute');
const taskRoutes = require('./routes/taskRoute');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const authenticateToken = require('./middleware/authenticateToken');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', userRoutes);
app.use('/api', authenticateToken, taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})