import { cn } from '@/utils/cn'
import MoodIcon from './MoodIcon'
import type { LifeMoment } from '@/types/life'

interface TimelineItemProps {
  moment: LifeMoment
  isLast: boolean
}

const TimelineItem = ({ moment, isLast }: TimelineItemProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="relative flex gap-4 sm:gap-6 pb-8">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'size-3 rounded-full mt-2 shrink-0',
            'bg-indigo-400 dark:bg-indigo-500',
            'ring-4 ring-indigo-100 dark:ring-indigo-900/30'
          )}
        />
        {!isLast && <div className="w-px flex-1 bg-slate-200 dark:bg-zinc-700 mt-1" />}
      </div>

      <div className="flex-1 min-w-0 -mt-0.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {formatDate(moment.date)}
          </span>
          <MoodIcon mood={moment.mood} showLabel />
        </div>

        <div
          className={cn(
            'p-4 sm:p-5 rounded-xl',
            'bg-white dark:bg-zinc-800/80',
            'border border-slate-200 dark:border-zinc-700',
            'shadow-sm hover:shadow-md',
            'transition-all duration-200'
          )}
        >
          <h3
            className={cn(
              'text-base sm:text-lg font-bold mb-2',
              'text-slate-800 dark:text-slate-100'
            )}
          >
            {moment.title}
          </h3>

          <p
            className={cn(
              'text-sm leading-relaxed mb-3',
              'text-slate-600 dark:text-slate-300',
              'tracking-wide'
            )}
          >
            {moment.content}
          </p>

          {moment.images.length > 0 && (
            <div
              className={cn(
                'grid gap-2 mb-3',
                moment.images.length === 1 && 'grid-cols-1',
                moment.images.length === 2 && 'grid-cols-2',
                moment.images.length >= 3 && 'grid-cols-3'
              )}
            >
              {moment.images.map(img => (
                <div key={img.id} className="rounded-lg overflow-hidden aspect-[4/3]">
                  <img
                    src={img.thumbnailUrl || img.url}
                    alt={img.alt || ''}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {moment.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {moment.tags.map(tag => (
                <span
                  key={tag}
                  className={cn(
                    'px-2 py-0.5 rounded-full text-xs',
                    'bg-slate-100 text-slate-500',
                    'dark:bg-zinc-700 dark:text-slate-400'
                  )}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
