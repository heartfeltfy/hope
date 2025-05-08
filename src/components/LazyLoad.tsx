import Loading from '@/components/Loading'
import { ReactNode, Suspense } from 'react'
// 通用的懒加载组件
const LazyLoad = (Component: ReactNode) => <Suspense fallback={<Loading />}>{Component}</Suspense>

export default LazyLoad
