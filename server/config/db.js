const mysql = require('mysql2/promise');
require('dotenv').config();
console.log("Creating connection pool...");

const pool = mysql.createPool({
  host: process.env.DB_HOST,      // Your database host (e.g., 'localhost' or an IP address)
  user: process.env.DB_USER,           // Your database username (e.g., 'root')
  password: process.env.DB_PASSWORD, // Your database password
  database: process.env.DB_NAME,    // The name of your database
  waitForConnections: true, // Whether to wait for available connections in the pool
  connectionLimit: 10,    // Maximum number of connections to create at once
  queueLimit: 0           // The maximum number of requests the pool will queue (0 = unlimited)
});

module.exports = pool;