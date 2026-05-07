import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/utils/cn'
import { Bot, User } from 'lucide-react'
import type { ChatMessage } from '@/types/chat'

interface ChatBubbleProps {
  message: ChatMessage
  streamingContent?: string
  isStreaming?: boolean
}

const ChatBubble = ({ message, streamingContent, isStreaming }: ChatBubbleProps) => {
  const isUser = message.role === 'user'

  const displayContent =
    isStreaming && streamingContent !== undefined ? streamingContent : message.content

  return (
    <div className={cn('flex gap-3', isUser ? 'flex-row-reverse' : 'flex-row')}>
      <div
        className={cn(
          'shrink-0 size-8 rounded-full flex items-center justify-center',
          isUser ? 'bg-indigo-100 dark:bg-indigo-900/30' : 'bg-emerald-100 dark:bg-emerald-900/30'
        )}
      >
        {isUser ? (
          <User className="size-4 text-indigo-600 dark:text-indigo-400" />
        ) : (
          <Bot className="size-4 text-emerald-600 dark:text-emerald-400" />
        )}
      </div>

      <div
        className={cn(
          'max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl text-sm',
          isUser
            ? 'bg-indigo-600 text-white rounded-tr-sm'
            : cn(
                'bg-white dark:bg-zinc-800',
                'border border-slate-200 dark:border-zinc-700',
                'text-slate-700 dark:text-slate-200',
                'rounded-tl-sm'
              )
        )}
      >
        {isUser ? (
          <p className="leading-relaxed whitespace-pre-wrap">{displayContent}</p>
        ) : (
          <div className="prose-chat">
            {!displayContent && isStreaming ? (
              <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-slate-800 dark:text-slate-100">
                      {children}
                    </strong>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>
                  ),
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  code: ({ className, children, ...props }) => {
                    const isInline = !className
                    return isInline ? (
                      <code
                        className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 text-xs font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <code className={cn(className, 'text-xs')} {...props}>
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="my-2 p-3 rounded-lg bg-slate-800 dark:bg-zinc-900 text-slate-200 text-xs overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-3 border-indigo-400 dark:border-indigo-500 pl-3 my-2 italic text-slate-500 dark:text-slate-400">
                      {children}
                    </blockquote>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-lg font-bold mt-3 mb-2 text-slate-800 dark:text-slate-100">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-base font-bold mt-3 mb-2 text-slate-800 dark:text-slate-100">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-sm font-bold mt-2 mb-1 text-slate-800 dark:text-slate-100">
                      {children}
                    </h3>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {displayContent}
              </ReactMarkdown>
            )}
            {isStreaming && displayContent && (
              <span className="inline-block w-0.5 h-4 align-text-bottom bg-emerald-500 animate-pulse ml-0.5" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatBubble
