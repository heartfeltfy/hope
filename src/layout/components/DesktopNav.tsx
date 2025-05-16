import { cn } from '@/utils/cn'
import GithubIcon from './GithubIcon'
import { Link } from 'react-router-dom'

interface NavItem {
  name: string
  path: string
}
type DesktopNavProps = {
  navList: NavItem[]
}

function DesktopNav({ navList }: DesktopNavProps) {
  return (
    <div className="hidden sm:flex items-center space-x-2">
      {navList.map(item => (
        <Link
          key={item.name}
          to={item.path}
          className={cn(
            'text-sm font-medium uppercase tracking-wide cursor-pointer px-3 py-2 rounded-md transition-colors duration-200',
            'text-slate-600 dark:text-slate-200',
            'hover:text-indigo-600 dark:hover:text-indigo-400',
            'hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60'
          )}
        >
          {item.name}
        </Link>
      ))}
      <div className="ml-2 pl-2 border-l border-slate-200 dark:border-zinc-700">
        <GithubIcon />
      </div>
    </div>
  )
}

export default DesktopNav
