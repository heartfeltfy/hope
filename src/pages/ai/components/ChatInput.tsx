import { useState, useRef, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { Send, Loader2, Sparkles } from 'lucide-react'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!input.trim() || disabled) return
    onSend(input)
    setInput('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 128) + 'px'
    }
  }, [input])

  const canSend = input.trim() && !disabled

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={cn(
          'relative flex items-end gap-2 p-2 rounded-2xl',
          'bg-white dark:bg-zinc-800',
          'border transition-all duration-300',
          isFocused && canSend
            ? 'border-indigo-400 dark:border-indigo-500 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20'
            : isFocused
              ? 'border-indigo-300 dark:border-indigo-600 shadow-md shadow-slate-100/50 dark:shadow-zinc-900/20'
              : 'border-slate-200 dark:border-zinc-700 shadow-sm hover:border-slate-300 dark:hover:border-zinc-600'
        )}
      >
        <div className="flex-1 flex items-end gap-2">
          <Sparkles
            className={cn(
              'size-4 mb-2.5 ml-1 shrink-0 transition-colors duration-300',
              isFocused
                ? 'text-indigo-500 dark:text-indigo-400'
                : 'text-slate-300 dark:text-slate-600'
            )}
          />
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSubmit()
              }
            }}
            placeholder="输入消息..."
            rows={1}
            className={cn(
              'flex-1 resize-none px-1 py-2',
              'text-sm text-slate-700 dark:text-slate-200',
              'placeholder:text-slate-400 dark:placeholder:text-slate-500',
              'bg-transparent border-none outline-none',
              'max-h-32 leading-relaxed'
            )}
            style={{ minHeight: '36px' }}
          />
        </div>

        <button
          type="submit"
          disabled={!canSend}
          className={cn(
            'shrink-0 size-9 rounded-xl flex items-center justify-center',
            'transition-all duration-300',
            canSend
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200/50 dark:shadow-indigo-900/30 hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 active:scale-95'
              : 'bg-slate-100 dark:bg-zinc-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
          )}
        >
          {disabled ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send
              className={cn(
                'size-4',
                canSend && 'transition-transform group-hover:translate-x-0.5'
              )}
            />
          )}
        </button>
      </div>

      <p
        className={cn(
          'mt-1.5 text-center text-xs transition-colors duration-300',
          isFocused ? 'text-slate-400 dark:text-slate-500' : 'text-slate-300 dark:text-slate-600'
        )}
      >
        Enter 发送 · Shift+Enter 换行
      </p>
    </form>
  )
}

export default ChatInput
