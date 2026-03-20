import express from 'express'
import { registerController } from '../controllers/auth.controller.js'
import asyncHandler from '../utils/asyncHandler.js'

const authRouter = express.Router()

authRouter.post("/register", asyncHandler(registerController))

export default authRouter

