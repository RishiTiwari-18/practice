import express from 'express'
import errorHandler from './middlewares/errorHandler.js'
import authRouter from './routes/auth.route.js'

const app = express()

app.use(express.json())

/**
 * @routes
 */
app.use("/api/auth", authRouter)


/**
 * @errors
 */
app.use(errorHandler)

export default app