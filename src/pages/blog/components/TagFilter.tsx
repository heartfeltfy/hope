import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import { Tag, Tags } from 'lucide-react'

interface TagFilterProps {
  onTagClick?: (slug: string | null) => void
}

const TagFilter = observer(({ onTagClick }: TagFilterProps) => {
  const { blogStore } = useStores()
  const { tags, selectedTag } = blogStore

  const handleClick = (slug: string | null) => {
    blogStore.setSelectedTag(slug)
    onTagClick?.(slug)
  }

  const maxCount = Math.max(...tags.map(t => t.postCount), 1)
  const minCount = Math.min(...tags.map(t => t.postCount), 0)
  const range = maxCount - minCount || 1

  const getTagSize = (count: number) => {
    const ratio = (count - minCount) / range
    const size = 0.75 + ratio * 0.375
    return `${size}rem`
  }

  return (
    <div>
      <h3
        className={cn(
          'flex items-center gap-2 text-sm font-semibold mb-3',
          'text-slate-700 dark:text-slate-200'
        )}
      >
        <Tags className="size-4" />
        标签
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag.id}
            onClick={() => handleClick(selectedTag === tag.slug ? null : tag.slug)}
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-1 rounded-full',
              'transition-all duration-200',
              'border',
              selectedTag === tag.slug
                ? 'border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300'
                : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20'
            )}
            style={{ fontSize: getTagSize(tag.postCount) }}
          >
            <Tag className="size-3" style={{ color: tag.color }} />
            {tag.name}
            <span className="opacity-60 text-[0.7em]">({tag.postCount})</span>
          </button>
        ))}
      </div>
    </div>
  )
})

export default TagFilter
