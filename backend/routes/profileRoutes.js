/**
 * Student Profile REST Routes
 */

const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// GET /api/profiles/:id - Get student profile
router.get('/:id', async (req, res, next) => {
    try {
        const profile = await Profile.getById(req.params.id);
        res.json({ success: true, data: profile });
    } catch (err) {
        next(err);
    }
});

// PUT /api/profiles/:id - Update student profile
router.put('/:id', async (req, res, next) => {
    try {
        const profile = await Profile.save({ ...req.body, id: req.params.id });
        res.json({ success: true, message: "Profile updated successfully", data: profile });
    } catch (err) {
        next(err);
    }
});

// POST /api/profiles/:id/xp - Award XP points
router.post('/:id/xp', async (req, res, next) => {
    try {
        const { amount } = req.body;
        const profile = await Profile.addXP(req.params.id, parseInt(amount, 10) || 10);
        res.json({ success: true, message: `Awarded +${amount} XP`, data: profile });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
