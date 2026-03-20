import AppError from "../utils/appError.js"

const notFound = (req, res, next) => {
    next( new AppError(`route ${req.originalUrl} not found`, 404))
}

export default notFound