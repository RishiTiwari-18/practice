export const registerController = (req, res, next) => {
        const err = new Error("Something went wrong")
        err.statusCode = 400
        return next(err)
} 