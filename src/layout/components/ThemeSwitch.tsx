import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Sun, Moon, Laptop } from 'lucide-react'
import { useStores } from '@/stores'
import type { Theme } from '@/stores/ThemeStore'
import { observer } from 'mobx-react-lite'

const ThemeSwitch = observer(() => {
  const { themeStore } = useStores()
  const options = [
    { value: 'light', label: '浅色', icon: <Sun className="w-4 h-4" /> },
    { value: 'dark', label: '深色', icon: <Moon className="w-4 h-4" /> },
    {
      value: 'system',
      label: `跟随系统（当前：${themeStore.systemTheme === 'dark' ? '深色' : '浅色'}）`,
      icon: <Laptop className="w-4 h-4" />,
    },
  ] as const

  const current = options.find(o => o.value === themeStore.theme)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md border bg-background hover:bg-accent transition"
          aria-label="切换主题"
        >
          {current?.icon}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={4} className="flex gap-2">
        {options.map(option => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => themeStore.setTheme(option.value as Theme)}
            className={
              themeStore.theme === option.value ? 'font-bold bg-accent text-accent-foreground' : ''
            }
          >
            {option.icon}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
export default ThemeSwitch
