import { Request, Response } from 'express'
import cloudinary from 'cloudinary'
import fs from 'fs'

const addSummary = async (req: Request, res: Response) => {
  if (!req.files) return
  const filePath: any = req.files.Summaries
  console.log(filePath.Summaries.tempFilePath)
  
  try {
    const result: any = await cloudinary.v2.uploader.upload(
      filePath.tempFilePath,
      {
        use_filename: true,
        folder: 'PBG'
      }
    )
      .catch(error => console.error("Didn't upload to cloudinary: ", error))
    console.log(result)
    fs.unlinkSync(filePath.tempFilePath)
    
    return res.status(200).json({ url: result.secure_url })
  } catch (error) {
    res.status(500).json({ "Probably didn't upload to cloudinary: ": error })
  }
}

export { addSummary }