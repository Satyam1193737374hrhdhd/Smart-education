/**
 * Doubt Nexus REST Routes
 */

const express = require('express');
const router = express.Router();
const Doubt = require('../models/Doubt');
const { requireAuth } = require('../middleware/auth');

// GET /api/doubts - List all doubts
router.get('/', async (req, res, next) => {
    try {
        const { tag, search } = req.query;
        const doubts = await Doubt.getAll(tag, search);
        res.json({ success: true, count: doubts.length, data: doubts });
    } catch (err) {
        next(err);
    }
});

// GET /api/doubts/:id - Single doubt
router.get('/:id', async (req, res, next) => {
    try {
        const doubt = await Doubt.getById(req.params.id);
        res.json({ success: true, data: doubt });
    } catch (err) {
        next(err);
    }
});

// POST /api/doubts - Create a new doubt
router.post('/', requireAuth, async (req, res, next) => {
    try {
        const { title, description, tags, bounty_xp } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }

        const doubt = await Doubt.create({
            author_id: req.user.id,
            author_name: req.user.name,
            author_avatar: req.user.avatar || 'images/pic-2.jpg',
            title,
            description,
            tags: tags || ['General'],
            bounty_xp: bounty_xp || 50
        });

        res.status(201).json({ success: true, message: "Doubt published to Nexus", data: doubt });
    } catch (err) {
        next(err);
    }
});

// POST /api/doubts/:id/vote - Upvote a doubt
router.post('/:id/vote', async (req, res, next) => {
    try {
        const updated = await Doubt.upvote(req.params.id);
        res.json({ success: true, message: "Upvote registered", data: updated });
    } catch (err) {
        next(err);
    }
});

// POST /api/doubts/:id/answers - Post an answer
router.post('/:id/answers', requireAuth, async (req, res, next) => {
    try {
        const { content } = req.body;
        if (!content || !content.trim()) {
            return res.status(400).json({ success: false, message: "Answer content cannot be empty" });
        }

        const answer = await Doubt.addAnswer(req.params.id, {
            author_id: req.user.id,
            author_name: req.user.name,
            author_avatar: req.user.avatar || 'images/pic-2.jpg',
            author_badge: 'Peer Contributor',
            content: content.trim()
        });

        res.status(201).json({ success: true, message: "Answer submitted (+15 XP)", data: answer });
    } catch (err) {
        next(err);
    }
});

// PATCH /api/doubts/:id/answers/:ansId/accept - Accept an answer
router.patch('/:id/answers/:ansId/accept', async (req, res, next) => {
    try {
        const answer = await Doubt.acceptAnswer(req.params.id, req.params.ansId);
        res.json({ success: true, message: "Solution accepted and bounty awarded", data: answer });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
