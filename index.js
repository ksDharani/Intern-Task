const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import routes
const productRoutes = require('./routes/products.routes');

// Middleware to parse JSON
app.use(express.json());

// Use product routes under /api path
app.use('/api', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://santhoshramu2021:HMMzrBNxtWCcQPKK@cluster0.jspzqaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Connection error:', error));

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
