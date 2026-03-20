import express from 'express'
import authRouter from './routes/auth.route.js'
import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'

const app = express()

app.use(express.json())

/**
 * @routes
 */
app.use("/api/auth", authRouter)


/**
 * @errors
 */
app.use(notFound)
app.use(errorHandler)

export default app