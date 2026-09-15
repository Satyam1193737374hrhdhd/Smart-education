/**
 * Contact & Inquiry REST Routes
 */

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Submit contact inquiry
router.post('/', async (req, res, next) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "Name, email, and message are required" });
        }

        const inquiry = await Contact.create({
            name,
            email,
            phone: phone || subject || '',
            message
        });

        res.status(201).json({ success: true, message: "Inquiry received. Our academic team will respond soon.", data: inquiry });
    } catch (err) {
        next(err);
    }
});

// GET /api/contact - View all messages (for admin dashboard)
router.get('/', async (req, res, next) => {
    try {
        const messages = await Contact.getAll();
        res.json({ success: true, count: messages.length, data: messages });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
