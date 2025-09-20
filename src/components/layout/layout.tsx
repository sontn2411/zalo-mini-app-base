import { matchPath, Outlet, useLocation } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import { ROUTES } from '@/constants/routes'
import HeaderProfile from './headerProfile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Settings from './settings'
import ScrollToTop from '../shared/scrollToTop'
import { useRef } from 'react'
import HeaderDetail from './headerDetail'
import LayoutAuth from './layoutAuth'
import { SnackbarProvider } from 'zmp-ui'
import GlobalLoading from '../shared/globalLoading'
import { nativeStorage } from 'zmp-sdk/apis'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

const Layout = () => {
  return (
    <SnackbarProvider>
      <GlobalLoading />
      <QueryClientProvider client={queryClient}>
        <Settings>
          <LayoutAuth>
            <ContentLayout />
          </LayoutAuth>
        </Settings>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar
          closeOnClick={false}
          pauseOnHover={false}
          draggable={false}
          newestOnTop
          className='custom-toast-container'
        />
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

const ContentLayout = () => {
  const paths = [
    ROUTES.REGISTER_PERSON,
    ROUTES.REGISTER_BUSINESS,
    // ROUTES.NEWS,
    // ROUTES.INSURANCE,
    // ROUTES.LABOREXPORT,
    // ROUTES.ND70,
    // ROUTES.ABOUT,
    ROUTES.EDITPERSON,
    ROUTES.EDITBUSINESS,
    // ROUTES.DETAILDND70,
    // ROUTES.NEWSITEM,
  ]
  const pathProfile = [ROUTES.PROFILE]
  const pathDetail = []
  const pathNoHeader = [ROUTES.REGISTER_PERSON, ROUTES.REGISTER_BUSINESS]

  const scrollRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const isShowFooter = paths.some((pattern) =>
    matchPath({ path: pattern, end: true }, location.pathname)
  )
  const isHeaderProfile = pathProfile.includes(location.pathname)
  const isHeaderDetail = pathDetail.some((pattern) =>
    matchPath(pattern, location.pathname)
  )
  const isNoHeader = pathNoHeader.includes(location.pathname)

  // nativeStorage.clear()

  return (
    <div className='w-screen h-screen flex flex-col bg-gray-50 text-foreground overflow-hidden'>
      {!isNoHeader &&
        (isHeaderProfile ? (
          // <HeaderProfile />
          <></>
        ) : isHeaderDetail ? (
          <HeaderDetail />
        ) : (
          <Header />
        ))}

      <div
        ref={scrollRef}
        className=' flex-1 flex flex-col z-10 overflow-y-scroll'
      >
        <ScrollToTop scrollRef={scrollRef} />
        <Outlet />
      </div>

      {!isShowFooter && !isHeaderDetail && <Footer />}
    </div>
  )
}
export default Layout
