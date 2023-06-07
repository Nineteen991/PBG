import mongoose, { Document, Schema } from "mongoose"

interface SummaryModel extends Document {
  url: string
}

const SummariesSchema: Schema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model<SummaryModel>('Summaries', SummariesSchema)