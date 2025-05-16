import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

type CounterStoreType = {
  count: number
  b: number
  increment: () => void
  decrement: () => void
  readonly doubleCount: number
}
const counterStore = makeAutoObservable<CounterStoreType>({
  count: 2,
  b: 1,
  increment() {
    this.count += 1
    this.b += 100
  },

  decrement() {
    this.count -= 1
    this.b -= 50
  },

  get doubleCount() {
    return this.count * 2
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
