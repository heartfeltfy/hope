import { Button } from '@/components/ui/button.tsx'
import authStore from '@/stores/AuthStore.ts'

/** AI 智能问答（对话、知识库等功能规划中） */
const AiChat = () => {
  const login = async () => {
    try {
      await authStore.login('admin', '123456')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-linear-to-br from-slate-50 to-violet-100 dark:from-zinc-900 dark:to-zinc-800 p-6 transition-colors duration-300">
      <div className="w-full max-w-lg text-center space-y-4">
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-zinc-100">AI 智能问答</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          大语言模型对话与知识库检索（规划中）
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <Button variant="secondary" onClick={login}>
            登录
          </Button>
          <Button variant="secondary" onClick={() => authStore.refresh()}>
            无感刷新
          </Button>
          <Button variant="secondary" onClick={() => authStore.logout()}>
            退出登录
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AiChat
