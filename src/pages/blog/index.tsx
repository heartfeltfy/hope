import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import PostList from './components/PostList'
import CategoryFilter from './components/CategoryFilter'
import TagFilter from './components/TagFilter'
import SearchBar from './components/SearchBar'
import { BookOpen, X } from 'lucide-react'

const Blog = observer(() => {
  const { blogStore } = useStores()
  const { selectedCategory, selectedTag, searchQuery, categories, tags, filteredPosts } = blogStore

  useEffect(() => {
    blogStore.fetchPosts()
    blogStore.fetchCategories()
    blogStore.fetchTags()
  }, [blogStore])

  const hasActiveFilter = selectedCategory || selectedTag || searchQuery

  const getActiveFilterLabel = () => {
    if (selectedCategory) {
      const cat = categories.find(c => c.slug === selectedCategory)
      return cat ? `分类：${cat.name}` : ''
    }
    if (selectedTag) {
      const tag = tags.find(t => t.slug === selectedTag)
      return tag ? `标签：${tag.name}` : ''
    }
    if (searchQuery) return `搜索：${searchQuery}`
    return ''
  }

  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-gradient-to-br from-slate-50 to-blue-50/50',
        'dark:from-zinc-900 dark:to-zinc-800',
        'transition-colors duration-300'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10">
          <h1
            className={cn(
              'text-3xl sm:text-4xl font-bold mb-3',
              'text-slate-800 dark:text-slate-100'
            )}
          >
            <BookOpen className="inline-block size-8 mr-2 -mt-1 text-indigo-600 dark:text-indigo-400" />
            博客
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">技术分享与写作</p>
        </div>

        <div className="mb-6">
          <SearchBar />
        </div>

        {hasActiveFilter && (
          <div
            className={cn(
              'mb-6 flex items-center gap-2',
              'px-4 py-2.5 rounded-lg',
              'bg-indigo-50 dark:bg-indigo-900/20',
              'border border-indigo-100 dark:border-indigo-800/30'
            )}
          >
            <span className="text-sm text-indigo-700 dark:text-indigo-300">
              {getActiveFilterLabel()}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              共 {filteredPosts.length} 篇文章
            </span>
            <button
              onClick={() => blogStore.clearFilters()}
              className={cn(
                'ml-auto inline-flex items-center gap-1 text-xs',
                'text-indigo-600 hover:text-indigo-800',
                'dark:text-indigo-400 dark:hover:text-indigo-300',
                'transition-colors duration-200'
              )}
            >
              <X className="size-3.5" />
              清除筛选
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <PostList />
          </div>

          <aside className="w-full lg:w-64 shrink-0">
            <div
              className={cn(
                'sticky top-20 space-y-6',
                'p-5 rounded-xl',
                'bg-white dark:bg-zinc-800/80',
                'border border-slate-200 dark:border-zinc-700',
                'shadow-sm'
              )}
            >
              <CategoryFilter />
              <div className="border-t border-slate-100 dark:border-zinc-700 pt-4">
                <TagFilter />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
})

export default Blog
