import { VenusAndMars } from 'lucide-react'

export default function GenderField() {
  return (
    <div className='flex gap-4 items-center '>
      <label className='block text-sm font-semibold text-gray-700 '>
        <VenusAndMars className='w-4 h-4 inline mr-2' />
        Giới tính
      </label>
      <div className='flex gap-4'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='gender'
            value='male'
            className='accent-color-1'
          />
          Nam
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='gender'
            value='female'
            className='accent-color-1'
          />
          Nữ
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='gender'
            value='other'
            className='accent-color-1'
          />
          Khác
        </label>
      </div>
    </div>
  )
}
