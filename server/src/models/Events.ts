import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eventLink: {
    type: String,
    required: true
  }
})

const Event = mongoose.model('Event', EventSchema)
export default Event