import { Button } from '@/components/ui/button.tsx'

const Chat = () => {
  const login = async () => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'admin', password: '123456' }),
      })
      const data = await res.json()
      localStorage.setItem('refresh_token', data.refresh_token)
    } catch (error) {
      console.error(error)
    }
  }
  const refresh = async () => {
    try {
      const refresh_token = localStorage.getItem('refresh_token')
      const res = await fetch('/api/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token }),
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Button variant="secondary" onClick={login}>
        登录
      </Button>
      <Button variant="secondary" onClick={refresh}>
        无感刷新
      </Button>
    </>
  )
}
export default Chat
