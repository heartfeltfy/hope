import { makeAutoObservable, runInAction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

type Theme = 'light' | 'dark' | 'system'

const themeStore = makeAutoObservable({
  theme: 'system' as Theme,
  systemTheme: 'light' as 'light' | 'dark',
  setTheme(theme: Theme) {
    this.theme = theme
    this.applyTheme()
  },
  detectSystemTheme() {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    runInAction(() => {
      this.systemTheme = mq.matches ? 'dark' : 'light'
    })

    mq.onchange = e => {
      runInAction(() => {
        this.systemTheme = e.matches ? 'dark' : 'light'
        if (this.theme === 'system') {
          this.applyTheme()
        }
      })
    }

    // 立即应用主题
    this.applyTheme()
  },
  // 设置系统主题
  applyTheme() {
    const html = document.documentElement
    let theme = this.theme
    if (this.theme === 'system') {
      theme = this.systemTheme
    }
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
  },
})

makePersistable(themeStore, {
  name: 'themeStore',
  properties: ['theme', 'systemTheme'],
  storage: window.localStorage,
})

themeStore.detectSystemTheme()

export default themeStore
