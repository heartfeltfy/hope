import { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import ChatBubble from './components/ChatBubble'
import ChatInput from './components/ChatInput'
import QuickActions from './components/QuickActions'
import SessionList from './components/SessionList'
import { Bot, PanelLeftClose, PanelLeft } from 'lucide-react'

const AiChat = observer(() => {
  const { chatStore } = useStores()
  const { currentMessages, isGenerating, currentSession, streamingContent, streamingMessageId } =
    chatStore
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentMessages.length, isGenerating])

  const handleSend = (message: string) => {
    chatStore.sendMessage(message)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className={cn(
        'flex h-full',
        'bg-gradient-to-br from-slate-50 to-violet-50/50',
        'dark:from-zinc-900 dark:to-zinc-800',
        'transition-colors duration-300',
        'overflow-hidden'
      )}
    >
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={cn(
          'shrink-0 w-64 p-3 flex flex-col',
          'bg-white/80 dark:bg-zinc-900/80',
          'border-r border-slate-200 dark:border-zinc-700',
          'backdrop-blur-sm',
          'transition-transform duration-300',
          'z-30',
          'fixed lg:relative inset-y-0 left-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <SessionList />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <div
          className={cn(
            'flex items-center justify-between px-4 py-3',
            'border-b border-slate-200 dark:border-zinc-700',
            'bg-white/60 dark:bg-zinc-900/60',
            'backdrop-blur-sm'
          )}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={cn(
                'p-1.5 rounded-lg lg:hidden',
                'text-slate-500 hover:text-slate-700',
                'dark:text-slate-400 dark:hover:text-slate-200',
                'hover:bg-slate-100 dark:hover:bg-zinc-800',
                'transition-colors duration-200'
              )}
            >
              {sidebarOpen ? (
                <PanelLeftClose className="size-5" />
              ) : (
                <PanelLeft className="size-5" />
              )}
            </button>
            <Bot className="size-5 text-emerald-500" />
            <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              AI 智能问答
            </h1>
            <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">
              · 静态响应模式
            </span>
          </div>
          {currentSession && (
            <span className="text-xs text-slate-400 dark:text-slate-500 truncate max-w-[200px]">
              {currentSession.title}
            </span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {currentMessages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div
                className={cn(
                  'size-16 rounded-2xl flex items-center justify-center mb-6',
                  'bg-gradient-to-br from-emerald-400 to-teal-500',
                  'shadow-lg shadow-emerald-200/50 dark:shadow-none'
                )}
              >
                <Bot className="size-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                你好，我是 Hope AI
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 text-center max-w-md">
                我是一个智能问答助手，目前处于静态响应模式。你可以问我关于前端技术的问题，或者点击下方快捷按钮开始对话。
              </p>
              <QuickActions onAction={handleSend} disabled={isGenerating} />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {currentMessages.map(message => (
                <ChatBubble
                  key={message.id}
                  message={message}
                  isStreaming={isGenerating && message.id === streamingMessageId}
                  streamingContent={
                    message.id === streamingMessageId ? streamingContent : undefined
                  }
                />
              ))}

              {currentMessages.length > 0 && !isGenerating && (
                <div className="pt-4">
                  <QuickActions onAction={handleSend} disabled={isGenerating} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div
          className={cn(
            'shrink-0 p-3 sm:p-4',
            'border-t border-slate-200 dark:border-zinc-700',
            'bg-white/60 dark:bg-zinc-900/60',
            'backdrop-blur-sm'
          )}
        >
          <div className="max-w-3xl mx-auto">
            <ChatInput onSend={handleSend} disabled={isGenerating} />
          </div>
        </div>
      </div>
    </div>
  )
})

export default AiChat
