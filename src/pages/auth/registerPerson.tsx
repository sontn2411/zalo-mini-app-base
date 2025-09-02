import AccountInfo from '@/components/shared/form/accountInfo'
import PersonalInfo from '@/components/shared/form/personalInfo'
import ProfessionalInfo from '@/components/shared/form/professionalInfo'
import StepIndicator from '@/components/shared/stepIndicator'
import IconUI from '@/components/ui/iconUi'
import { CheckCircle, MapPin, Phone, UserRound } from 'lucide-react'
import { useState } from 'react'
import { Button, Input } from 'zmp-ui'

const steps = [
  {
    title: 'Thông tin cá nhân',
    description: 'Cung cấp thông tin cơ bản của bạn',
    fields: ['fullName', 'address', 'phone'],
  },
  {
    title: 'Thông tin nghề nghiệp',
    description: 'Mô tả kinh nghiệm và mong muốn của bạn',
    fields: [
      'jobPosition',
      'educationLevel',
      'workExperience',
      'expectedSalary',
      'otherBenefits',
      'notes',
    ],
  },
  {
    title: 'Tạo tài khoản',
    description: 'Thiết lập thông tin đăng nhập',
    fields: ['username', 'password', 'confirmPassword'],
  },
]

const RegisterPerson = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))

  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className='px-2 mt-4 '>
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className='bg-white rounded-2xl p-6 shadow-sm mb-'>
        {currentStep === 1 && <PersonalInfo handleNextStep={handleNextStep} />}
        {currentStep === 2 && (
          <ProfessionalInfo
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {currentStep === 3 && (
          <AccountInfo
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
      </div>
    </div>
  )
}

export default RegisterPerson
