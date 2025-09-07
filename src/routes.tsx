import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/layout/layout'
import HomePage from './pages/home'
import NewspaperPage from './pages/newspaper'
import PostPage from './pages/post'

import RegisterPerson from './pages/auth/registerPerson'
import JobPostingPage from './pages/jobs/job-posting'
import RegisterBusiness from './pages/auth/registerBusiness'
import Decree70Page from './pages/decree'
import { ROUTES } from './constants/routes'
import JobListPage from './pages/jobs'
import CandidatePage from './pages/Candidate'
import JobDetail from './pages/jobs/detail/JobDetail'
import ProfilePage from './pages/profile'
import AboutPage from './pages/about'
import InsurancePage from './pages/insurance'
import LaborExportPage from './pages/laborExport'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />,
          handle: { title: 'Trang chủ' },
        },
        {
          path: ROUTES.ABOUT,
          element: <AboutPage />,
          handle: { title: 'Giới thiệu' },
        },
        {
          path: ROUTES.NEWS,
          element: <NewspaperPage />,
          handle: { title: 'Tin tức' },
        },
        {
          path: ROUTES.INSURANCE,
          element: <InsurancePage />,
          handle: { title: 'Bảo hiểm thấp nghiệp' },
        },
        {
          path: ROUTES.ND70,
          element: <Decree70Page />,
          handle: { title: 'Nghị định 70' },
        },
        {
          path: ROUTES.LABOREXPORT,
          element: <LaborExportPage />,
          handle: { title: 'Xuất khẩu lao động' },
        },
        {
          path: ROUTES.JOB_LIST,
          element: <JobListPage />,
          handle: { title: 'Danh sách việc làm' },
        },
        {
          path: ROUTES.JOB_DETAIL,
          element: <JobDetail />,
          handle: { title: 'Chi tiết việc làm' },
        },
        {
          path: ROUTES.CANDIDATE,
          element: <CandidatePage />,
          handle: { title: 'Danh sách ứng viên' },
        },
        {
          path: '/post',
          element: <PostPage />,
          handle: { title: 'Đăng bài' },
        },
        {
          path: ROUTES.JOB_POSTING,
          element: <JobPostingPage />,
          handle: { title: 'Đăng tin tuyển dụng' },
        },
        {
          path: ROUTES.PROFILE,
          element: <ProfilePage />,
          handle: { title: 'Hồ sơ cá nhân', desc: 'Quản lý thông tin của bạn' },
        },
        {
          path: ROUTES.REGISTER_PERSON,
          element: <RegisterPerson />,
          handle: { title: 'Đăng ký', desc: 'Hồ sơ người lao động' },
        },
        {
          path: ROUTES.REGISTER_BUSINESS,
          element: <RegisterBusiness />,
          handle: { title: 'Đăng ký', desc: 'Hồ sơ doanh nghiệp' },
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
