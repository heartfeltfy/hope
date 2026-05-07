import { cn } from '@/utils/cn'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer
      className={cn(
        'py-2 text-center',
        'bg-white dark:bg-zinc-900',
        'border-t border-slate-100 dark:border-zinc-800',
        'transition-colors duration-300'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-slate-400 dark:text-slate-500 inline-flex items-center gap-1">
          © {new Date().getFullYear()} Hope · 愿每一份努力都不被辜负
          <Heart className="size-3 text-rose-400" />
        </p>
      </div>
    </footer>
  )
}

export default Footer
