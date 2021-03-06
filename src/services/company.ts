import api, { endpoints } from './api'

interface Response {
  code: string
  logo: string
}

interface Request {
  code: string
}

export async function checkCompanyExists({ code }: Request): Promise<Response> {
  const company = await api.get(`/${code}`)
  return company.data
}
