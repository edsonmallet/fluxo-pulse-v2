import api, { endpoints } from './api'

interface IDepartment {
  id: number
  name: string
}

interface IGroup {
  name: string
  departments: IDepartment[]
}

export interface ResponseCompany {
  code: string
  logo: string
  groups: IGroup[]
}

interface Request {
  code: string
}

export async function checkCompanyExists({
  code
}: Request): Promise<ResponseCompany> {
  const company = await api.get(`${endpoints.company}/${code}`)
  return company.data
}
