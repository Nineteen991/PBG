import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb" }))
// app.use(bodyParser.json({ limit: "10mb" }))
// app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

// Server Activation
app.listen(PORT, () => {
  console.log(`Listening on port: ${ PORT }`)
})