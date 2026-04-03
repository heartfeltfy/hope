import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

import Layout from '@/layout'
import LazyLoad from '@/components/LazyLoad'

const Home = lazy(() => import('@/pages/Home'))
const Blog = lazy(() => import('@/pages/Blog'))
const Life = lazy(() => import('@/pages/Life'))
const AiChat = lazy(() => import('@/pages/AiChat'))
const NotFound = lazy(() => import('@/pages/NotFound'))

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
        path: 'blog',
        element: <LazyLoad element={<Blog />} />,
      },
      {
        path: 'life',
        element: <LazyLoad element={<Life />} />,
      },
      {
        path: 'ai',
        element: <LazyLoad element={<AiChat />} />,
      },
      { path: 'about', element: <Navigate to="/life" replace /> },
      { path: 'posts', element: <Navigate to="/blog" replace /> },
      {
        path: '*',
        element: <LazyLoad element={<NotFound />} />,
      },
    ],
  },
  { path: '/chat', element: <Navigate to="/ai" replace /> },
]

const router = createBrowserRouter(routes, {
  basename: process.env.NODE_ENV === 'production' ? '/hope' : '/',
})

export default router
