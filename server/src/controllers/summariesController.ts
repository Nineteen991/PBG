import { Request, Response } from 'express'
import cloudinary from 'cloudinary'
import fs from 'fs'

import SummaryDB from '../models/Summaries'

const addSummary = async (req: Request, res: Response) => {
  if (!req.files) return
  console.log(req.files.key)

  try {
    const result = await cloudinary.v2.uploader.upload(
      req.files.Summaries.tempFilePath,
      {
        use_filename: true,
        folder: 'PBG'
      }
    )
      .catch(error => console.error("Didn't upload to cloudinary: ", error))
    console.log(result)
    fs.unlinkSync(req.files.Summaries.tempFilePath)
  
    // const summary = await SummaryDB.create({}) 
    
    return res.status(200).json({ url: result.secure_url })
  } catch (error) {
    res.status(500).json({ "Probably didn't upload to cloudinary: ": error })
  }
}

export { addSummary }