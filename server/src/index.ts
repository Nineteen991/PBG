import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'

import connectDB from './db/connect'
import eventRouter from './routers/eventRouter'

dotenv.config()
const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json({ limit: "10mb" }))
// app.use(express.urlencoded({ limit: "10mb" }))

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Server is probably running")
})
app.use('/api/v1/events', eventRouter)

if (!process.env.PORT) {
  process.exit(1)
}
const PORT: number = parseInt(process.env.PORT as string, 10)

// Server Activation
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string)
    app.listen(PORT, () => {
      console.log(`Listening on port: ${ PORT }`)
    })
  } catch(error) {
    console.error("Ya broke the server: ", error)
  }
}

start()