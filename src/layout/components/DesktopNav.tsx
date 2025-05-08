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
            'text-sm font-medium uppercase tracking-wide',
            'cursor-pointer',
            'text-slate-600',
            'hover:text-indigo-600 transition-colors duration-200',
            'hover:bg-indigo-50/60',
            'px-3 py-2',
            'rounded-md'
          )}
        >
          {item.name}
        </Link>
      ))}
      <div className="ml-2 pl-2 border-l border-slate-200">
        <GithubIcon />
      </div>
    </div>
  )
}

export default DesktopNav
