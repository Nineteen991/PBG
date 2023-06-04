import { Request, Response } from 'express'

import SummaryDB from '../models/Summaries'

const createGroupObj = (req: Request, res: Response) => {
  const { group, url, name } = req.body
  console.log(`group: ${group}, url: ${url}, name: ${name}`)
}

export { 
  createGroupObj
}