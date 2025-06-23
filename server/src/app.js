import express from 'express'
import cors from 'cors'
import quotesRouter from './routes/quotesRouter.js'
import categoriesRouter from './routes/categoriesRouter.js'
import errorMiddleware from './middlewares/errorMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/quotes', quotesRouter)
app.use('/categories', categoriesRouter)

app.use(errorMiddleware)

export default app
