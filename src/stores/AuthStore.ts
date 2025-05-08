import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

// 定义错误类型
interface AuthError {
  code: string
  message: string
}

interface UserInfo {
  id: string
  username: string
  email: string
  avatar?: string
  token: string
}

// 定义状态类型
interface AuthState {
  // 状态
  userInfo: UserInfo | null
  isLoggedIn: boolean
  loading: boolean
  error: string | null

  // 方法
  setUserInfo(userInfo: UserInfo | null): void
  setLoading(loading: boolean): void
  setError(error: AuthError | string | null): void
  login(username: string, password: string): Promise<void>
  logout(): void
  checkAuth(): boolean
  getUserInfo(): UserInfo | null
  getToken(): string | undefined
  checkTokenExpiration(): boolean
  startAutoLogoutTimer(timeout?: number): void
  reset(): void
}

// 自动登出定时器
let autoLogoutTimer: NodeJS.Timeout | null = null

// 创建 store 实例
const authStore: AuthState = makeAutoObservable({
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
    if (userInfo) {
      authStore.startAutoLogoutTimer()
    } else if (autoLogoutTimer) {
      clearTimeout(autoLogoutTimer)
    }
  },

  // 设置加载状态
  setLoading(loading: boolean) {
    authStore.loading = loading
  },

  // 设置错误信息
  setError(error: AuthError | string | null) {
    if (typeof error === 'string') {
      authStore.error = error
    } else if (error) {
      authStore.error = error.message
    } else {
      authStore.error = null
    }
  },

  // 登录
  async login(username: string, password: string) {
    try {
      authStore.setLoading(true)
      authStore.setError(null)

      // 输入验证
      if (!username || !password) {
        throw new Error('用户名和密码不能为空')
      }

      // 添加请求超时处理
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || '登录失败')
      }

      const userInfo = await response.json()
      authStore.setUserInfo(userInfo)
    } catch (error) {
      if (error instanceof Error) {
        authStore.setError(error.message)
      } else {
        authStore.setError('登录失败')
      }
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },

  // 登出
  logout() {
    authStore.reset()
  },

  // 检查登录状态
  checkAuth() {
    if (!authStore.isLoggedIn) return false
    return authStore.checkTokenExpiration()
  },

  // 获取用户信息
  getUserInfo() {
    return authStore.userInfo
  },

  // 获取 token
  getToken() {
    return authStore.userInfo?.token
  },

  // 检查 token 是否过期
  checkTokenExpiration() {
    const token = authStore.getToken()
    if (!token) return false

    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      return payload.exp * 1000 > Date.now()
    } catch {
      return false
    }
  },

  // 启动自动登出定时器
  startAutoLogoutTimer(timeout: number = 30 * 60 * 1000) {
    if (autoLogoutTimer) clearTimeout(autoLogoutTimer)
    autoLogoutTimer = setTimeout(() => {
      authStore.logout()
    }, timeout)
  },

  // 重置所有状态
  reset() {
    authStore.userInfo = null
    authStore.isLoggedIn = false
    authStore.loading = false
    authStore.error = null
    if (autoLogoutTimer) {
      clearTimeout(autoLogoutTimer)
    }
  },
})

// 持久化配置
const persistConfig = {
  name: 'AuthStore',
  properties: ['userInfo', 'isLoggedIn'] as Array<keyof AuthState>,
  storage: window.localStorage,
  version: 1,
  cleanup: () => {
    const stored = localStorage.getItem('AuthStore')
    if (stored) {
      const data = JSON.parse(stored)
      if (data.version !== persistConfig.version) {
        localStorage.removeItem('AuthStore')
      }
    }
  },
}

// 配置持久化
makePersistable(authStore, persistConfig)

export default authStore
