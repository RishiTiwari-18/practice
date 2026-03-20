import express from 'express'
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

export default app