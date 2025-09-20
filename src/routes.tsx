import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/layout/layout'
import HomePage from './pages/home'
import NewspaperPage from './pages/newspaper'
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
import DetailCandidate from './pages/Candidate/detailCandidate'
import NewsDetailPage from './pages/newspaper/newsDetail'
import EditPerson from './pages/profile/edit/editPerson'
import EditEnterprise from './pages/profile/edit/editEnterprise'
import DetailDecree from './pages/decree/detailDecree'
import Information from './pages/profile/labore/information'
import Education from './pages/profile/labore/education'
import Experience from './pages/profile/labore/experience'
import LanguageIt from './pages/profile/labore/languageIt'
import Benefits from './pages/profile/labore/benefits'
import ProfileEnterprise from './pages/profile/profileEnterprise'
import Recruitments from './pages/profile/enterprise/recruitments'
import EditJobDetail from './pages/profile/edit/editJobDetail'
import JobDetailPreview from './pages/jobs/detail/jobDetailPreview'
import ResultZmLinked from './pages/profile/zmLinked/resultZmLinked'

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
          path: ROUTES.NEWSITEM,
          element: <NewsDetailPage />,
          handle: { title: 'Chi tiết tin tức' },
        },
        {
          path: ROUTES.INSURANCE,
          element: <InsurancePage />,
          handle: { title: 'Bảo hiểm thất nghiệp' },
        },
        {
          path: ROUTES.ND70,
          element: <Decree70Page />,
          handle: { title: 'Nghị định 219/2025/NĐ-CP' },
        },
        {
          path: ROUTES.DETAILDND70,
          element: <DetailDecree />,
          handle: { title: 'Thông tin chi tiết' },
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
          path: ROUTES.JOB_PREVIEW_DETAIL,
          element: <JobDetailPreview />,
          handle: { title: 'Xem trước tin tuyển dụng' },
        },
        {
          path: ROUTES.CANDIDATE,
          element: <CandidatePage />,
          handle: { title: 'Danh sách ứng viên' },
        },
        {
          path: ROUTES.DETAIL_CANDIDATE,
          element: <DetailCandidate />,
          handle: { title: 'Chi tiết ứng viên' },
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
          path: ROUTES.RESULTSZMLINK,
          element: <ResultZmLinked />,
          handle: { title: 'Kết quả liên kết Zalo ' },
        },
        {
          path: ROUTES.ENTERPRISEINFO,
          element: <ProfileEnterprise />,
          handle: { title: 'Thông tin doanh nghiệp', edit: true },
        },
        {
          path: ROUTES.ENTERPRISERECRUITMENTS,
          element: <Recruitments />,
          handle: { title: 'Danh sách tuyển dụng' },
        },
        {
          path: ROUTES.ENTERPRISEEDITJOB,
          element: <EditJobDetail />,
          handle: { title: 'Chỉnh sửa tin tuyển dụng' },
        },
        {
          path: ROUTES.EDITINFOMATION,
          element: <Information />,

          handle: { title: 'Thông tin chung', edit: true },
        },
        {
          path: ROUTES.EDITIEDUCATION,
          element: <Education />,
          handle: { title: 'Học vấn' },
        },
        {
          path: ROUTES.EDITPERSON,
          element: <EditPerson />,
          handle: { title: 'Chỉnh sửa hồ sơ' },
        },
        {
          path: ROUTES.EDITIEXPERIENCE,
          element: <Experience />,
          handle: { title: 'Kinh nghiệm & Kỹ năng' },
        },
        {
          path: ROUTES.EDITILANGUAGEIT,
          element: <LanguageIt />,
          handle: { title: 'Ngoại ngữ & tin học' },
        },
        {
          path: ROUTES.EDITIBENFITS,
          element: <Benefits />,
          handle: { title: 'Phúc lợi & Mong muốn' },
        },
        {
          path: ROUTES.EDITBUSINESS,
          element: <EditEnterprise />,
          handle: { title: 'Chỉnh sửa hồ sơ' },
        },
        {
          path: ROUTES.REGISTER_PERSON,
          element: <RegisterPerson />,
          handle: { title: 'Đăng ký', desc: 'Hồ sơ người lao động' },
        },
        {
          path: ROUTES.REGISTER_BUSINESS,
          element: <RegisterBusiness />,
          handle: {
            title: 'Đăng ký',
            desc: 'Hãy đồng hành cùng các doanh nghiệp tại việc làm Khánh Hòa',
          },
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
