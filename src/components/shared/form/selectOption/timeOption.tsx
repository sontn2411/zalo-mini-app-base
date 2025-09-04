import { Clock } from 'lucide-react'
import SelectInput from '../selectInput'

const times = [
  'Giờ hành chính',
  'Theo ca',
  'Thỏa thuận',
  'Bán thời gian',
  'Toàn thời gian',
]

const TimeOption = () => {
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <Clock className='w-4 h-4 inline mr-2' />
        Thới gian
      </label>

      <SelectInput
        options={times}
        maxSelect={1}
        title='Chọn thời gian'
        placeholder='Chọn thời gian'
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default TimeOption
