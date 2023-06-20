import express from 'express'

import { addSummary, getSummaries } from '../controllers/summariesController'

const summaryRouter = express.Router()

summaryRouter.route('/')
  .get(getSummaries)
  .post(addSummary)

export default summaryRouter