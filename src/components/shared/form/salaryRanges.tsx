import { DollarSign } from 'lucide-react'
import SelectInput from './selectInput'

const salaryRanges = [
  'Dưới 5 triệu',
  '5-10 triệu',
  '10-20 triệu',
  '20-50 triệu',
  'Thỏa thuận',
  'Lương ngày',
  'Lương Giờ',
]

const SalaryRanges = () => {
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <DollarSign className='w-4 h-4 inline mr-2' />
        Mức lương
      </label>

      <SelectInput
        options={salaryRanges}
        maxSelect={1}
        title='Chọn Mức lương'
        placeholder='Chọn Mức lương'
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default SalaryRanges
