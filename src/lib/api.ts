import { API_BASE_URL } from '@/constants/baseUrl'
import axios from 'axios'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
