// server.js

const express = require('express');
require("dotenv").config();
const connectDB = require('./config/db'); // Import DB connection
const cardRoutes = require('./routes/cardRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use card routes
app.use('/cards', cardRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Playing Card API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
