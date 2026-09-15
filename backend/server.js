/**
 * Educa Smart Education Portal - Backend Server
 * Express.js REST API with Supabase Cloud PostgreSQL Integration
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { checkDatabaseConnection } = require('./config/supabase');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Import Routes
const doubtRoutes = require('./routes/doubtRoutes');
const projectRoutes = require('./routes/projectRoutes');
const courseRoutes = require('./routes/courseRoutes');
const profileRoutes = require('./routes/profileRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Utility Middleware
app.use(helmet({
    crossOriginResourcePolicy: false
}));

// CORS Configuration
const allowedOrigins = (process.env.CLIENT_URL || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, or file://)
        if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(null, true); // Permissive for local development
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-user-id', 'x-user-name', 'x-user-role']
}));

// HTTP Logging & Body Parsing
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check & Root Info Endpoint
app.get('/health', async (req, res) => {
    const isDbConnected = await checkDatabaseConnection();
    res.json({
        status: isDbConnected ? 'healthy' : 'degraded',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        database: {
            provider: 'Supabase PostgreSQL',
            connected: isDbConnected
        }
    });
});

app.get('/api', (req, res) => {
    res.json({
        name: "Educa API Service",
        version: "1.0.0",
        description: "REST backend for Educa Smart Education Portal",
        endpoints: {
            courses: "/api/courses",
            doubts: "/api/doubts",
            projects: "/api/projects",
            profiles: "/api/profiles",
            resources: "/api/resources",
            contact: "/api/contact",
            health: "/health"
        }
    });
});

// Mount Application Routes
app.use('/api/doubts', doubtRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/contact', contactRoutes);

// Catch-All 404 Handler
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

// Start Server Listener
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, async () => {
        console.log(`=======================================================`);
        console.log(`🚀 Educa Backend Server running on http://localhost:${PORT}`);
        console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`📡 API Base: http://localhost:${PORT}/api`);
        console.log(`=======================================================`);

        // Check Supabase Cloud Connection
        const dbConnected = await checkDatabaseConnection();
        if (dbConnected) {
            console.log(`⚡ [Supabase Cloud] Connected to PostgreSQL Database successfully.`);
        } else {
            console.warn(`⚠️ [Supabase Cloud] Could not verify database connection. Verify credentials in .env.`);
        }
    });
}

module.exports = app;
