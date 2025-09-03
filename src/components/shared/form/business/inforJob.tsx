import {
  ArrowLeft,
  ArrowRight,
  Clock,
  GraduationCap,
  Target,
  Users,
} from 'lucide-react'
import SelectInput from '../selectInput'
import { ButtonNextStep, ButtonPrevStep } from '../buttonSteps'
import TargetJob from '../input/targetJob'

const dataGraduation = [
  'Không có trình độ CMKT',
  'CNKT không bằng',
  'Đào tạo thường xuyên',
  'Sơ cấp nghề',
  'Trung cấp',
  'Cao đẳng',
  'Đại học',
  'Chưa qua đào tạo',
  'Chứng chỉ nghề dưới 3 tháng',
  'Tiến sĩ',
  'CNKT không bằng',
  'Thạc sĩ',
  'Lao động phổ thông',
  'Khác',
]

const experienceOptions = [
  'Chưa có kinh nghiệm',
  'Dưới 1 năm',
  '1-2 năm',
  '2-5 năm',
  '5-10 năm',
  'Trên 10 năm',
]

interface InforJobProps {
  handlePrevStep: () => void
  handleNextStep: () => void
}

const InforJob = ({ handleNextStep, handlePrevStep }: InforJobProps) => {
  return (
    <form className='space-y-6 animate-fadeIn'>
      <TargetJob />

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Users className='w-4 h-4 inline mr-2' />
          Số lượng
        </label>
        <input
          type='text'
          placeholder='Nhập họ và tên đầy đủ'
          className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2  `}
        />
      </div>
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <GraduationCap className='w-4 h-4 inline mr-2' />
          Trình độ
        </label>

        <SelectInput
          options={dataGraduation}
          maxSelect={1}
          title='Chọn Trình độ'
          placeholder='Chọn Trình độ'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Clock className='w-4 h-4 inline mr-2' />
          Kinh nghiệm làm việc
        </label>

        <SelectInput
          options={experienceOptions}
          maxSelect={1}
          title='Chọn kinh nghiệm'
          placeholder='Chọn Khinh nghiệm'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>

      <div className='flex gap-4 pt-2'>
        <ButtonPrevStep handlePrevStep={handlePrevStep} />

        <ButtonNextStep handleNextStep={handleNextStep} />
      </div>
    </form>
  )
}

export default InforJob
