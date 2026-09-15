/**
 * Courses REST Routes
 */

const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET /api/courses - List courses
router.get('/', async (req, res, next) => {
    try {
        const { category, search } = req.query;
        const courses = await Course.getAll(category, search);
        res.json({ success: true, count: courses.length, data: courses });
    } catch (err) {
        next(err);
    }
});

// GET /api/courses/:id - Single course
router.get('/:id', async (req, res, next) => {
    try {
        const course = await Course.getById(req.params.id);
        res.json({ success: true, data: course });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
