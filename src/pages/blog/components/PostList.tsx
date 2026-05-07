import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import PostCard from './PostCard'
import { cn } from '@/utils/cn'
import { FileText } from 'lucide-react'

const PostList = observer(() => {
  const { blogStore } = useStores()
  const { filteredPosts, loading } = blogStore

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div
          className={cn(
            'w-10 h-10 rounded-full',
            'border-3 border-slate-200 border-t-indigo-500',
            'dark:border-zinc-700 dark:border-t-indigo-400',
            'animate-spin'
          )}
        />
      </div>
    )
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500">
        <FileText className="size-16 mb-4 opacity-50" />
        <p className="text-lg font-medium">暂无文章</p>
        <p className="text-sm mt-1">试试调整筛选条件或搜索关键词</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
})

export default PostList
