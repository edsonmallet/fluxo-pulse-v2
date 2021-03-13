import api, { endpoints } from './api'

export interface ResponseFeedback {
  status: boolean
  message: string
}

interface Request {
  tokenPulse: string
  type: string
  feedback: string
  humor: string
}

export async function createFeedback({
  tokenPulse,
  type,
  feedback,
  humor
}: Request): Promise<ResponseFeedback> {
  const res = await api.post(endpoints.feedback, {
    tokenPulse,
    type,
    feedback,
    humor
  })
  return res.data
}
