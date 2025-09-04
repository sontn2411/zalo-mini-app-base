import { Building2, User } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-4 pb-6 px-4'>
      {/* <div className='bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white border-opacity-50'>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <div className='w-16 h-16 bg-gradient-to-br bg-color-1 rounded-2xl flex items-center justify-center shadow-lg'>
              <User className='w-8 h-8 text-white' />
            </div>
          </div>
          <div className='flex-1'>
            <h2 className='text-lg font-bold text-gray-900'>Guest</h2>
            <p className='text-gray-600 text-sm mb-2'></p>
          </div>
        </div>
      </div> */}

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
  )
}

export default ProfilePage
