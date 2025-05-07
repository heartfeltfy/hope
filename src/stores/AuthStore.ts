import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

interface UserInfo {
  id: string
  username: string
  email: string
  avatar?: string
  token: string
}

const authStore = makeAutoObservable({
  // 用户信息
  userInfo: null as UserInfo | null,
  // 是否已登录
  isLoggedIn: false,
  // 登录状态
  loading: false,
  // 错误信息
  error: null as string | null,

  // 设置用户信息
  setUserInfo(userInfo: UserInfo | null) {
    authStore.userInfo = userInfo
    authStore.isLoggedIn = !!userInfo
  },

  // 设置加载状态
  setLoading(loading: boolean) {
    authStore.loading = loading
  },

  // 设置错误信息
  setError(error: string | null) {
    authStore.error = error
  },

  // 登录
  async login(username: string, password: string) {
    try {
      authStore.setLoading(true)
      authStore.setError(null)

      // TODO: 这里替换为实际的登录 API 调用
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error('登录失败')
      }

      const userInfo = await response.json()
      authStore.setUserInfo(userInfo)
    } catch (error) {
      authStore.setError(error instanceof Error ? error.message : '登录失败')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },

  // 登出
  logout() {
    authStore.setUserInfo(null)
    authStore.setError(null)
  },

  // 检查登录状态
  checkAuth() {
    // TODO: 这里可以添加 token 验证逻辑
    return authStore.isLoggedIn
  },

  // 获取用户信息
  getUserInfo() {
    return authStore.userInfo
  },

  // 获取 token
  getToken() {
    return authStore.userInfo?.token
  },
})

// 配置持久化
makePersistable(authStore, {
  name: 'AuthStore',
  properties: ['userInfo', 'isLoggedIn'],
  storage: window.localStorage,
})

export default authStore
