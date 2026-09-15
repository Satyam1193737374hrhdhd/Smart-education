/**
 * Academic Resource Vault REST Routes
 */

const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// GET /api/resources - List academic resources
router.get('/', async (req, res, next) => {
    try {
        const { category, search } = req.query;
        const resources = await Resource.getAll(category, search);
        res.json({ success: true, count: resources.length, data: resources });
    } catch (err) {
        next(err);
    }
});

// POST /api/resources - Upload a new resource
router.post('/', async (req, res, next) => {
    try {
        const { title, category, topic, description, author_name } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }

        const resource = await Resource.create({
            title,
            category: category || 'Cheatsheet',
            topic: topic || 'General',
            description,
            author_name: author_name || 'Peer Learner'
        });

        res.status(201).json({ success: true, message: "Resource shared to Vault (+30 XP)", data: resource });
    } catch (err) {
        next(err);
    }
});

// POST /api/resources/:id/download - Increment download count
router.post('/:id/download', async (req, res, next) => {
    try {
        const updated = await Resource.incrementDownloads(req.params.id);
        res.json({ success: true, message: "Download count updated (+5 XP)", data: updated });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
