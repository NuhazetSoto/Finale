import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  //import.meta.env.VITE_API_URL,
  //timeout: 3000
})
