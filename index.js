const express = require('express'); // Imports Express framework
const cors = require('cors'); // Imports CORS middleware
const db = require('./db'); // Import the MySQL connection
require('dotenv').config(); // Loads environment variables
const categoryRoutes = require('./routes/categoryRoute');
const taskRoutes = require('./routes/taskRoute');
const authRoutes = require('./routes/authRoute');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request on ${req.url}`);
  next();
});

app.use('/api/category', categoryRoutes);
// Product routes
app.use('/api/product', taskRoutes);


// Auth routes (you can replace this with your auth implementation)
app.use('/api/users', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'An internal server error occurred.' });
});

// Start server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
