import mongoose, { Document, Schema } from "mongoose"

interface EventModel extends Document {
  name: string 
  eventLink: string
}

const EventSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eventLink: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model<EventModel>('Event', EventSchema)