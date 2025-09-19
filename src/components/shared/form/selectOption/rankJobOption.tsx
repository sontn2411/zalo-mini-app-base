import { AlertCircle, CircleStar } from 'lucide-react'
import SelectInput from '../selectInput'
import useSettingStore from '@/store/useSetting'

interface RankJobOptionType {
  onChange: (value: string) => void
  error?: string
}

const RankJobOption = ({ onChange, error }: RankJobOptionType) => {
  const { ListPosition } = useSettingStore()

  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <CircleStar className='w-4 h-4 inline mr-2' />
        Cấp bậc
      </label>
      <SelectInput
        options={ListPosition}
        maxSelect={1}
        title='Chọn cấp bậc'
        placeholder='Chọn cấp bậc'
        onChange={(values) => onChange(values[0])}
        className={`${error ? 'border-red-600' : ''}`}
      />
      {error && (
        <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
          <AlertCircle className='w-4 h-4 mr-1' />
          {error}
        </p>
      )}
    </div>
  )
}

export default RankJobOption
