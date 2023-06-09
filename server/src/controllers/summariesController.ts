import { Request, Response } from 'express'
import cloudinary from 'cloudinary'
import fs from 'fs'

import SummariesDB from '../models/Summaries'

const addSummary = async (req: Request, res: Response) => {
  if (!req.files) return 
  const filePath: any = req.files.Summaries
  
  try {
    const result: any = await cloudinary.v2.uploader.upload(
      filePath.tempFilePath,
      {
        use_filename: true,
        folder: 'PBG'
      }
    )
      .catch(error => console.error("Didn't upload to cloudinary: ", error))

    fs.unlinkSync(filePath.tempFilePath)

    const summaryUrl = await SummariesDB.create({ 
      url: result.secure_url,
      name: filePath.name
    })
    if (!summaryUrl) throw new Error("File wasn't added to da database :(")
    
    return res.status(200).json({ url: summaryUrl, name: filePath.name })
  } catch (error) {
    res.status(500).json({ "Probably didn't upload to cloudinary: ": error })
  }
}

const getSummaries = async (req: Request, res: Response) => {
  const summaries = await SummariesDB.find({})
  res.status(200).json({ summaries })
}

export { addSummary, getSummaries }