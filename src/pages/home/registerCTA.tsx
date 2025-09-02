import { ROUTES } from '@/constants/routes'
import { Building2, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RegisterCTA = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        <button
          onClick={() =>
            navigate(ROUTES.REGISTER_PERSON, { viewTransition: true })
          }
          className='bg-[#033d78] hover:bg-[#022b56] text-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all'
        >
          <User className='w-8 h-8 mx-auto mb-2' />
          <p className='text-sm font-medium'>Đăng ký tìm việc</p>
          <p className='text-xs  mt-1'>Cho người lao động</p>
        </button>

        <button
          onClick={() =>
            navigate(ROUTES.REGISTER_BUSINESS, { viewTransition: true })
          }
          className='bg-[#fd9221] hover:bg-[#e67e00] text-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all'
        >
          <Building2 className='w-8 h-8 mx-auto mb-2' />
          <p className='text-sm font-medium'>Đăng ký tuyển dụng</p>
          <p className='text-xs  mt-1'>Cho doanh nghiệp</p>
        </button>
      </div>
    </div>
  )
}

export default RegisterCTA
