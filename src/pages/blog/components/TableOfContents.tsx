import { cn } from '@/utils/cn'
import type { TocItem } from '@/types/blog'

interface TableOfContentsProps {
  items: TocItem[]
  activeId?: string
  onItemClick?: (id: string) => void
}

const TableOfContents = ({ items, activeId, onItemClick }: TableOfContentsProps) => {
  if (items.length === 0) return null

  return (
    <nav className="space-y-1">
      <h4 className={cn('text-sm font-semibold mb-3', 'text-slate-700 dark:text-slate-200')}>
        目录
      </h4>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onItemClick?.(item.id)}
          className={cn(
            'block w-full text-left text-sm py-1 px-2 rounded transition-colors duration-200',
            item.level === 2 && 'pl-2',
            item.level === 3 && 'pl-5',
            item.level === 4 && 'pl-8',
            activeId === item.id
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 font-medium'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-zinc-800'
          )}
        >
          {item.text}
        </button>
      ))}
    </nav>
  )
}

export default TableOfContents
