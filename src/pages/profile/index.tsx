import { Building2, User } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import ProfilePerson from './profilePerson'

const data = {
  avatar: 'https://h5.zdn.vn/static/images/avatar.png',
  id: '3368637342326461234',
  name: 'User Name',
}

const ProfilePage = () => {
  const navigate = useNavigate()
  // const { userInfo } = useUserInfo()

  // console.log('=====', userInfo)

  return (
    <>
      {/* <div className=' pb-4 bg-white'>
        <div className='flex items-center gap-3 px-4 '>
          <img
            src={data.avatar}
            alt={data.name}
            className='w-16 h-16 rounded-full object-cover '
          />
          <span className='text-base font-semibold '>{data.name}</span>
        </div>
      </div> */}

      <ProfilePerson />

      <div className='mt-4 pb-6 px-4'>
        <div className='mt-4 flex flex-col gap-4'>
          <button
            onClick={() =>
              navigate(ROUTES.REGISTER_PERSON, { viewTransition: true })
            }
            className='flex items-center gap-3 p-4 rounded-xl bg-[#033d78] hover:bg-[#022b56] text-white shadow-md transition-all'
          >
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white/20'>
              <User className='w-5 h-5' />
            </div>
            <div className='text-left'>
              <p className='text-sm font-semibold'>Đăng ký tìm việc</p>
              <p className='text-xs text-white/80'>Cho người lao động</p>
            </div>
          </button>

          <button
            onClick={() =>
              navigate(ROUTES.REGISTER_BUSINESS, { viewTransition: true })
            }
            className='flex items-center gap-3 p-4 rounded-xl bg-[#fd9221] hover:bg-[#e67e00] text-white shadow-md transition-all'
          >
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white/20'>
              <Building2 className='w-5 h-5' />
            </div>
            <div className='text-left'>
              <p className='text-sm font-semibold'>Đăng ký tuyển dụng</p>
              <p className='text-xs text-white/80'>Cho doanh nghiệp</p>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
