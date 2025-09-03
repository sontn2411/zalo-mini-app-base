import {
  ProfessionalInfoFields,
  useFormRegisterStore,
} from '@/store/registerFormStore'
import { registerSchema } from '@/schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Clock,
  DollarSign,
  FileText,
  Gift,
  GraduationCap,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import SelectInput from '../selectInput'
import SalaryRanges from '../salaryRanges'
import BenfitOptions from '../benfitOptions'
import ExperienceOptions from '../experienceOptions'
import NoteInput from '../input/noteInput'
import { ButtonNextStep, ButtonPrevStep } from '../buttonSteps'

const jobOptions = [
  'Kế toán',
  'Lập trình viên',
  'Nhân viên bán hàng',
  'Thiết kế đồ họa',
  'Quản lý dự án',
  'Marketing',
  'Bảo vệ',
]

interface ProfessionalInfoProps {
  handleNextStep: () => void
  handlePrevStep: () => void
}

const ProfessionalInfo = ({
  handleNextStep,
  handlePrevStep,
}: ProfessionalInfoProps) => {
  const { formData, updateFormData } = useFormRegisterStore()

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ProfessionalInfoFields>({
  //   defaultValues: formData,
  //   resolver: zodResolver(
  //     registerSchema.pick({
  //       jobPosition: true,
  //       educationLevel: true,
  //       workExperience: true,
  //       expectedSalary: true,
  //       otherBenefits: true,
  //       notes: true,
  //     })
  //   ),
  //   mode: 'onChange',
  // })

  //    ${
  //   errors.jobPosition ? 'border-red-500 bg-red-50' : 'border-gray-300'
  // }
  return (
    <form className='space-y-6 animate-fadeIn'>
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Briefcase className='w-4 h-4 inline mr-2' />
          Vị trí công việc mong muốn
        </label>

        <SelectInput
          options={jobOptions}
          maxSelect={2}
          title='Chọn ngành nghề'
          placeholder='Chọn tối đa 2 ngành'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <GraduationCap className='w-4 h-4 inline mr-2' />
          Trình độ học vấn
        </label>
        <input
          type='text'
          placeholder='Ví dụ: 12/12, Đại học,...'
          // {...register('fullName')}
          className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2  
           
          `}
        />
        {/* {errors.fullName && (
          <p className='mt-1 text-sm text-red-600 flex items-center animate-slideDown'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.fullName.message}
          </p>
        )} */}
      </div>

      <ExperienceOptions />

      <SalaryRanges />

      <BenfitOptions />

      <NoteInput />

      <div className='flex gap-4'>
        <ButtonPrevStep handlePrevStep={handlePrevStep} />
        <ButtonNextStep handleNextStep={handleNextStep} />
      </div>
    </form>
  )
}

export default ProfessionalInfo
