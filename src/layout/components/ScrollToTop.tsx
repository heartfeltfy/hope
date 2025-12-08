import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 每次路由变化时滚动到顶部（默认立即）
 * 如果你想平滑滚动，把 behavior: 'smooth'
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    // 如果页面有固定 header 并且使用 body 以外的滚动容器，
    // 需把 document.documentElement / document.body 换成那个容器并调用 container.scrollTo(0,0)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    // 可选：如果有 hash，跳到目标锚点
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, search, hash])

  return null
}
