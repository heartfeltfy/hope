import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import TimelineItem from './components/TimelineItem'
import PhotoGallery from './components/PhotoGallery'
import { Camera, Clock, X, Tag } from 'lucide-react'

const Life = observer(() => {
  const { lifeStore } = useStores()
  const { filteredMoments, viewMode, selectedTag, allTags, galleryImages, loading } = lifeStore

  useEffect(() => {
    lifeStore.fetchMoments()
  }, [lifeStore])

  if (loading) {
    return (
      <div
        className={cn(
          'min-h-screen flex justify-center items-center',
          'bg-gradient-to-br from-indigo-50 to-blue-50/50',
          'dark:from-zinc-900 dark:to-zinc-800'
        )}
      >
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

  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-gradient-to-br from-indigo-50 to-blue-50/50',
        'dark:from-zinc-900 dark:to-zinc-800',
        'transition-colors duration-300'
      )}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10">
          <h1
            className={cn(
              'text-3xl sm:text-4xl font-bold mb-3',
              'text-slate-800 dark:text-slate-100'
            )}
          >
            <Camera className="inline-block size-8 mr-2 -mt-1 text-indigo-600 dark:text-indigo-400" />
            生活记录
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">日常随笔、照片墙与时间轴</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-sm">
            <button
              onClick={() => lifeStore.setViewMode('timeline')}
              className={cn(
                'inline-flex items-center whitespace-nowrap gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all duration-200',
                viewMode === 'timeline'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 font-medium shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              <Clock className="size-4" />
              时间轴
            </button>
            <button
              onClick={() => lifeStore.setViewMode('gallery')}
              className={cn(
                'inline-flex items-center whitespace-nowrap gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all duration-200',
                viewMode === 'gallery'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 font-medium shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              <Camera className="size-4" />
              照片墙
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="size-4 text-slate-400 dark:text-slate-500" />
            {allTags.slice(0, 8).map(tag => (
              <button
                key={tag}
                onClick={() => lifeStore.setSelectedTag(selectedTag === tag ? null : tag)}
                className={cn(
                  'px-2.5 py-1 rounded-full text-xs transition-all duration-200',
                  selectedTag === tag
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 font-medium'
                    : 'bg-white dark:bg-zinc-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-zinc-700 hover:border-indigo-200 dark:hover:border-indigo-700'
                )}
              >
                #{tag}
              </button>
            ))}
            {selectedTag && (
              <button
                onClick={() => lifeStore.clearFilters()}
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs',
                  'text-indigo-600 hover:text-indigo-800',
                  'dark:text-indigo-400 dark:hover:text-indigo-300',
                  'transition-colors duration-200'
                )}
              >
                <X className="size-3" />
                清除
              </button>
            )}
          </div>
        </div>

        {viewMode === 'timeline' ? (
          <div>
            {filteredMoments.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500">
                <Clock className="size-16 mb-4 opacity-50" />
                <p className="text-lg font-medium">暂无记录</p>
                <p className="text-sm mt-1">试试调整筛选条件</p>
              </div>
            ) : (
              <div>
                {filteredMoments.map((moment, idx) => (
                  <TimelineItem
                    key={moment.id}
                    moment={moment}
                    isLast={idx === filteredMoments.length - 1}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <PhotoGallery images={galleryImages} />
        )}
      </div>
    </div>
  )
})

export default Life
