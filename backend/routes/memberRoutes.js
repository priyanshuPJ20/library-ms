const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Create a new member
router.post('/add', async (req, res) => {
    try {
        const { name, email, phone, status, isAdmin, password } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Check if member already exists
        const existingMember = await Member.findOne({ email });
        if (existingMember) {
            return res.status(400).json({ message: 'Member with this email already exists' });
        }

        // Create new member
        const member = new Member({
            name,
            email,
            phone,
            status: status || 'active',
            isAdmin: isAdmin || false,
            password,
        });

        await member.save();

        res.status(201).json({
            message: 'Member created successfully',
            member: {
                _id: member._id,
                name: member.name,
                email: member.email,
                phone: member.phone,
                status: member.status,
                isAdmin: member.isAdmin,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating member', error: error.message });
    }
});

// Get all members
router.get('/', async (req, res) => {
    try {
        const members = await Member.find().select('-password');
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching members', error: error.message });
    }
});

// Get a single member by ID
router.get('/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id).select('-password');
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching member', error: error.message });
    }
});

// Update a member
router.put('/:id', async (req, res) => {
    try {
        const { name, email, phone, status, isAdmin, password } = req.body;
        const updateData = {};

        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        if (status) updateData.status = status;
        if (isAdmin !== undefined) updateData.isAdmin = isAdmin;
        if (password) updateData.password = password;

        updateData.updatedAt = Date.now();

        const member = await Member.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        ).select('-password');

        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        res.status(200).json({
            message: 'Member updated successfully',
            member,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating member', error: error.message });
    }
});

// Delete a member
router.delete('/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting member', error: error.message });
    }
});

module.exports = router;
