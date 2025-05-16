import { cn } from '@/utils/cn'
import { Link } from 'react-router-dom'

interface NavItem {
  name: string
  path: string
}
interface MobileNavProps {
  isOpen: boolean
  navList: NavItem[]
}

const MobileNav = ({ isOpen, navList }: MobileNavProps) => {
  return (
    <div
      className={cn(
        'sm:hidden',
        'absolute left-0 right-0',
        'w-full bg-gradient-to-b from-blue-50/95 to-white/95 backdrop-blur-sm',
        'dark:bg-gradient-to-b dark:from-zinc-900/95 dark:to-zinc-800/95 dark:backdrop-blur-sm',
        'border-t border-slate-200/70 dark:border-zinc-700/70',
        'shadow-lg',
        'transition-all duration-300 ease-in-out',
        'z-40',
        'top-full',
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
        !isOpen && 'invisible'
      )}
      style={{
        transformOrigin: 'top',
      }}
    >
      <ul
        className={cn(
          'flex flex-col',
          'divide-y divide-slate-100 dark:divide-zinc-700',
          'text-slate-600 dark:text-slate-200',
          'max-w-7xl mx-auto',
          'max-h-[calc(100vh-100%)]',
          'overflow-y-auto'
        )}
      >
        {navList.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                'py-4 px-8',
                'text-sm uppercase tracking-wide',
                'cursor-pointer',
                'hover:bg-indigo-50/50 hover:text-indigo-600',
                'dark:hover:bg-zinc-800/60 dark:hover:text-indigo-400',
                'transition-colors duration-300',
                'flex items-center justify-center',
                'font-medium',
                'w-full'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
