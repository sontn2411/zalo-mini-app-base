import { NavLink } from 'react-router-dom'
import IconUI from '../ui/iconUi'

const NAV_ITEMS = [
  {
    id: 1,
    name: 'Trang chủ',
    icon: 'home',
    iconActive: 'homeActive',
    path: '/',
  },
  {
    id: 2,
    name: 'Tin tức',
    icon: 'newspaper',
    iconActive: 'newspaperActive',
    path: '/news',
  },
  {
    id: 3,
    name: 'Đăng tin',
    icon: 'briefcase',
    iconActive: 'briefcaseActive',
    path: '/post',
  },
  {
    id: 4,
    name: 'Cá nhân',
    icon: 'profile',
    iconActive: 'profileActive',
    path: '/profile',
  },
]

const Footer = () => {
  return (
    <div className='w-full relative'>
      <div
        className='w-full px-4 pt-2 grid text-3xs relative z-20 justify-center pb-sb bg-white'
        style={{
          gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        }}
      >
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.path}
              className='flex flex-col items-center space-y-0.5 p-1 active:scale-105'
              viewTransition
            >
              {({ isActive }) =>
                item.name ? (
                  <>
                    <div className='w-6 h-6 flex justify-center items-center'>
                      <IconUI
                        icon={isActive ? item.iconActive : item.icon}
                        className={`w-6 h-6 ${
                          isActive ? 'text-color-1' : 'text-color-2'
                        }`}
                      />
                    </div>
                    <div
                      className={`text-xs  truncate ${
                        isActive ? 'text-color-1' : ' text-color-2'
                      }`}
                    >
                      {item.name}
                    </div>
                  </>
                ) : (
                  <IconUI icon={isActive ? item.iconActive : item.icon} />
                )
              }
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
