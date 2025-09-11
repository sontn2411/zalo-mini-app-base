import { CircleStar } from 'lucide-react'
import SelectInput from '../selectInput'

const ranks = [
  'Lao động kỹ thuật',
  'Giám đốc điều hành',
  'Chuyên gia',
  'Nhà quản lý',
]

const RankJobOption = () => {
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <CircleStar className='w-4 h-4 inline mr-2' />
        Cấp bậc
      </label>
      <SelectInput
        options={ranks.map((item, index) => ({
          label: item,
          value: `ranks_${index}`,
        }))}
        maxSelect={1}
        title='Chọn cấp bậc'
        placeholder='Chọn cấp bậc'
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default RankJobOption
