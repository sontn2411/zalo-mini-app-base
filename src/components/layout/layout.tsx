import { Outlet, useLocation } from 'react-router-dom'

import Footer from './footer'
import Header from './header'
import { ROUTES } from '@/constants/routes'

const Layout = () => {
  const paths = [ROUTES.REGISTER_PERSON]

  const location = useLocation()

  const isShowFooter = paths.includes(location.pathname)

  return (
    <div className='w-screen h-screen flex flex-col bg-gray-50 text-foreground overflow-hidden'>
      <Header />
      <div className=' flex-1 flex flex-col z-10 overflow-y-scroll'>
        <Outlet />
      </div>

      {!isShowFooter && <Footer />}
    </div>
  )
}

export default Layout
