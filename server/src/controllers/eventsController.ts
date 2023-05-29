import { Request, Response } from "express"

import Event from '../models/Events'
import EventReqBody from "../interfaces/events.interface"

const createEvent = async (req: Request, res: Response) => {
  const { name, eventLink } = req.body as EventReqBody
  console.log(`${name}, link: ${eventLink}`)

  res.status(200).json({ name, eventLink })
}

export {
  createEvent
}