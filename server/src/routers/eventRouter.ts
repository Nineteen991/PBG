import express from 'express'

import { createEvent } from '../controllers/eventsController'

const eventRouter = express.Router()


eventRouter.route('/').post(createEvent)

export default eventRouter