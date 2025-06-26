import { Button } from '@/components/ui/button.tsx'
import authStore from '@/stores/AuthStore.ts'

const Chat = () => {
  const login = async () => {
    try {
      await authStore.login('admin', '123456')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Button variant="secondary" onClick={login}>
        登录
      </Button>
      <Button variant="secondary" onClick={() => authStore.refresh()}>
        无感刷新
      </Button>
      <Button variant="secondary" onClick={() => authStore.logout()}>
        退出登录
      </Button>
    </>
  )
}
export default Chat
