import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  User,
  Eye,
  EyeOff,
} from 'lucide-react'
import { useState } from 'react'

interface AccountInfoProps {
  handleNextStep: () => void
  handlePrevStep: () => void
}

const AccountInfo = ({ handleNextStep, handlePrevStep }: AccountInfoProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='space-y-6 animate-fadeIn'>
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <User className='w-4 h-4 inline mr-2' />
          Tên đăng nhập
        </label>
        <input
          type='text'
          placeholder='Nhập tên đăng nhập'
          className='w-full px-4 py-3 border rounded-xl transition-all focus:outline-color-1 focus:outline focus:outline-2'
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          Mật khẩu
        </label>
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Nhập mật khẩu'
            className='w-full px-4 py-3 border rounded-xl transition-all focus:outline-color-1 focus:outline focus:outline-2'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
          >
            {showPassword ? (
              <EyeOff className='w-5 h-5' />
            ) : (
              <Eye className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          Xác nhận mật khẩu
        </label>
        <div className='relative'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Nhập lại mật khẩu'
            className='w-full px-4 py-3 border rounded-xl transition-all focus:outline-color-1 focus:outline focus:outline-2'
          />
          <button
            type='button'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
          >
            {showConfirmPassword ? (
              <EyeOff className='w-5 h-5' />
            ) : (
              <Eye className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex gap-2 pt-2'>
        <button
          onClick={(e) => {
            e.preventDefault()
            handlePrevStep()
          }}
          className='flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center'
        >
          <ArrowLeft className='w-5 h-5 mr-2' />
          Quay lại
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleNextStep()
          }}
          className='flex-1 bg-color-1 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center'
        >
          <CheckCircle className='w-5 h-5 mr-2' />
          Hoàn thành
        </button>
      </div>
    </div>
  )
}

export default AccountInfo
