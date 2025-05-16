import { useState, useEffect, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { observer } from 'mobx-react-lite'

const inspirationalText = [
  '愿我在未来的日子里，',
  '心怀勇气，充满希望，',
  '遇见最好的自己。',
  '愿所有的美好如约而至，',
  '所有的付出都能开花结果。',
]

// 提取动画逻辑为一个工具函数
const getAnimationClass = (isVisible: boolean, delay: number) =>
  twMerge(
    'transform transition-all duration-700 ease-out',
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
    `delay-[${delay}ms]`
  )

const Home = observer(() => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 页面加载后添加动画效果
    setIsVisible(true)
  }, [])

  // 缓存渲染的文本内容
  const renderedText = useMemo(
    () =>
      inspirationalText.map((line, index) => (
        <p
          key={index}
          className={twMerge(
            getAnimationClass(isVisible, (index + 1) * 200),
            'text-slate-700 dark:text-slate-200'
          )}
        >
          {line}
        </p>
      )),
    [isVisible]
  )

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 text-slate-700 dark:text-slate-200 font-sans p-4 transition-colors duration-300">
      <div
        className={twMerge(
          'transform transition-all duration-1000 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <h1 className="text-4xl md:text-5xl mb-8 font-bold text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-zinc-200 dark:to-zinc-400">
          愿我所有的努力都不被辜负
        </h1>

        <div className="text-lg md:text-xl leading-loose text-center max-w-2xl px-4 space-y-2">
          {renderedText}
        </div>
      </div>
    </div>
  )
})

export default Home
