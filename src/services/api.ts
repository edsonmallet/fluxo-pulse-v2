import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev-app-fluxo-live.herokuapp.com/api/v1'
})

export default api

export const endpoints = {
  company: '/company',
  pulse: '/pulse'
}
