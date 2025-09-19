import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SelectInput from '@/components/shared/form/selectInput'
import { Gift, ClipboardCheck, AlertCircle } from 'lucide-react'

const benefitsOptions = [
  { value: 'insurance', label: 'Bảo hiểm' },
  { value: 'bonus', label: 'Thưởng' },
  { value: 'holiday', label: 'Nghỉ phép' },
  { value: 'remote', label: 'Làm việc từ xa' },
  { value: 'training', label: 'Đào tạo' },
]

const recruitmentOptions = [
  { value: 'fulltime', label: 'Toàn thời gian' },
  { value: 'parttime', label: 'Bán thời gian' },
  { value: 'intern', label: 'Thực tập' },
  { value: 'freelance', label: 'Freelance' },
]

const schema = z.object({
  benefits: z.array(z.string()).min(1, 'Chọn ít nhất 1 phúc lợi'),
  recruitmentType: z.string().nonempty('Chọn hình thức tuyển dụng'),
})

type FormValues = z.infer<typeof schema>

const Benefits = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      benefits: [],
      recruitmentType: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-4 space-y-6 bg-white rounded-md'
    >
      {/* Phúc lợi */}
      <div>
        <label className=' text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2'>
          <Gift className='w-4 h-4' /> Phúc lợi mong muốn
        </label>
        <Controller
          name='benefits'
          control={control}
          render={({ field }) => (
            <SelectInput
              options={benefitsOptions}
              maxSelect={5}
              title='Chọn phúc lợi'
              placeholder='Chọn phúc lợi'
              onChange={(values: string[]) => field.onChange(values)}
              value={field.value}
              className={`${errors.benefits ? 'border-red-600' : ''}`}
            />
          )}
        />
        {errors.benefits && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.benefits.message}
          </p>
        )}
      </div>

      {/* Hình thức tuyển dụng */}
      <div>
        <label className=' text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2'>
          <ClipboardCheck className='w-4 h-4' /> Hình thức tuyển dụng
        </label>
        <Controller
          name='recruitmentType'
          control={control}
          render={({ field }) => (
            <SelectInput
              options={recruitmentOptions}
              maxSelect={1}
              title='Chọn hình thức'
              placeholder='Chọn hình thức tuyển dụng'
              onChange={(values: string[]) => field.onChange(values[0] || '')}
              value={field.value ? [field.value] : []}
              className={`${errors.recruitmentType ? 'border-red-600' : ''}`}
            />
          )}
        />
        {errors.recruitmentType && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.recruitmentType.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type='submit'
        className='w-full py-2 bg-color-1 text-white rounded-lg'
      >
        Lưu thông tin
      </button>
    </form>
  )
}

export default Benefits
