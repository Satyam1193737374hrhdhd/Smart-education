/**
 * Project Collab Vault REST Routes
 */

const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { requireAuth } = require('../middleware/auth');

// GET /api/projects - List all projects
router.get('/', async (req, res, next) => {
    try {
        const { role, category } = req.query;
        const projects = await Project.getAll(role, category);
        res.json({ success: true, count: projects.length, data: projects });
    } catch (err) {
        next(err);
    }
});

// GET /api/projects/:id - Single project details
router.get('/:id', async (req, res, next) => {
    try {
        const project = await Project.getById(req.params.id);
        res.json({ success: true, data: project });
    } catch (err) {
        next(err);
    }
});

// POST /api/projects - Pitch a new project
router.post('/', requireAuth, async (req, res, next) => {
    try {
        const { title, pitch, category, tech_stack, open_roles, max_team_size } = req.body;
        if (!title || !pitch) {
            return res.status(400).json({ success: false, message: "Title and pitch description are required" });
        }

        const project = await Project.create({
            title,
            pitch,
            category: category || 'Web Development',
            tech_stack: Array.isArray(tech_stack) ? tech_stack : ['React', 'JavaScript'],
            open_roles: Array.isArray(open_roles) ? open_roles : ['Contributor'],
            max_team_size: max_team_size || 4,
            members: [{ name: req.user.name, role: 'Project Lead', avatar: req.user.avatar || 'images/pic-2.jpg' }]
        });

        res.status(201).json({ success: true, message: "Project pitch launched (+50 XP)", data: project });
    } catch (err) {
        next(err);
    }
});

// POST /api/projects/:id/apply - Apply to join a team
router.post('/:id/apply', requireAuth, async (req, res, next) => {
    try {
        const { role_applied } = req.body;
        const application = await Project.apply(req.params.id, {
            user_id: req.user.id,
            user_name: req.user.name,
            user_avatar: req.user.avatar || 'images/pic-2.jpg',
            role_applied: role_applied || 'Contributor'
        });

        res.status(201).json({ success: true, message: "Application submitted to project team (+25 XP)", data: application });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
