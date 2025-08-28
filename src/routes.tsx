import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/layout/layout'
import HomePage from './pages/home'
import NewspaperPage from './pages/newspaper'
import PostPage from './pages/post'
import ProfilePage from './pages/profile'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/news',
          element: <NewspaperPage />,
        },
        {
          path: '/post',
          element: <PostPage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
  ],
  { basename: getBasePath() }
)

export function getBasePath() {
  const urlParams = new URLSearchParams(window.location.search)
  const appEnv = urlParams.get('env')

  if (
    import.meta.env.PROD ||
    appEnv === 'TESTING_LOCAL' ||
    appEnv === 'TESTING' ||
    appEnv === 'DEVELOPMENT'
  ) {
    return `/zapps/${window.APP_ID}`
  }

  return window.BASE_PATH || ''
}

export default router
