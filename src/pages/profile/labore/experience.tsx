import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FileText, Sparkles, AlertCircle } from 'lucide-react'
import SelectInput from '@/components/shared/form/selectInput'

const ListSkill = [
  { value: 'communication', label: 'Giao tiếp' },
  { value: 'teamwork', label: 'Làm việc nhóm' },
  { value: 'leadership', label: 'Lãnh đạo' },
  { value: 'problem-solving', label: 'Giải quyết vấn đề' },
]

const schema = z.object({
  skills: z.array(z.string()).min(1, 'Chọn ít nhất 1 kỹ năng'),
  experienceDescription: z.string().min(10, 'Mô tả tối thiểu 10 ký tự'),
})

type FormValues = z.infer<typeof schema>

const Experience = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      skills: [],
      experienceDescription: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-4 space-y-4 bg-white rounded-md'
    >
      {/* Kỹ năng */}
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Sparkles className='w-4 h-4 inline mr-2' />
          Kỹ năng
        </label>
        <Controller
          name='skills'
          control={control}
          render={({ field }) => (
            <SelectInput
              options={ListSkill}
              maxSelect={5}
              title='Chọn kỹ năng'
              placeholder='Chọn kỹ năng'
              onChange={(values: string[]) => field.onChange(values)}
              value={field.value}
            />
          )}
        />
        {errors.skills && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.skills.message}
          </p>
        )}
      </div>

      {/* Mô tả */}
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <FileText className='w-4 h-4 inline mr-2' />
          Mô tả kinh nghiệm
        </label>
        <textarea
          {...register('experienceDescription')}
          placeholder='Mô tả công việc, trách nhiệm...'
          className='w-full p-3 border rounded-xl border-gray-300 focus:outline-color-1 focus:outline focus:outline-2'
          rows={4}
        />
        {errors.experienceDescription && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.experienceDescription.message}
          </p>
        )}
      </div>

      <button
        type='submit'
        className='px-4 py-2 text-white bg-color-1 w-full rounded-lg'
      >
        Lưu
      </button>
    </form>
  )
}

export default Experience
