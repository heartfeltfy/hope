import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 p-4 transition-colors duration-300">
      <div
        className={twMerge(
          'p-8 max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg transform transition-all duration-700 ease-in-out',
          'border border-indigo-100 dark:border-zinc-700 hover:shadow-xl hover:border-indigo-200 dark:hover:border-zinc-500',
          'hover:scale-[1.01] hover:-translate-y-1',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <h1
          className={twMerge(
            'text-3xl font-bold text-indigo-700 dark:text-zinc-100 mb-6 text-center transition-all duration-500',
            'relative',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className="relative inline-block">
            关于我们
            <span
              className={twMerge(
                'absolute -bottom-2 left-0 w-full h-1 bg-indigo-400 dark:bg-zinc-600 rounded transform transition-all duration-700 delay-500',
                isVisible ? 'scale-x-100' : 'scale-x-0'
              )}
            ></span>
          </span>
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed">
          <p
            className={twMerge(
              'text-xl mb-4 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            亲爱的朋友，
          </p>

          <p
            className={twMerge(
              'text-gray-600 dark:text-gray-400 mb-6 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            我知道此刻的你可能感到疲惫和孤独，但请相信，外面的世界依然美好。
            哪怕只是打开窗户感受一下阳光，或是在楼下散步片刻， 这些小小的行动都是勇敢的开始。
            生活中的每一个微小改变，都是通向希望的重要一步。
          </p>

          <p
            className={twMerge(
              'font-medium text-gray-800 dark:text-gray-100 text-center text-lg transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            你并不孤单，我们与你同在。
          </p>

          <div
            className={twMerge(
              'mt-8 pt-6 border-t border-indigo-100 dark:border-zinc-700 text-center transition-all duration-700 delay-500',
              isVisible ? 'opacity-100' : 'opacity-0'
            )}
          >
            <button className="px-6 py-3 bg-blue-100 dark:bg-zinc-800 text-blue-900 dark:text-zinc-100 font-bold rounded-md transition-all duration-300 shadow-md text-lg tracking-wide border-2 border-blue-300 dark:border-zinc-600 hover:bg-blue-200 dark:hover:bg-zinc-700 hover:scale-105 hover:shadow-lg active:scale-95">
              联系我们
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
