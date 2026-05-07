import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import { Plus, MessageSquare, Trash2, Bot } from 'lucide-react'

const SessionList = observer(() => {
  const { chatStore } = useStores()
  const { sessions, currentSessionId } = chatStore

  return (
    <div className="flex flex-col h-full">
      <button
        onClick={() => chatStore.createSession()}
        className={cn(
          'flex items-center gap-2 w-full px-3 py-2.5 mb-3 rounded-lg',
          'text-sm font-medium',
          'bg-indigo-600 text-white hover:bg-indigo-700',
          'transition-colors duration-200'
        )}
      >
        <Plus className="size-4" />
        新对话
      </button>

      <div className="flex-1 overflow-y-auto space-y-1">
        {sessions.map(session => (
          <div
            key={session.id}
            className={cn(
              'group flex items-center gap-2 px-3 py-2 rounded-lg text-sm',
              'cursor-pointer transition-all duration-200',
              currentSessionId === session.id
                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-medium'
                : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-zinc-800'
            )}
            onClick={() => chatStore.switchSession(session.id)}
          >
            <MessageSquare className="size-4 shrink-0" />
            <span className="flex-1 truncate">{session.title}</span>
            <button
              onClick={e => {
                e.stopPropagation()
                chatStore.deleteSession(session.id)
              }}
              className={cn(
                'shrink-0 p-1 rounded opacity-0 group-hover:opacity-100',
                'text-slate-400 hover:text-red-500',
                'dark:text-slate-500 dark:hover:text-red-400',
                'transition-all duration-200'
              )}
            >
              <Trash2 className="size-3.5" />
            </button>
          </div>
        ))}

        {sessions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-slate-400 dark:text-slate-500">
            <Bot className="size-10 mb-2 opacity-50" />
            <p className="text-xs">暂无对话</p>
          </div>
        )}
      </div>
    </div>
  )
})

export default SessionList
