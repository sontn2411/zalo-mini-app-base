import StepIndicator from '@/components/shared/stepIndicator'
import { useState } from 'react'

const steps = [
  { title: 'Thông tin cơ bản', description: 'Vị trí và yêu cầu tuyển dụng' },
  { title: 'Thông tin công ty', description: 'Chi tiết về nhà tuyển dụng' },
  { title: 'Mô tả công việc', description: 'Mô tả và yêu cầu công việc' },
  { title: 'Xem trước & Đăng', description: 'Kiểm tra và hoàn tất' },
]

const JobPostingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <div className='px-2 mt-4 '>
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className='bg-white rounded-2xl p-6 shadow-sm mb-'></div>
    </div>
  )
}

export default JobPostingPage
