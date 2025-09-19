import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SelectInput from '@/components/shared/form/selectInput'
import { Plus, Trash2, Languages, Laptop, AlertCircle } from 'lucide-react'

const languages = [
  { value: 'en', label: 'Tiếng Anh' },
  { value: 'jp', label: 'Tiếng Nhật' },
  { value: 'cn', label: 'Tiếng Trung' },
  { value: 'kr', label: 'Tiếng Hàn' },
  { value: 'fr', label: 'Tiếng Pháp' },
]

const levels = ['Sơ cấp', 'Trung cấp', 'Cao cấp', 'Bản ngữ']

const itOptions = [
  { value: 'office', label: 'Tin học văn phòng' },
  { value: 'other', label: 'Khác' },
]

const schema = z.object({
  languages: z.array(
    z.object({
      language: z.string().nonempty('Chọn ngôn ngữ'),
      level: z.string().nonempty('Chọn trình độ'),
    })
  ),
  it: z.object({
    type: z.string().nonempty('Chọn trình độ tin học'),
    other: z.string().optional(),
  }),
})

type FormValues = z.infer<typeof schema>

const LanguageIt = () => {
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      languages: [{ language: '', level: '' }],
      it: { type: '', other: '' },
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data)
  }

  const itType = watch('it.type')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6 p-4 bg-white rounded-md'
    >
      {/* Ngoại ngữ */}
      <div className='space-y-4'>
        <h3 className='font-semibold text-gray-800'>Ngoại ngữ</h3>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className='relative border rounded-lg p-4 space-y-4'
          >
            {/* Xóa */}
            {fields.length > 1 && (
              <button
                type='button'
                onClick={() => remove(index)}
                className='absolute top-2 right-2 text-red-500'
              >
                <Trash2 size={18} />
              </button>
            )}

            {/* Ngôn ngữ */}
            <div>
              <Controller
                name={`languages.${index}.language`}
                control={control}
                render={({ field }) => (
                  <SelectInput
                    options={languages}
                    maxSelect={1}
                    title='Chọn ngôn ngữ'
                    placeholder='Chọn ngôn ngữ'
                    onChange={(values: string[]) =>
                      field.onChange(values[0] || '')
                    }
                    value={field.value ? [field.value] : []}
                    className={`${
                      errors.languages?.[index]?.language
                        ? 'border-red-600'
                        : ''
                    }`}
                  />
                )}
              />
              {errors.languages?.[index]?.language && (
                <p className='text-xs text-red-600 flex items-center mt-1'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.languages[index]?.language?.message}
                </p>
              )}
            </div>

            {/* Trình độ */}
            <div>
              <p className='text-sm font-semibold text-gray-700 mb-2'>
                Trình độ
              </p>
              <div className='grid grid-cols-2 gap-2'>
                {levels.map((level) => (
                  <label
                    key={level}
                    className='flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer'
                  >
                    <input
                      type='radio'
                      value={level}
                      {...register(`languages.${index}.level`)}
                      className='accent-color-1'
                    />
                    <span className='text-sm'>{level}</span>
                  </label>
                ))}
              </div>
              {errors.languages?.[index]?.level && (
                <p className='text-xs text-red-600 flex items-center mt-1'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.languages[index]?.level?.message}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Thêm mới */}
        <button
          type='button'
          onClick={() => append({ language: '', level: '' })}
          className='w-full py-2 border-2 border-dashed border-color-1 text-color-1 rounded-lg flex items-center justify-center gap-2'
        >
          <Plus size={16} />
          Thêm ngoại ngữ
        </button>
      </div>

      {/* Tin học */}
      <div className='space-y-4'>
        <h3 className='font-semibold text-gray-800 flex items-center gap-2'>
          <Laptop className='w-4 h-4' /> Tin học
        </h3>
        <Controller
          name='it.type'
          control={control}
          render={({ field }) => (
            <SelectInput
              options={itOptions}
              maxSelect={1}
              title='Chọn trình độ tin học'
              placeholder='Chọn trình độ'
              onChange={(values: string[]) => field.onChange(values[0] || '')}
              value={field.value ? [field.value] : []}
              className={`${errors.it?.type ? 'border-red-600' : ''}`}
            />
          )}
        />
        {errors.it?.type && (
          <p className='text-xs text-red-600 flex items-center mt-1'>
            <AlertCircle className='w-4 h-4 mr-1' />
            {errors.it?.type.message}
          </p>
        )}

        {itType === 'other' && (
          <input
            type='text'
            {...register('it.other')}
            placeholder='Nhập chứng chỉ hoặc kỹ năng tin học khác'
            className='w-full p-3 border rounded-lg'
          />
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

export default LanguageIt
