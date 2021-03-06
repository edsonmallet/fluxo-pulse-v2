import { query } from '@config/db'
import { queryGetCompanyData } from '@config/querys'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { code } = req.query
  try {
    if (!code) {
      return res.status(400).json({ message: '`code` required' })
    }
    const results: any = await query(queryGetCompanyData, code)
    return res.json(results[0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
