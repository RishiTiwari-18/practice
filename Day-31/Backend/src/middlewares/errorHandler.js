const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internet server error"

    res.status(statusCode).json({
        message
    })
}

export default errorHandler