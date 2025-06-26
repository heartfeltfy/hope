import { AxiosRequestConfig } from 'axios'

type User = {
  username: string
  password: string
}

export const loginApi = (user: User): AxiosRequestConfig => ({
  method: 'POST',
  url: '/login',
  data: user,
})

export const refreshApi = (refreshToken: string): AxiosRequestConfig => ({
  method: 'POST',
  url: '/refresh',
  data: { refresh_token: refreshToken },
})

export const logoutApi = (): AxiosRequestConfig => ({
  method: 'POST',
  url: '/logout',
})
