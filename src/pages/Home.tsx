import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { cn } from '@/utils/cn'
import { BookOpen, Camera, Bot, ArrowRight, Sparkles, Heart, Code, Coffee } from 'lucide-react'

const FEATURES = [
  {
    icon: BookOpen,
    title: '技术博客',
    desc: '前端、后端、DevOps 技术分享与深度解析',
    path: '/blog',
    color: 'from-blue-500 to-indigo-500',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-900/20',
    textLight: 'text-blue-600',
    textDark: 'dark:text-blue-400',
  },
  {
    icon: Camera,
    title: '生活记录',
    desc: '日常随笔、照片墙与时间轴',
    path: '/life',
    color: 'from-rose-500 to-pink-500',
    bgLight: 'bg-rose-50',
    bgDark: 'dark:bg-rose-900/20',
    textLight: 'text-rose-600',
    textDark: 'dark:text-rose-400',
  },
  {
    icon: Bot,
    title: 'AI 问答',
    desc: '智能对话，探索 AI 的无限可能',
    path: '/ai',
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-900/20',
    textLight: 'text-emerald-600',
    textDark: 'dark:text-emerald-400',
  },
]

const GREETING_WORDS = ['探索', '创造', '成长', '分享']

const Home = observer(() => {
  const [isVisible, setIsVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % GREETING_WORDS.length)
        setFade(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-gradient-to-br from-slate-50 via-white to-blue-50/50',
        'dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800',
        'transition-colors duration-300'
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <section
          className={cn(
            'pt-20 sm:pt-28 pb-16 sm:pb-20 text-center',
            'transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 mb-6">
            <Sparkles className="size-4 text-indigo-500 dark:text-indigo-400" />
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-300">
              欢迎来到 Hope 的个人空间
            </span>
          </div>

          <h1 className={cn('text-4xl sm:text-5xl lg:text-6xl font-bold mb-6', 'leading-tight')}>
            <span className="text-slate-800 dark:text-slate-100">用代码</span>
            <span
              className={cn(
                'inline-block mx-2 transition-all duration-400',
                'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
                'dark:from-indigo-400 dark:to-purple-400',
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              )}
            >
              {GREETING_WORDS[wordIndex]}
            </span>
            <br className="hidden sm:block" />
            <span className="text-slate-800 dark:text-slate-100">属于自己的世界</span>
          </h1>

          <p
            className={cn(
              'text-base sm:text-lg max-w-xl mx-auto mb-10',
              'text-slate-500 dark:text-slate-400',
              'leading-relaxed tracking-wide'
            )}
          >
            在这里记录技术成长、分享生活点滴、探索 AI 可能。
            <br />
            愿每一份努力都不被辜负。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/blog"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
                'bg-indigo-600 text-white hover:bg-indigo-700',
                'shadow-md shadow-indigo-200 dark:shadow-none',
                'transition-all duration-200 hover:shadow-lg',
                'font-medium text-sm'
              )}
            >
              开始阅读
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/life"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
                'bg-white dark:bg-zinc-800 text-slate-700 dark:text-slate-200',
                'border border-slate-200 dark:border-zinc-700',
                'hover:border-indigo-200 dark:hover:border-indigo-700',
                'hover:shadow-md',
                'transition-all duration-200',
                'font-medium text-sm'
              )}
            >
              <Camera className="size-4" />
              生活记录
            </Link>
          </div>
        </section>

        <section
          className={cn(
            'pb-16 sm:pb-20',
            'transition-all duration-1000 delay-300 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.path}
                  to={feature.path}
                  className={cn(
                    'group relative p-6 rounded-xl',
                    'bg-white dark:bg-zinc-800/80',
                    'border border-slate-200 dark:border-zinc-700',
                    'shadow-sm hover:shadow-lg',
                    'hover:-translate-y-1',
                    'transition-all duration-300',
                    'overflow-hidden'
                  )}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-100',
                      'transition-opacity duration-300',
                      'bg-gradient-to-br',
                      feature.color,
                      '[mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]',
                      'opacity-5 group-hover:opacity-[0.07]'
                    )}
                  />

                  <div
                    className={cn(
                      'inline-flex items-center justify-center size-10 rounded-lg mb-4',
                      feature.bgLight,
                      feature.bgDark
                    )}
                  >
                    <Icon className={cn('size-5', feature.textLight, feature.textDark)} />
                  </div>

                  <h3
                    className={cn(
                      'text-base font-bold mb-2',
                      'text-slate-800 dark:text-slate-100',
                      'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
                      'transition-colors duration-200'
                    )}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={cn(
                      'text-sm leading-relaxed mb-4',
                      'text-slate-500 dark:text-slate-400'
                    )}
                  >
                    {feature.desc}
                  </p>

                  <span
                    className={cn(
                      'inline-flex items-center gap-1 text-xs font-medium',
                      feature.textLight,
                      feature.textDark,
                      'opacity-0 group-hover:opacity-100',
                      'translate-x-0 group-hover:translate-x-1',
                      'transition-all duration-200'
                    )}
                  >
                    了解更多
                    <ArrowRight className="size-3" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section
          className={cn(
            'pb-16 sm:pb-20',
            'transition-all duration-1000 delay-500 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div
            className={cn(
              'p-8 sm:p-10 rounded-xl',
              'bg-gradient-to-br from-indigo-50 to-purple-50/50',
              'dark:from-indigo-900/20 dark:to-purple-900/10',
              'border border-indigo-100/50 dark:border-indigo-800/20'
            )}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3
                  className={cn(
                    'text-xl sm:text-2xl font-bold mb-3',
                    'text-slate-800 dark:text-slate-100'
                  )}
                >
                  关于我
                </h3>
                <p
                  className={cn(
                    'text-sm sm:text-base leading-relaxed',
                    'text-slate-600 dark:text-slate-300',
                    'tracking-wide'
                  )}
                >
                  一个热爱技术的开发者，相信代码可以改变世界。在前端、后端和 AI 领域持续探索，
                  用文字记录成长，用镜头捕捉生活，用代码构建未来。
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <Code className="size-4 text-indigo-500" />
                    代码为伴
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <Coffee className="size-4 text-amber-500" />
                    咖啡续命
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <Heart className="size-4 text-rose-500" />
                    热爱生活
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  'shrink-0 size-20 sm:size-24 rounded-2xl flex items-center justify-center',
                  'bg-gradient-to-br from-indigo-500 to-purple-600',
                  'shadow-lg shadow-indigo-200/50 dark:shadow-none'
                )}
              >
                <span className="text-3xl sm:text-4xl font-bold text-white font-['Montserrat',sans-serif]">
                  H
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer
          className={cn('pb-8 pt-4 text-center', 'border-t border-slate-100 dark:border-zinc-800')}
        >
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Hope · 愿每一份努力都不被辜负
          </p>
        </footer>
      </div>
    </div>
  )
})

export default Home
