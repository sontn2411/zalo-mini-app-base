import { useState } from 'react'
import {
  AlertCircle,
  ClipboardList,
  Plus,
  Trash2,
  UsersRound,
} from 'lucide-react'
import GenderField from '@/components/shared/form/genderField'
import InputCustom from '@/components/ui/inputCustom'
import SelectOptionAge from './selectOptionAge'
import { JobForm } from '@/schemas/postingSchema'
import {
  Control,
  Controller,
  FieldErrors,
  useFieldArray,
} from 'react-hook-form'
import { nativeStorage } from 'zmp-sdk'
import { KEYSTORAGE } from '@/constants/message'

interface DetailsProps {
  control: Control<JobForm>
  errors: FieldErrors<JobForm>
}

const Details = ({ control, errors }: DetailsProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'detail',
  })

  console.log('=======', nativeStorage.getItem(KEYSTORAGE.ACCESSTOKEN))

  return (
    <div className='space-y-4'>
      <h2 className='text-base font-medium text-gray-800 '>
        <ClipboardList className='w-4 h-4 inline mr-2' />
        Chi tiết tuyển dụng
      </h2>

      {fields.map((item, index) => (
        <div key={item.id}>
          <div
            className={`rounded-lg p-3 space-y-3 ${
              errors.detail?.[index]
                ? 'border border-red-500'
                : 'border border-gray-200'
            }`}
          >
            <div className='flex justify-between items-center'>
              <span className='text-sm font-medium text-gray-600'>
                Yêu cầu #{index + 1}
              </span>
              {index !== 0 && (
                <button
                  type='button'
                  onClick={() => remove(index)}
                  className='text-red-500 hover:text-red-700'
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              <Controller
                name={`detail.${index}.gender`}
                control={control}
                render={({ field }) => (
                  <GenderField hiddenIcon={true} {...field} />
                )}
              />

              <div className='flex gap-4'>
                <Controller
                  name={`detail.${index}.quantity`}
                  control={control}
                  render={({ field }) => (
                    <InputCustom
                      {...field}
                      value={field.value?.toString() ?? ''}
                      label='Số lượng'
                      // icon={UsersRound}
                      name={`detail.${index}.quantity`}
                      placeholder='Nhập số lượng'
                      type='tel'
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />

                <Controller
                  name={`detail.${index}.age`}
                  control={control}
                  render={({ field }) => (
                    <SelectOptionAge onChange={field.onChange} />
                  )}
                />
              </div>
            </div>
          </div>
          {errors.detail?.[index] && (
            <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
              <AlertCircle className='w-4 h-4 mr-1' />
              Vui lòng nhập đầy đủ các trường trong yêu cầu
            </p>
          )}
        </div>
      ))}

      <button
        type='button'
        onClick={() =>
          append({ gender: '', quantity: 0, age: '' }, { shouldFocus: false })
        }
        className='w-full py-2 border-2 border-dashed rounded-lg border-color-1 text-color-1 flex items-center justify-center gap-2'
      >
        <Plus size={16} />
        Thêm yêu cầu khác
      </button>
    </div>
  )
}

export default Details
