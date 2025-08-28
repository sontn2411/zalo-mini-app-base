import { Outlet } from 'react-router-dom'

import Footer from './footer'
import Header from './header'

const Layout = () => {
  return (
    <div className='w-screen h-screen flex flex-col bg-background text-foreground overflow-hidden'>
      <Header />
      <div className='px-2 flex-1 flex flex-col z-10'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
