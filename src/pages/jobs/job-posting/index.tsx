import InforJobPosting from '@/components/shared/form/job/InforJobPosting'
import Requirements from '@/components/shared/form/job/requirements'
import StepIndicator from '@/components/shared/stepIndicator'
import { useState } from 'react'

const steps = [
  { title: 'Thông tin cơ bản', description: 'Vị trí và yêu cầu tuyển dụng' },
  {
    title: 'Yêu cầu ứng viên',
    description: 'Chi tiết yêu cầu của nhà tuyển dụng',
  },
  { title: 'Mô tả công việc', description: 'Mô tả thông tin công việc' },
  { title: 'Xem trước & Đăng', description: 'Kiểm tra và hoàn tất' },
]

const JobPostingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))

  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className='px-2 mt-4 '>
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className='bg-white rounded-2xl p-6 shadow-sm mb-2'>
        {currentStep === 1 && (
          <InforJobPosting handleNextStep={handleNextStep} />
        )}

        {currentStep === 2 && <Requirements />}
      </div>
    </div>
  )
}

export default JobPostingPage
