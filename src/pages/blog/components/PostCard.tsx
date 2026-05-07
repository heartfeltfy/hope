import { Link } from 'react-router-dom'
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { Post } from '@/types/blog'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <Link to={`/blog/${post.slug}`}>
      <article
        className={cn(
          'group relative rounded-xl border border-slate-200 dark:border-zinc-700',
          'bg-white dark:bg-zinc-800/80',
          'shadow-sm hover:shadow-lg',
          'transition-all duration-300 ease-out',
          'hover:-translate-y-1',
          'overflow-hidden'
        )}
      >
        {post.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.coverImage.thumbnailUrl || post.coverImage.url}
              alt={post.coverImage.alt || post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={cn(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
              )}
            >
              {post.category.name}
            </span>
            {post.tags.slice(0, 2).map(tag => (
              <span
                key={tag.id}
                className={cn(
                  'inline-flex items-center px-2 py-0.5 rounded-full text-xs',
                  'bg-slate-100 text-slate-600 dark:bg-zinc-700 dark:text-slate-300'
                )}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <h2
            className={cn(
              'text-lg sm:text-xl font-bold mb-2',
              'text-slate-800 dark:text-slate-100',
              'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
              'transition-colors duration-200',
              'line-clamp-2'
            )}
          >
            {post.title}
          </h2>

          <p
            className={cn(
              'text-sm text-slate-500 dark:text-slate-400 mb-4',
              'line-clamp-2 leading-relaxed'
            )}
          >
            {post.excerpt}
          </p>

          <div
            className={cn(
              'flex items-center justify-between',
              'text-xs text-slate-400 dark:text-slate-500'
            )}
          >
            <div className="flex items-center gap-3">
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
                {post.viewCount}
              </span>
            </div>

            <span
              className={cn(
                'inline-flex items-center gap-1 text-indigo-500 dark:text-indigo-400',
                'opacity-0 group-hover:opacity-100',
                'transition-opacity duration-200'
              )}
            >
              阅读全文
              <ArrowRight className="size-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
