import Loading from '@/components/Loading'
import { ReactElement, Suspense } from 'react'

interface LazyLoadProps {
  element: ReactElement
  fallback?: ReactElement
}

const LazyLoad = ({ element, fallback }: LazyLoadProps) => (
  <Suspense fallback={fallback || <Loading />}>{element}</Suspense>
)

export default LazyLoad
