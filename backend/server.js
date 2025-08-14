const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');
const upload = multer();

// Load environment variables
dotenv.config();

// Import routes
const productRoute = require('./routes/api/productRoute');

// Database connection
const defaultMongoUrl = 'mongodb://app-mongo:27017/ecommerce';
const MONGODB_URI = process.env.MONGODB_URI || defaultMongoUrl;

// Avoid mongoose deprecation warnings
mongoose.set('strictQuery', true);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('✅ Database connected successfully');
});

db.on('error', (error) => {
    console.error('❌ MongoDB connection error:', error);
});

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(upload.array());

// Routes
app.use('/api/products', productRoute);

// Start server and bind to all network interfaces
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
