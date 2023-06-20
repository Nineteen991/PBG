import { Request, Response } from "express"

import Event from '../models/Events'
import { EventReqBody } from "../interfaces/events.interface"

const createEvent = async (req: Request, res: Response) => {
  const { 
    eventName, 
    eventLink,
    eventDay,
    eventTime,
    eventType,
    eventDesc
  } = req.body as EventReqBody

  if (!eventName || !eventDay || !eventDesc) {
    throw new Error("Need event name, link, & description sucka!")
  }

  const event = await Event.create({ 
    eventName, 
    eventLink,
    eventDay,
    eventTime,
    eventType,
    eventDesc
  })
  if (!event) {
    throw new Error("Event not saved to da database :(")
  }
  res.status(200).json({ event })
}

const getEvents = async (req: Request, res: Response) => {
  const events = await Event.find({})
  res.status(200).json({ events })
}

const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params
  const event = await Event.findOne({ _id: id })

  if (!event) throw new Error("Event not found")

  event.deleteOne()
  res.status(200).json({ msg: `Event with id # ${ id } deleted` })
}

export { createEvent, getEvents, deleteEvent }