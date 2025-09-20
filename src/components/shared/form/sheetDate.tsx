import { useState } from 'react'

import { AlertCircle, CalendarDays, CalendarRange, X } from 'lucide-react'
import SheetPortal from './sheetPortal'
import DateRangePicker from '../dateRangePicker'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'

interface SheetDateProps {
  title: string
  singleDate?: boolean
  disableLabel?: boolean
  onChange?: (val: string) => void
  value?: string
  error?: string
}

const SheetDate = ({
  title,
  singleDate,
  disableLabel = false,
  value,
  onChange,
  error,
}: SheetDateProps) => {
  // const [range, setRange] = useState<{
  //   startDate: Date
  //   endDate: Date
  // } | null>(null)

  const [visible, setVisible] = useState(false)

  const handleOnChange = (val: { startDate: Date; endDate: Date }) => {
    const startDate = format(val.startDate, 'dd/MM/yyyy', { locale: vi })
    const endDate = format(val.endDate, 'dd/MM/yyyy', { locale: vi })

    if (singleDate) {
      onChange?.(startDate)
    } else {
      onChange?.(startDate + '-' + endDate)
    }
  }
  console.log('value', value)

  return (
    <div>
      {!disableLabel && (
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <CalendarDays className='w-4 h-4 inline mr-2 ' />
          {title}
        </label>
      )}

      <div
        className={`h-12 border rounded-xl relative flex items-center px-4 cursor-pointer ${
          error ? 'border-red-600' : ''
        }`}
        onClick={() => setVisible(true)}
      >
        <p className='text-sm text-gray-600'>
          {value ? (
            <span>{value}</span>
          ) : (
            // singleDate ? (
            //   `${value.startDate.toLocaleDateString()}`
            // ) : (
            //   `Từ ${value.startDate.toLocaleDateString()} - ${value.endDate.toLocaleDateString()}`
            // )
            <span className='text-color-2'>Chọn ngày</span>
          )}
        </p>
        <CalendarRange className='w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2 text-color-2' />
      </div>
      {error && (
        <p className='mt-1 ml-1 text-xs text-red-600 flex items-center animate-slideDown'>
          <AlertCircle className='w-4 h-4 mr-1' />
          {error}
        </p>
      )}

      <SheetPortal visible={visible} onClose={() => setVisible(false)}>
        <div>
          <div className='flex justify-between p-4 pb-2'>
            <h2 className='text-lg font-bold '>{title}</h2>
            <button
              onClick={(e) => {
                e.preventDefault()
                setVisible(false)
              }}
            >
              <X />
            </button>
          </div>
        </div>
        <div className='w-full'>
          <DateRangePicker
            onSelectDone={() => setVisible(false)}
            onChange={(val) => handleOnChange(val)}
            singleDate={singleDate}
            value={value}
          />
          {!singleDate && (
            <div className='mt-2 flex justify-start gap-2 w-full px-4'>
              <button
                className='px-4 py-2 rounded-lg bg-color-1 text-white text-sm w-full h-10'
                onClick={() => setVisible(false)}
              >
                Xác nhận
              </button>
            </div>
          )}
        </div>
      </SheetPortal>
    </div>
  )
}

export default SheetDate
