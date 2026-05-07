import GithubIcon from './GithubIcon'
import { cn } from '@/utils/cn'
import { useState, useEffect, useCallback } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import MenuButton from './MenuButton'
import Logo from './Logo'
import ThemeSwitch from '@/layout/components/ThemeSwitch.tsx'

const NAV_LINKS = [
  { name: '首页', path: '/' },
  { name: '博客', path: '/blog' },
  { name: '生活记录', path: '/life' },
  { name: 'AI 智能问答', path: '/ai' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-md backdrop-blur-sm dark:bg-linear-to-r dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 dark:shadow-lg border-b border-slate-200/80 dark:border-zinc-700/80'
          : 'bg-linear-to-r from-white via-slate-50 to-white dark:bg-linear-to-r dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-b border-slate-200/80 dark:border-zinc-700/80'
      )}
    >
      <nav
        className={cn(
          'flex justify-between items-center',
          'h-16 px-4 md:px-6 py-4',
          'max-w-6xl mx-auto',
          'transition-all duration-300'
        )}
        aria-label="Main navigation"
      >
        <Logo />
        <div className={'flex'}>
          <DesktopNav navList={NAV_LINKS} />
          <ThemeSwitch />
          <div className="flex sm:hidden items-center space-x-1">
            <GithubIcon />
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>
      <MobileNav isOpen={isMenuOpen} navList={NAV_LINKS} onNavClick={closeMenu} />
    </header>
  )
}
export default Header
