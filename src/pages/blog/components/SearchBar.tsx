import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import { Search, X } from 'lucide-react'

const SearchBar = observer(() => {
  const { blogStore } = useStores()
  const { searchQuery } = blogStore

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    blogStore.setSearchQuery(e.target.value)
  }

  const handleClear = () => {
    blogStore.setSearchQuery('')
  }

  return (
    <div className="relative">
      <Search
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 size-4',
          'text-slate-400 dark:text-slate-500'
        )}
      />
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="搜索文章..."
        className={cn(
          'w-full pl-10 pr-9 py-2.5 rounded-lg',
          'bg-white dark:bg-zinc-800',
          'border border-slate-200 dark:border-zinc-700',
          'text-sm text-slate-700 dark:text-slate-200',
          'placeholder:text-slate-400 dark:placeholder:text-slate-500',
          'focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400',
          'dark:focus:ring-indigo-400/30 dark:focus:border-indigo-500',
          'transition-all duration-200'
        )}
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2',
            'text-slate-400 hover:text-slate-600',
            'dark:text-slate-500 dark:hover:text-slate-300',
            'transition-colors duration-200'
          )}
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
})

export default SearchBar
