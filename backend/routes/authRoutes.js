const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Admin Login Route
router.post('/admin/login', async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await User.findOne({ userId });
    if (!user || user.userType !== 'admin') {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Admin login successful', redirectTo: '/admin/homePage' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// User Login Route
router.post('/user/login', async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await User.findOne({ userId });
    if (!user || user.userType !== 'user') {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User login successful', redirectTo: '/user/homePage' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Add User Route (Admin only)
router.post('/add-user', async (req, res) => {
  try {
    const { userId, password, userType } = req.body;

    // Validate required fields
    if (!userId || !password || !userType) {
      return res.status(400).json({ message: 'Please provide userId, password, and userType' });
    }

    // Validate userType
    if (!['admin', 'user'].includes(userType)) {
      return res.status(400).json({ message: 'userType must be either "admin" or "user"' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ userId });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this userId already exists' });
    }

    // Create new user
    const newUser = new User({
      userId,
      password,
      userType,
    });

    await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
      user: {
        _id: newUser._id,
        userId: newUser.userId,
        userType: newUser.userType,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

module.exports = router;