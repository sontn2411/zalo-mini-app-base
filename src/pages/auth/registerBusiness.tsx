import AccountInfo from '@/components/shared/form/accountInfo'
import InforJob from '@/components/shared/form/business/inforJob'
import PersonBusiness from '@/components/shared/form/business/personBusiness'
import TermsCondition from '@/components/shared/form/business/termsCondition'
import StepIndicator from '@/components/shared/stepIndicator'
import { Building2, MapPin, Phone, User } from 'lucide-react'
import { useState } from 'react'

const steps = [
  {
    title: 'Thông tin nhà tuyển dụng',
    description: 'Cung cấp thông tin cơ bản của công ty ',
  },
  {
    title: 'Tạo tài khoản',
    description: 'Thiết lập thông tin đăng nhập',
  },
  {
    title: 'Thông tin tuyển dụng',
    description: 'Mô tả kinh nghiệm và mong muốn của bạn',
  },
  {
    title: 'Điều kiện & quyền lợi',
    description: 'Mô tả điều kiện và quyền lợi của công ty',
  },
]

const RegisterBusiness = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))

  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className='px-2 mt-4 '>
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className='bg-white rounded-2xl p-6 shadow-sm mb-2'>
        {currentStep === 1 && (
          <PersonBusiness handleNextStep={handleNextStep} />
        )}
        {currentStep === 2 && (
          <AccountInfo
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 3 && (
          <InforJob
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 4 && (
          <TermsCondition
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
      </div>
    </div>
  )
}

export default RegisterBusiness
