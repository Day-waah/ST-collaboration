const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/CollaborationPlatform'; // Replace with your MongoDB URI if necessary
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Import Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Start Server
const PORT = 5501; // Replace with your desired port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});