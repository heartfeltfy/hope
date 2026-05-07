import authStore from './AuthStore'
import themeStore from './ThemeStore'
import blogStore from './BlogStore'
import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

export const stores = {
  authStore,
  themeStore,
  blogStore,
}

export type StoresType = typeof stores

export const useStores = (): StoresType => {
  const context = useContext(MobXProviderContext)
  if (!context) {
    throw new Error('useStores must be used within a MobXProviderContext.Provider')
  }

  const store = context.store || context
  return store as StoresType
}
