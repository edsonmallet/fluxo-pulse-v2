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

export interface ResponseQuestion {
  id: number
  question: string
  type_answer: string
  answers: Array<IAnswers>
}

interface IAnswers {
  id: number
  value: string
  description: string
  note: string
}

export async function getNextQuestion(): Promise<ResponseQuestion> {
  const question = await api.get(`${endpoints.pulse}/getquestion`)
  return question.data
}

interface RequestVote {
  tokenPulse: string
  answerId: number
  note: number
}

export interface ResponseVote {
  status: boolean
  message: string
}

export async function vote({
  tokenPulse,
  answerId,
  note
}: RequestVote): Promise<ResponseVote> {
  const vote = await api.post(`${endpoints.pulse}/vote`, {
    tokenPulse,
    answerId,
    note
  })
  return vote.data
}
