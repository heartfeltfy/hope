import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import Layout from '@/layout'
import LazyLoad from '@/components/LazyLoad'

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Posts = lazy(() => import('@/pages/Posts'))
const Chat = lazy(() => import('@/pages/Chat'))

// 路由配置
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LazyLoad element={<Home />} />,
      },
      {
        path: 'about',
        element: <LazyLoad element={<About />} />,
      },
      {
        path: 'posts',
        element: <LazyLoad element={<Posts />} />,
      },
      {
        path: '*',
        element: <LazyLoad element={<NotFound />} />,
      },
    ],
  },
  {
    path: '/chat',
    element: <LazyLoad element={<Chat />} />,
  },
]

// 创建路由实例
const router = createBrowserRouter(routes, {
  basename: process.env.NODE_ENV === 'production' ? '/hope' : '/',
})

export default router
