import {
  ProfessionalInfoFields,
  useFormRegisterStore,
} from '@/components/store/registerFormStore'
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
import SelectInput from './selectInput'

const jobOptions = [
  'Kế toán',
  'Lập trình viên',
  'Nhân viên bán hàng',
  'Thiết kế đồ họa',
  'Quản lý dự án',
  'Marketing',
  'Bảo vệ',
]

const experienceOptions = [
  'Chưa có kinh nghiệm',
  'Dưới 1 năm',
  '1-2 năm',
  '2-5 năm',
  '5-10 năm',
  'Trên 10 năm',
]

const salaryRanges = [
  'Dưới 5 triệu',
  '5-10 triệu',
  '10-20 triệu',
  '20-50 triệu',
  'Thỏa thuận',
  'Lương ngày',
  'Lương Giờ',
]

const benefitOptions = [
  'Căn tin',
  'Chăm sóc sức khỏe',
  'Điện thoại  ',
  'Nghỉ phép có lương',
  'Hoạt động nhóm',
  'Đào tạo',
  'Xe đưa đón',
  'Du lịch',
  'Phiếu quà tặng',
  'Hỗ trợ bữa ăn',
  'Đóng BHXH, BHYT, BHTN',
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

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <DollarSign className='w-4 h-4 inline mr-2' />
          Mức lương mong muốn
        </label>

        <SelectInput
          options={salaryRanges}
          maxSelect={1}
          title='Chọn Mức lương'
          placeholder='Chọn Mức lương'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Gift className='w-4 h-4 inline mr-2' />
          Phúc lợi mong muốn
        </label>
        <SelectInput
          options={benefitOptions}
          maxSelect={5}
          title='Chọn Phúc lợi'
          placeholder='Chọn tối đa 5 phúc lợi'
          onChange={(values) => console.log('Phúc lợi đã chọn:', values)}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <FileText className='w-4 h-4 inline mr-2' />
          Ghi chú thêm
        </label>
        <textarea
          value={formData.notes}
          // onChange={(e) => handleInputChange('notes', e.target.value)}
          placeholder='Thông tin bổ sung về bản thân, kỹ năng đặc biệt, mong muốn khác...'
          rows={4}
          className='w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2'
        />
      </div>
      <div className='flex gap-2'>
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
          className='flex-1 bg-color-1 w-full text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center'
        >
          Tiếp theo
          <ArrowRight className='w-5 h-5 ml-2' />
        </button>
      </div>
    </form>
  )
}

export default ProfessionalInfo
