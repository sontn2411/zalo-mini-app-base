import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SelectInput from '@/components/shared/form/selectInput'
import InputCustom from '@/components/ui/inputCustom'
import {
  Award,
  GraduationCap,
  Briefcase,
  AlertCircle,
  Trophy,
  PlusCircle,
  Trash2,
  Plus,
} from 'lucide-react'
import { Button } from 'zmp-ui'
import useSettingStore from '@/store/useSetting'

const dataEducation = [
  { value: 'DH', label: 'Đại học' },
  { value: 'CD', label: 'Cao Đẳng' },
]

const dataMajors = [
  { value: 'it', label: 'Công nghệ thông tin' },
  { value: 'finance', label: 'Tài chính - Ngân hàng' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'law', label: 'Luật' },
  { value: 'education', label: 'Sư phạm' },
]

const schema = z.object({
  educations: z.array(
    z.object({
      trainingPlace: z.string().optional(),
      degree: z.array(z.string()).min(1, 'Vui lòng chọn bằng cấp'),
      major: z.array(z.string()).min(1, 'Vui lòng chọn chuyên ngành'),
      achievement: z.string().optional(),
    })
  ),
})

type FormType = z.infer<typeof schema>

const Education = () => {
  const { ListStudy } = useSettingStore()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      educations: [
        { trainingPlace: '', degree: [], major: [], achievement: '' },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'educations',
  })

  const onSubmit = (values: FormType) => {
    console.log('Form values:', values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-4  space-y-6 rounded-md'
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          className='p-4 border rounded-lg space-y-4 relative bg-white'
        >
          {/* Xóa cụm */}
          {fields.length > 1 && (
            <button
              type='button'
              onClick={() => remove(index)}
              className='absolute top-2 right-2 text-red-500'
            >
              <Trash2 size={18} />
            </button>
          )}

          {/* Cơ sở đào tạo */}
          <InputCustom
            label='Cơ sở đào tạo'
            placeholder='Tên cơ sở đào tạo'
            icon={GraduationCap}
            error={errors.educations?.[index]?.trainingPlace?.message}
            {...register(`educations.${index}.trainingPlace`)}
          />

          {/* Bằng cấp */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              <Briefcase className='w-4 h-4 inline mr-2' />
              Bằng cấp
            </label>
            <Controller
              name={`educations.${index}.degree`}
              control={control}
              render={({ field }) => (
                <SelectInput
                  options={ListStudy}
                  maxSelect={1}
                  title='Chọn bằng cấp'
                  placeholder='Chọn bằng cấp'
                  onChange={(values: string[]) => field.onChange(values)}
                  value={field.value}
                  className={`${
                    errors.educations?.[index]?.degree ? 'border-red-600' : ''
                  }`}
                />
              )}
            />
            {errors.educations?.[index]?.degree && (
              <p className='mt-1 ml-1 text-xs text-red-600 flex items-center'>
                <AlertCircle className='w-4 h-4 mr-1' />
                {errors.educations[index]?.degree?.message}
              </p>
            )}
          </div>

          {/* Chuyên ngành */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              <Award className='w-4 h-4 inline mr-2' />
              Chuyên ngành
            </label>
            <Controller
              name={`educations.${index}.major`}
              control={control}
              render={({ field }) => (
                <SelectInput
                  options={dataMajors}
                  maxSelect={2}
                  title='Chọn chuyên ngành'
                  placeholder='Chọn chuyên ngành'
                  onChange={(values: string[]) => field.onChange(values)}
                  value={field.value}
                  className={`${
                    errors.educations?.[index]?.major ? 'border-red-600' : ''
                  }`}
                />
              )}
            />
            {errors.educations?.[index]?.major && (
              <p className='mt-1 ml-1 text-xs text-red-600 flex items-center'>
                <AlertCircle className='w-4 h-4 mr-1' />
                {errors.educations[index]?.major?.message}
              </p>
            )}
          </div>

          {/* Thành tựu */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              <Trophy className='w-4 h-4 inline mr-2' />
              Thành tựu
            </label>
            <textarea
              rows={3}
              placeholder='Mô tả các thành tựu học tập, nghiên cứu, giải thưởng...'
              className='w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-color-1 focus:outline focus:outline-2'
              {...register(`educations.${index}.achievement`)}
            />
          </div>
        </div>
      ))}

      <button
        type='button'
        onClick={() =>
          append(
            { trainingPlace: '', degree: [], major: [], achievement: '' },
            { shouldFocus: false }
          )
        }
        className='w-full py-2 border-2 border-dashed  rounded-lg  border-color-1 text-color-1 flex items-center justify-center gap-2'
      >
        <Plus size={16} />
        Thêm học vấn
      </button>

      <Button
        onClick={handleSubmit(onSubmit)}
        htmlType='submit'
        className='w-full bg-color-1 text-white py-3 rounded-xl text-sm font-medium  hover:bg-color-1'
      >
        Đăng ký
      </Button>
    </form>
  )
}

export default Education
