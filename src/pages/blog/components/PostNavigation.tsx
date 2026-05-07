import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Post } from '@/types/blog'

interface PostNavigationProps {
  prevPost: Post | null
  nextPost: Post | null
}

const PostNavigation = ({ prevPost, nextPost }: PostNavigationProps) => {
  if (!prevPost && !nextPost) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {prevPost ? (
        <Link
          to={`/blog/${prevPost.slug}`}
          className={cn(
            'group flex flex-col p-4 rounded-lg',
            'bg-white dark:bg-zinc-800/80',
            'border border-slate-200 dark:border-zinc-700',
            'hover:shadow-md hover:border-indigo-200',
            'dark:hover:border-indigo-700',
            'transition-all duration-200'
          )}
        >
          <span
            className={cn(
              'flex items-center gap-1 text-xs mb-2',
              'text-slate-400 dark:text-slate-500',
              'group-hover:text-indigo-500 dark:group-hover:text-indigo-400',
              'transition-colors duration-200'
            )}
          >
            <ArrowLeft className="size-3" />
            上一篇
          </span>
          <span
            className={cn(
              'text-sm font-medium line-clamp-2',
              'text-slate-700 dark:text-slate-200',
              'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
              'transition-colors duration-200'
            )}
          >
            {prevPost.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {nextPost ? (
        <Link
          to={`/blog/${nextPost.slug}`}
          className={cn(
            'group flex flex-col items-end p-4 rounded-lg text-right',
            'bg-white dark:bg-zinc-800/80',
            'border border-slate-200 dark:border-zinc-700',
            'hover:shadow-md hover:border-indigo-200',
            'dark:hover:border-indigo-700',
            'transition-all duration-200'
          )}
        >
          <span
            className={cn(
              'flex items-center gap-1 text-xs mb-2',
              'text-slate-400 dark:text-slate-500',
              'group-hover:text-indigo-500 dark:group-hover:text-indigo-400',
              'transition-colors duration-200'
            )}
          >
            下一篇
            <ArrowRight className="size-3" />
          </span>
          <span
            className={cn(
              'text-sm font-medium line-clamp-2',
              'text-slate-700 dark:text-slate-200',
              'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
              'transition-colors duration-200'
            )}
          >
            {nextPost.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

export default PostNavigation
