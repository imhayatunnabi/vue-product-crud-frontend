import axios from 'axios'

const instance = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api'
  baseURL: process.env.VUE_APP_ROOT_API
})

export default instance
