import axios, { InternalAxiosRequestConfig } from 'axios'
import authStore from '@/stores/AuthStore'

const isDevelopment = import.meta.env.MODE === 'development'
const ip = isDevelopment ? '127.0.0.1' : window.location.hostname
const port = isDevelopment ? '3000' : window.location.port
const baseURL = window.location.protocol + '//' + ip + (port ? ':' + port : '') + '/api'

const instance = axios.create({
  baseURL,
  timeout: 10 * 1000, // 10 seconds
})

/**
 * Set the Authorization header for the request
 * @param config Axios request configuration
 */
const setAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  const token = authStore.getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
}
const isAuthorization = ['login', 'public', 'refresh']

instance.interceptors.request.use(
  config => {
    const isAuth = isAuthorization.some(item => config.url?.includes(item))
    if (isAuth) return config

    setAuthorizationHeader(config)
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    // Handle successful responses
    return response
  },
  error => {
    // Handle errors
    return Promise.reject(error)
  }
)

export default instance
