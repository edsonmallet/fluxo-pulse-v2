import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3344/api/v1'

const api = axios.create({
  baseURL: BASE_URL
})

export default api

export const endpoints = {
  company: '/company'
}
