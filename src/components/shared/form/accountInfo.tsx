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
import { ButtonCompleted, ButtonNextStep, ButtonPrevStep } from './buttonSteps'

interface AccountInfoProps {
  handleNextStep: () => void
  handlePrevStep: () => void
  isEndStep?: boolean
}

const AccountInfo = ({
  handleNextStep,
  handlePrevStep,
  isEndStep = false,
}: AccountInfoProps) => {
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

      <div className='flex gap-4 pt-2'>
        <ButtonPrevStep handlePrevStep={handlePrevStep} />
        {isEndStep ? (
          <ButtonCompleted hanldeComplete={handleNextStep} />
        ) : (
          <ButtonNextStep handleNextStep={handleNextStep} />
        )}
      </div>
    </div>
  )
}

export default AccountInfo
