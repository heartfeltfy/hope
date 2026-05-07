import { cn } from '@/utils/cn'

interface QuickActionsProps {
  onAction: (message: string) => void
  disabled?: boolean
}

const QUICK_ACTIONS = [
  { label: '👋 打个招呼', message: '你好' },
  { label: '⚛️ React', message: '介绍一下 React' },
  { label: '📘 TypeScript', message: '介绍一下 TypeScript' },
  { label: '⚡ Vite', message: '介绍一下 Vite' },
  { label: '🎨 Tailwind', message: '介绍一下 Tailwind CSS' },
  { label: '💡 学习建议', message: '给我一些学习建议' },
]

const QuickActions = ({ onAction, disabled }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {QUICK_ACTIONS.map(action => (
        <button
          key={action.label}
          onClick={() => onAction(action.message)}
          disabled={disabled}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs',
            'bg-white dark:bg-zinc-800',
            'border border-slate-200 dark:border-zinc-700',
            'text-slate-600 dark:text-slate-300',
            'hover:border-indigo-200 hover:bg-indigo-50/50',
            'dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20',
            'hover:text-indigo-600 dark:hover:text-indigo-400',
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}

export default QuickActions
