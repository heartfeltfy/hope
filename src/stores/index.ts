import counterStore from './CounterStore'
import authStore from './AuthStore'
import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

// 导出所有 store
export const stores = {
  counterStore,
  authStore,
}

// 为了 TypeScript 类型支持
export type StoresType = typeof stores

// 创建 useStores hook
export const useStores = (): StoresType => {
  const context = useContext(MobXProviderContext)
  if (!context) {
    throw new Error('useStores must be used within a MobXProviderContext.Provider')
  }

  // 确保返回的是 stores 对象
  const store = context.store || context
  return store as StoresType
}
