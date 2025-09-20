import { CheckCircle, XCircle } from 'lucide-react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Success = () => (
  <div className='bg-white p-6'>
    {/* Success Animation */}
    <div className='text-center mb-8'>
      <div className='w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center'>
        <CheckCircle size={40} className='text-green-600' />
      </div>
      <h2 className='text-2xl font-bold text-gray-900 mb-2'>
        Liên kết thành công!
      </h2>
      <p className='text-gray-600'>
        Tài khoản Zalo đã được liên kết với tài khoản web của bạn
      </p>
    </div>

    {/* Account Info */}
    <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-6'>
      <h3 className='font-semibold text-green-800 mb-3'>Thông tin liên kết</h3>
      <div className='space-y-2 text-sm'>
        <div className='flex justify-between'>
          <span className='text-gray-700'>Email:</span>
          <span className='font-medium text-gray-900'>email@sdsds.con</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-700'>Thời gian:</span>
          <span className='font-medium text-gray-900'>
            {new Date().toLocaleString('vi-VN')}
          </span>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className='space-y-3'>
      <button
        // onClick={() => setCurrentState('initial')}
        className='w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700'
      >
        Tiếp tục
      </button>
      <button
        // onClick={() => setCurrentState('initial')}
        className='w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50'
      >
        Quay lại hồ sơ
      </button>
    </div>
  </div>
)

const Failed = () => (
  <div className=''>
    <div className='bg-white p-6'>
      {/* Error Header */}
      <div className='text-center mb-8'>
        <div className='w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center'>
          <XCircle size={40} className='text-red-600' />
        </div>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>
          Liên kết thất bại
        </h2>
        <p className='text-gray-600'>
          Không thể liên kết tài khoản. Vui lòng thử lại.
        </p>
      </div>

      {/* Error Message */}
      <div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-6'>
        <div className='flex items-start space-x-3'>
          <XCircle size={20} className='text-red-600 flex-shrink-0 mt-0.5' />
          <div>
            <h3 className='font-medium text-red-800'>Lỗi liên kết</h3>
            <p className='text-sm text-red-700 mt-1'>
              Thông tin đăng nhập không chính xác hoặc có lỗi kết nối. Vui lòng
              kiểm tra lại thông tin và thử lại.
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-3'>
        <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700'>
          Thử lại
        </button>
        <button className='w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50'>
          Bỏ qua
        </button>
      </div>
    </div>
  </div>
)

const ResultZmLinked = () => {
  const location = useLocation()

  console.log('location', location)

  const { state } = location

  return (
    <div className=''>
      {state.status === 'success' ? <Success /> : <Failed />}
    </div>
  )
}

export default ResultZmLinked
