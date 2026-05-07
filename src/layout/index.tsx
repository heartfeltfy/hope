import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
