import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import { Monitor, Server, Container, Lightbulb, FolderOpen } from 'lucide-react'
import type { Category } from '@/types/blog'

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Container,
  Lightbulb,
}

interface CategoryFilterProps {
  onCategoryClick?: (slug: string | null) => void
}

const CategoryFilter = observer(({ onCategoryClick }: CategoryFilterProps) => {
  const { blogStore } = useStores()
  const { categories, selectedCategory } = blogStore

  const handleClick = (slug: string | null) => {
    blogStore.setSelectedCategory(slug)
    onCategoryClick?.(slug)
  }

  return (
    <div className="space-y-1">
      <h3
        className={cn(
          'flex items-center gap-2 text-sm font-semibold mb-3',
          'text-slate-700 dark:text-slate-200'
        )}
      >
        <FolderOpen className="size-4" />
        分类
      </h3>
      <button
        onClick={() => handleClick(null)}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm',
          'transition-colors duration-200',
          !selectedCategory
            ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-medium'
            : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-zinc-800'
        )}
      >
        <span>全部文章</span>
        <span
          className={cn(
            'text-xs px-1.5 py-0.5 rounded-full',
            'bg-slate-100 dark:bg-zinc-700',
            'text-slate-500 dark:text-slate-400'
          )}
        >
          {categories.reduce((sum, c) => sum + c.postCount, 0)}
        </span>
      </button>
      {categories.map((category: Category) => {
        const Icon = ICON_MAP[category.icon || ''] || FolderOpen
        return (
          <button
            key={category.id}
            onClick={() => handleClick(category.slug)}
            className={cn(
              'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm',
              'transition-colors duration-200',
              selectedCategory === category.slug
                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-medium'
                : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-zinc-800'
            )}
          >
            <span className="flex items-center gap-2">
              <Icon className="size-4" />
              {category.name}
            </span>
            <span
              className={cn(
                'text-xs px-1.5 py-0.5 rounded-full',
                'bg-slate-100 dark:bg-zinc-700',
                'text-slate-500 dark:text-slate-400'
              )}
            >
              {category.postCount}
            </span>
          </button>
        )
      })}
    </div>
  )
})

export default CategoryFilter
