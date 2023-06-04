import express from 'express'

import { addSummary } from '../controllers/summariesController'

const summaryRouter = express.Router()

summaryRouter.route('/')
  .post(addSummary)

export default summaryRouter