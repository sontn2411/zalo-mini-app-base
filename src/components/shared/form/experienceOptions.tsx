import { Clock } from 'lucide-react'
import SelectInput from './selectInput'

const experienceOptions = [
  'Chưa có kinh nghiệm',
  'Dưới 1 năm',
  '1-2 năm',
  '2-5 năm',
  '5-10 năm',
  'Trên 10 năm',
]

const ExperienceOptions = () => {
  return (
    <>
      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Clock className='w-4 h-4 inline mr-2' />
          Kinh nghiệm làm việc
        </label>

        <SelectInput
          options={experienceOptions}
          maxSelect={1}
          title='Chọn kinh nghiệm'
          placeholder='Chọn Khinh nghiệm'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>
    </>
  )
}

export default ExperienceOptions
