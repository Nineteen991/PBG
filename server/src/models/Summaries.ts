import mongoose, { Document, Schema } from "mongoose"

interface SummaryModel extends Document {
  name: string,
  group?: string,
  url: string
}

const SummariesSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  group: {
    type: String,
  },
  url: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model<SummaryModel>('Summaries', SummariesSchema)