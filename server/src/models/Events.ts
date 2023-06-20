import mongoose, { Document, Schema } from "mongoose"

interface EventModel extends Document {
  eventName: string 
  eventLink?: string
  eventDay: string
  eventTime?: string
  eventType?: string
  eventDesc: string
}

const EventSchema: Schema = new mongoose.Schema({
  eventName: {
    type: String,
    maxLength: 500,
    required: true
  },
  eventLink: { 
    type: String,
    maxLength: 250
  },
  eventDay: {
    type: String,
    maxLength: 100,
    required: true
  },
  eventTime: { 
    type: String,
    maxLength: 100,
  },
  eventType: { 
    type: String,
    maxLength: 100,
  },
  eventDesc: {
    type: String,
    maxLength: 3000,
    required: true
  }
}, { timestamps: true })

export default mongoose.model<EventModel>('Event', EventSchema)