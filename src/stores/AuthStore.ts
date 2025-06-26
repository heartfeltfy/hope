import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import axiosInstance from '@/utils/axios'
import { loginApi, refreshApi, logoutApi } from '@/api/auth'

// 定义错误类型
interface AuthError {
  code: string
  message: string
}

interface UserInfo {
  username: string
  access_token: string
  refresh_token: string
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
  refresh(): Promise<void>
  logout(): void
  getUserInfo(): UserInfo | null
  getToken(): string | undefined
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

      const { data } = await axiosInstance.request(loginApi({ username, password }))

      if (!data || !data.access_token) {
        // 此处可以提示错误信息
        throw new Error('登录失败，未获取到有效的 token')
      }

      this.setUserInfo(data)
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
  // 刷新 token
  async refresh() {
    try {
      this.setLoading(true)
      this.setError(null)

      if (!this.userInfo || !this.userInfo.refresh_token) {
        throw new Error('刷新令牌不能为空')
      }

      const { data } = await axiosInstance.request(refreshApi(this.userInfo.refresh_token))

      if (!data || !data.access_token) {
        throw new Error('刷新失败，未获取到有效的 token')
      }

      this.setUserInfo(data)
    } catch (error) {
      if (error instanceof Error) {
        this.setError(error.message)
      } else {
        this.setError('刷新失败')
      }
      // 此处可以提示错误信息
      throw error
    } finally {
      this.setLoading(false)
    }
  },
  // 登出
  async logout() {
    try {
      this.setLoading(true)
      this.setError(null)

      // 调用登出 API
      const { data } = await axiosInstance.request(logoutApi())
      console.log(data)
      this.reset()
    } catch (error) {
      console.error('登出时发生错误:', error)
    }
  },

  // 获取用户信息
  getUserInfo() {
    return this.userInfo
  },

  // 获取 token
  getToken() {
    return this.userInfo?.access_token
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
