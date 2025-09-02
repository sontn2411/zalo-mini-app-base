import {
  PersonInfoFields,
  useFormRegisterStore,
} from '@/components/store/registerFormStore'
import { AlertCircle, ArrowRight, MapPin, Phone, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/schemas/registerSchema'

type PersonalInfoProps = {
  handleNextStep: () => void
}

const PersonalInfo = ({ handleNextStep }: PersonalInfoProps) => {
  const { formData, updateFormData } = useFormRegisterStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonInfoFields>({
    defaultValues: formData,
    resolver: zodResolver(
      registerSchema.pick({ fullName: true, address: true, phone: true })
    ),
    mode: 'onChange',
  })

  const onSubmit = (data: PersonInfoFields) => {
    updateFormData(data)
    handleNextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6 animate-fadeIn'
    >
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <User className='w-4 h-4 inline mr-2' />
          Họ và tên
        </label>
        <input
          type='text'
          placeholder='Nhập họ và tên đầy đủ'
          {...register('fullName')}
          className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2  ${
            errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.fullName && (
          <p className='mt-1 text-sm text-red-600 flex items-center animate-slideDown'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <MapPin className='w-4 h-4 inline mr-2' />
          Địa chỉ
        </label>
        <textarea
          rows={3}
          placeholder='Nhập địa chỉ chi tiết (số nhà, đường, phường/xã, tỉnh)'
          {...register('address')}
          className={`w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2 ${
            errors.address ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.address && (
          <p className='mt-1 text-sm text-red-600 flex items-center animate-slideDown'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.address.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Phone className='w-4 h-4 inline mr-2' />
          Số điện thoại
        </label>
        <input
          type='tel'
          placeholder='Nhập số điện thoại'
          {...register('phone', {
            onChange: (e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '')
            },
          })}
          className={`w-full px-4 py-3 border rounded-xl transition-all focus:outline-color-1  focus:outline focus:outline-2 ${
            errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.phone && (
          <p className='mt-1 text-sm text-red-600 flex items-center animate-slideDown'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.phone.message}
          </p>
        )}
      </div>

      <button
        // onClick={nextStep}
        className='flex-1 bg-color-1 w-full text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center'
      >
        Tiếp theo
        <ArrowRight className='w-5 h-5 ml-2' />
      </button>
    </form>
  )
}

export default PersonalInfo
