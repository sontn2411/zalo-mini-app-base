import { getSystemInfo } from 'zmp-sdk'
import { AnimationRoutes, App, SnackbarProvider, ZMPRouter } from 'zmp-ui'
import { AppProps } from 'zmp-ui/app'

import HomePage from '@/pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
      <App theme={getSystemInfo().zaloTheme as AppProps['theme']}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>

        {/* <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />}></Route>
          </AnimationRoutes>
        </ZMPRouter> */}
        {/* </SnackbarProvider> */}
      </App>
    </BrowserRouter>
  )
}
export default Layout
