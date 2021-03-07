import api, { endpoints } from './api'

interface Response {
  digital: string
}

interface Request {
  gender: string
  ageGroup: string
  ageWork: string
  subgroup: number
}

export async function createUser({
  gender,
  ageGroup,
  ageWork,
  subgroup
}: Request): Promise<Response> {
  const newUser = await api.post(`${endpoints.pulse}/createuser`, {
    gender,
    ageGroup,
    ageWork,
    subgroup
  })
  return newUser.data
}
