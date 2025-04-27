import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

const counterStore = makeAutoObservable({
  count: 2,
  b: 1,
  increment: () => {
    counterStore.count += 1
    counterStore.b += 100
  },

  decrement: () => {
    counterStore.count -= 1
    counterStore.b -= 50
  },

  get doubleCount() {
    return counterStore.count * 2
  },
})

// 配置持久化
makePersistable(counterStore, {
  name: 'CounterStore',
  properties: ['count'],
  storage: window.localStorage,
})

export default counterStore

export const useCounter = () => counterStore
