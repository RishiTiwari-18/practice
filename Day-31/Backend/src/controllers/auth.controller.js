import AppError from "../utils/appError.js"

export const registerController = (req, res, next) => {
        next(
               new AppError("Something wrong", 400)

        )
} 