import { Gift } from 'lucide-react'
import SelectInput from './selectInput'

const benefitOptions = [
  'Căn tin',
  'Chăm sóc sức khỏe',
  'Điện thoại  ',
  'Nghỉ phép có lương',
  'Hoạt động nhóm',
  'Đào tạo',
  'Xe đưa đón',
  'Du lịch',
  'Phiếu quà tặng',
  'Hỗ trợ bữa ăn',
  'Đóng BHXH, BHYT, BHTN',
]

const BenfitOptions = () => {
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <Gift className='w-4 h-4 inline mr-2' />
        Chế độ phúc lợi
      </label>
      <SelectInput
        options={benefitOptions}
        maxSelect={5}
        title='Chọn Phúc lợi'
        placeholder='Chọn tối đa 5 phúc lợi'
        onChange={(values) => console.log('Phúc lợi đã chọn:', values)}
      />
    </div>
  )
}

export default BenfitOptions
