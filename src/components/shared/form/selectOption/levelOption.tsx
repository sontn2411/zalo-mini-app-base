import { GraduationCap } from 'lucide-react'
import SelectInput from '../selectInput'

const dataGraduation = [
  'Không có trình độ CMKT',
  'CNKT không bằng',
  'Đào tạo thường xuyên',
  'Sơ cấp nghề',
  'Trung cấp',
  'Cao đẳng',
  'Đại học',
  'Chưa qua đào tạo',
  'Chứng chỉ nghề dưới 3 tháng',
  'Tiến sĩ',
  'CNKT không bằng',
  'Thạc sĩ',
  'Lao động phổ thông',
  'Khác',
]

const LevelOption = () => {
  return (
    <div className=''>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <GraduationCap className='w-4 h-4 inline mr-2' />
        Trình độ
      </label>

      <SelectInput
        options={dataGraduation}
        maxSelect={1}
        title='Chọn Trình độ'
        placeholder='Chọn Trình độ'
        onChange={(values) => console.log('Ngành đã chọn:', values)}
      />
    </div>
  )
}

export default LevelOption
