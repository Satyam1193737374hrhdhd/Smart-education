/**
 * Authentication & Identity Middleware
 * Resolves user from Supabase auth JWT, custom student header, or default student persona.
 */

const { supabase } = require('../config/supabase');

async function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    // 1. If Supabase Bearer token is provided
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const { data: { user }, error } = await supabase.auth.getUser(token);
            if (!error && user) {
                req.user = user;
                return next();
            }
        } catch (err) {
            console.warn("[Auth Middleware] Token verification failed:", err.message);
        }
    }

    // 2. Fallback to client user identity header (for seamless educational prototype use)
    const customUserId = req.headers['x-user-id'] || 'user-1';
    const customUserName = req.headers['x-user-name'] || 'John Student';
    const customUserRole = req.headers['x-user-role'] || 'student';

    req.user = {
        id: customUserId,
        name: customUserName,
        role: customUserRole
    };

    next();
}

module.exports = {
    requireAuth
};
