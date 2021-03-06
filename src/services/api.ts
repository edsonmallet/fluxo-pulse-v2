import axios from 'axios'

const BASE_URL = 'api/v1'

const api = axios.create({
  baseURL: BASE_URL
})

export default api

export const endpoints = {
  checkCompany: '/'
}
