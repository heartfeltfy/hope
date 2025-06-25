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
const authStore: AuthState = makeAutoObservable<AuthState>({
  // 用户信息
  userInfo: null,
  // 是否已登录
  isLoggedIn: false,
  // 登录状态
  loading: false,
  // 错误信息
  error: null,

  // 设置用户信息
  setUserInfo(userInfo) {
    this.userInfo = userInfo
    this.isLoggedIn = !!userInfo
    if (userInfo) {
      this.startAutoLogoutTimer()
    } else if (autoLogoutTimer) {
      clearTimeout(autoLogoutTimer)
    }
  },

  // 设置加载状态
  setLoading(loading) {
    this.loading = loading
  },

  // 设置错误信息
  setError(error) {
    if (typeof error === 'string') {
      this.error = error
    } else if (error) {
      this.error = error.message
    } else {
      this.error = null
    }
  },

  // 登录
  async login(username, password) {
    try {
      this.setLoading(true)
      this.setError(null)

      // 输入验证
      if (!username || !password) {
        // 此处可以提示错误信息
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
        // 此处提示错误信息
        throw new Error(errorData.message || '登录失败')
      }

      const userInfo = await response.json()
      this.setUserInfo(userInfo)
    } catch (error) {
      if (error instanceof Error) {
        this.setError(error.message)
      } else {
        this.setError('登录失败')
      }
      // 此处可以提示错误信息
      throw error
    } finally {
      this.setLoading(false)
    }
  },

  // 登出
  logout() {
    this.reset()
  },

  // 检查登录状态
  checkAuth() {
    if (!this.isLoggedIn) return false
    return this.checkTokenExpiration()
  },

  // 获取用户信息
  getUserInfo() {
    return this.userInfo
  },

  // 获取 token
  getToken() {
    return this.userInfo?.token
  },

  // 检查 token 是否过期
  checkTokenExpiration() {
    const token = this.getToken()
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
      this.logout()
    }, timeout)
  },

  // 重置所有状态
  reset() {
    this.userInfo = null
    this.isLoggedIn = false
    this.loading = false
    this.error = null
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
    try {
      const stored = localStorage.getItem('AuthStore')
      if (stored) {
        const data = JSON.parse(stored)
        if (!data.version || data.version !== persistConfig.version) {
          localStorage.removeItem('AuthStore')
        }
      }
    } catch {
      localStorage.removeItem('AuthStore')
    }
  },
}

// 配置持久化
void makePersistable(authStore, persistConfig)

export default authStore
