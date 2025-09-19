import { useDataWards } from '@/api/query/location'
import SelectInput from '@/components/shared/form/selectInput'
import useLocationStore from '@/store/useLocation'
import useSettingStore from '@/store/useSetting'
import { AlertCircle, MapPin } from 'lucide-react'

interface SelectOptionWardProps {
  onChange: (value: string[]) => void
  error?: string
}

const SelectOptionWard = ({ onChange, error }: SelectOptionWardProps) => {
  const { provinceKH } = useLocationStore()

  const { data: dataWards } = useDataWards(provinceKH)

  const wards = (dataWards?.Data?.Data || []).map((item: any) => ({
    label: item.text,
    value: item.value,
  }))
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <MapPin className='w-4 h-4 inline mr-2' />
        <span>Nơi làm việc</span>
      </label>
      {dataWards && (
        <SelectInput
          options={wards}
          maxSelect={999}
          title='Chọn xã/phường'
          placeholder='Chọn xã/phường'
          onChange={(values) => onChange(values)}
          className={`${error ? 'border-red-600' : ''}`}
        />
      )}
      {error && (
        <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
          <AlertCircle className='w-4 h-4 mr-1' />
          {error}
        </p>
      )}
    </div>
  )
}

export default SelectOptionWard
