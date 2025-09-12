import { Briefcase, CircleStar, Users, VenusAndMars } from 'lucide-react'

import SelectInput from '../selectInput'
import TargetJob from '../input/targetJob'
import { ButtonNextStep } from '../buttonSteps'
import GenderField from '../genderField'
import useSettingStore from '@/store/useSetting'

const ranks = [
  'Lao động kỹ thuật',
  'Giám đốc điều hành',
  'Chuyên gia',
  'Nhà quản lý',
]

interface InforJobPostingProps {
  handleNextStep: () => void
}

const InforJobPosting = ({ handleNextStep }: InforJobPostingProps) => {
  const { ListJob } = useSettingStore()

  return (
    <form className='space-y-6 animate-fadeIn'>
      <TargetJob />

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <Briefcase className='w-4 h-4 inline mr-2' />
          Ngành nghề
        </label>

        <SelectInput
          options={ListJob}
          maxSelect={2}
          title='Chọn ngành nghề'
          placeholder='Chọn ngành nghề'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>

      <div>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <CircleStar className='w-4 h-4 inline mr-2' />
          Cấp bậc
        </label>

        <SelectInput
          options={ranks}
          maxSelect={2}
          title='Chọn cấp bậc'
          placeholder='Chọn cấp bậc'
          onChange={(values) => console.log('Ngành đã chọn:', values)}
        />
      </div>

      <GenderField />
      <div>
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            <Users className='w-4 h-4 inline mr-2' />
            Số lượng
          </label>
          <input
            type='text'
            placeholder='Nhập số lượng cần tuyển'
            className={`w-full px-4 py-3 border rounded-xl transition-all  focus:outline-color-1  focus:outline focus:outline-2  `}
          />
        </div>
      </div>

      <div>
        <ButtonNextStep handleNextStep={handleNextStep} />
      </div>
    </form>
  )
}

export default InforJobPosting
