/**
 * Global error handler middleware
 */
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err)

  // Default error
  let statusCode = err.statusCode || 500
  let message = err.message || 'Internal Server Error'

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400
    message = 'Validation Error'
  }

  if (err.name === 'UnauthorizedError') {
    statusCode = 401
    message = 'Unauthorized'
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}
