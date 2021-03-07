import { query } from '@config/db'
import {
  queryGetCompany,
  queryGetGroupsByCompany,
  queryGetDepartmentsByGroups
} from '@config/querys'
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

    const company = await query(queryGetCompany, code)
    const groups = await query(queryGetGroupsByCompany, company.id)

    console.log(groups)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
