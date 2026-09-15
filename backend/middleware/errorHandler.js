/**
 * Centralized Error Handling Middleware
 */

function errorHandler(err, req, res, next) {
    console.error(`💥 [Error] ${req.method} ${req.originalUrl}:`, err);

    const statusCode = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        error: {
            message,
            statusCode,
            timestamp: new Date().toISOString()
        }
    });
}

/**
 * 404 Not Found Middleware
 */
function notFoundHandler(req, res, next) {
    res.status(404).json({
        success: false,
        error: {
            message: `Endpoint not found: ${req.method} ${req.originalUrl}`,
            statusCode: 404
        }
    });
}

module.exports = {
    errorHandler,
    notFoundHandler
};
