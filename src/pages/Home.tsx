import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'

const inspirationalText = [
  '愿我在未来的日子里，',
  '心怀勇气，充满希望，',
  '遇见最好的自己。',
  '愿所有的美好如约而至，',
  '所有的付出都能开花结果。',
]

const Home = observer(() => {
  const [isVisible, setIsVisible] = useState(false)
  const { counterStore } = useStores()
  const { increment, count } = counterStore
  console.log(increment, count)

  useEffect(() => {
    // 页面加载后添加动画效果
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-100 text-slate-700 font-sans p-4">
      <div
        className={twMerge(
          'transform transition-all duration-1000 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <h1 className="text-4xl md:text-5xl mb-8 font-bold text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          愿我所有的努力都不被辜负
        </h1>

        <div className="text-lg md:text-xl leading-loose text-center max-w-2xl px-4 space-y-2">
          {inspirationalText.map((line, index) => (
            <p
              key={index}
              className={twMerge(
                'transform transition-all duration-700 ease-out',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                // 给每一行添加递增的延迟
                `delay-[${(index + 1) * 200}ms]`
              )}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Home
