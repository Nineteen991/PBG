import express from 'express'

import { 
  createEvent,
  getEvents,
  deleteEvent
} from '../controllers/eventsController'

const eventRouter = express.Router()

eventRouter.route('/')
  .get(getEvents)
  .post(createEvent)

eventRouter.route('/:id')
  .delete(deleteEvent)

export default eventRouter