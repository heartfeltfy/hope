import { Calendar, Clock, Eye, User } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { Post } from '@/types/blog'

interface PostMetaProps {
  post: Post
  showCategory?: boolean
}

const PostMeta = ({ post, showCategory = true }: PostMetaProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-1',
        'text-sm text-slate-500 dark:text-slate-400'
      )}
    >
      {showCategory && (
        <span
          className={cn(
            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
            'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
          )}
        >
          {post.category.name}
        </span>
      )}
      <span className="inline-flex items-center gap-1">
        <User className="size-3.5" />
        {post.author}
      </span>
      <span className="inline-flex items-center gap-1">
        <Calendar className="size-3.5" />
        {formatDate(post.publishedAt)}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock className="size-3.5" />
        {post.readingTime} 分钟
      </span>
      <span className="inline-flex items-center gap-1">
        <Eye className="size-3.5" />
        {post.viewCount} 次阅读
      </span>
    </div>
  )
}

export default PostMeta
