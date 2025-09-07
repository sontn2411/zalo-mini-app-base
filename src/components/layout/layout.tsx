import { Outlet, useLocation } from 'react-router-dom'

import Footer from './footer'
import Header from './header'
import { ROUTES } from '@/constants/routes'
import HeaderProfile from './headerProfile'

const Layout = () => {
  const paths = [ROUTES.REGISTER_PERSON, ROUTES.REGISTER_BUSINESS]
  const pathProfile = [ROUTES.PROFILE]

  const location = useLocation()

  const isShowFooter = paths.includes(location.pathname)
  const isHeaderProfile = pathProfile.includes(location.pathname)

  return (
    <div className='w-screen h-screen flex flex-col bg-gray-50 text-foreground overflow-hidden'>
      {isHeaderProfile ? <HeaderProfile /> : <Header />}

      <div className=' flex-1 flex flex-col z-10 overflow-y-scroll'>
        <Outlet />
      </div>

      {!isShowFooter && <Footer />}
    </div>
  )
}

export default Layout
