const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const memberRoutes = require('./routes/memberRoutes');
const bookMovieRoutes = require('./routes/bookMovieRoutes');
const issueTransactionRoutes = require('./routes/issueTransactionRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Example usage of bcrypt
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};

// Example function to verify password
const verifyPassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password Match:', isMatch);
    return isMatch;
  } catch (error) {
    console.error('Error verifying password:', error);
  }
};

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/books-movies', bookMovieRoutes);
app.use('/api/transactions', issueTransactionRoutes);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example usage (commented out)
// (async () => {
//   const password = 'examplePassword';
//   const hashedPassword = await hashPassword(password);
//   await verifyPassword(password, hashedPassword);
// })();