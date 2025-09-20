import { matchPath, NavLink, useLocation, useNavigate } from 'react-router-dom'
import IconUI from '../ui/iconUi'
import { ROUTES } from '@/constants/routes'
import { authorize } from 'zmp-sdk/apis'
import useSettingUser from '@/hooks/useSettingUser'
import { accessTokenStorage } from '@/utils/localStorage'
import { useUserStore } from '@/store/useUserStore'

const NAV_ITEMS = [
  {
    id: 1,
    name: 'Trang chủ',
    icon: 'home',
    iconActive: 'homeActive',
    path: '/',
    activePaths: [
      '/',
      ROUTES.ABOUT,
      ROUTES.NEWS,
      ROUTES.INSURANCE,
      ROUTES.LABOREXPORT,
      ROUTES.ND70,
      ROUTES.DETAILDND70,
      ROUTES.NEWSITEM,
    ],
  },
  {
    id: 5,
    name: 'Tuyển dụng',
    icon: 'dashboard',
    iconActive: 'activeDashboard',
    path: ROUTES.JOB_LIST,
    activePaths: [ROUTES.JOB_DETAIL, ROUTES.JOB_LIST],
  },
  {
    id: 6,
    name: 'Ứng viên',
    icon: 'users',
    iconActive: 'activeUsers',
    path: ROUTES.CANDIDATE,
    activePaths: [ROUTES.CANDIDATE, ROUTES.DETAIL_CANDIDATE],
  },
  {
    id: 3,
    name: 'Đăng tin',
    icon: 'briefcase',
    iconActive: 'briefcaseActive',
    path: ROUTES.JOB_POSTING,
  },
  {
    id: 4,
    name: 'Cá nhân',
    icon: 'profile',
    iconActive: 'profileActive',
    path: ROUTES.PROFILE,
    activePaths: [
      ROUTES.PROFILE,
      ROUTES.EDITINFOMATION,
      ROUTES.EDITIEDUCATION,
      ROUTES.EDITIEXPERIENCE,
      ROUTES.EDITILANGUAGEIT,
      ROUTES.EDITIBENFITS,
      ROUTES.EDITPERSON,
    ],
  },
]

const Footer = () => {
  const navigate = useNavigate()
  const scope = useSettingUser()
  const location = useLocation()
  const { laboreProfile, enterpriseProfile } = useUserStore()

  const handleBeforeProfileNavigate = async (
    e: React.MouseEvent,
    path: string
  ) => {
    e.preventDefault()
    if (accessTokenStorage) {
      navigate(path)
    } else {
      const data = await authorize({
        scopes: ['scope.userInfo', 'scope.userPhonenumber'],
      })
      navigate(path)
    }
    // if (!scope.phoneNumber) {
    // const data = await authorize({
    //   scopes: ['scope.userInfo', 'scope.userPhonenumber'],
    // })
    // }
  }

  const isActive = (item: any) => {
    if (item.activePaths) {
      return item.activePaths.some((p: string) => {
        if (p === '/') {
          return matchPath({ path: p, end: true }, location.pathname)
        }

        return matchPath({ path: p, end: false }, location.pathname)
      })
    }
    return location.pathname === item.path
  }

  const dataNav = NAV_ITEMS.filter((item) => {
    if (item.id === 3 && !enterpriseProfile) {
      return false
    }
    return true
  })

  return (
    <div className='w-full relative z-[1]'>
      <div
        className='w-full px-2 pt-2 grid text-3xs relative z-20 justify-center pb-sb bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.08)]'
        style={{
          gridTemplateColumns: `repeat(${dataNav.length}, 1fr)`,
        }}
      >
        {dataNav.map((item) => {
          const active = isActive(item)

          return (
            <NavLink
              to={item.path}
              key={item.path}
              className='flex flex-col items-center space-y-0.5 p-1 active:scale-105 relative'
            >
              <>
                <div
                  className={`absolute -top-2 w-[80%] h-0.5 rounded-full ${
                    active ? 'bg-color-1' : ''
                  } `}
                />
                <div className='w-6 h-6 flex justify-center items-center'>
                  <IconUI
                    icon={active ? item.iconActive : item.icon}
                    className={`w-6 h-6 ${
                      active ? 'text-color-1' : 'text-color-2'
                    }`}
                  />
                </div>
                <div
                  className={`text-xs truncate ${
                    active
                      ? 'text-color-1 font-bold'
                      : 'text-color-2 font-medium'
                  }`}
                >
                  {item.name}
                </div>
              </>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
