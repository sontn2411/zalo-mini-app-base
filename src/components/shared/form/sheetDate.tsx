import { useState } from 'react'

import { CalendarDays, CalendarRange, X } from 'lucide-react'
import SheetPortal from './sheetPortal'
import DateRangePicker from '../dateRangePicker'

interface SheetDateProps {
  title: string
  singleDate?: boolean
  disableLabel?: boolean
  onChange?: (val: string) => void
  value?: { startDate: Date; endDate: Date } | null
}

const SheetDate = ({
  title,
  singleDate,
  disableLabel = false,
  value,
  onChange,
}: SheetDateProps) => {
  // const [range, setRange] = useState<{
  //   startDate: Date
  //   endDate: Date
  // } | null>(null)

  const [visible, setVisible] = useState(false)

  const handleOnChange = (val: { startDate: Date; endDate: Date }) => {
    const startDate = val.startDate.toLocaleDateString()
    const endDate = val.startDate.toLocaleDateString()
    if (singleDate) {
      onChange?.(startDate)
    } else {
      onChange?.(startDate + '-' + endDate)
    }
  }

  return (
    <div>
      {!disableLabel && (
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          <CalendarDays className='w-4 h-4 inline mr-2 ' />
          {title}
        </label>
      )}

      <div
        className='h-12 border rounded-xl relative flex items-center px-4 cursor-pointer'
        onClick={() => setVisible(true)}
      >
        <p className='text-sm text-gray-600'>
          {value ? (
            singleDate ? (
              `${value.startDate.toLocaleDateString()}`
            ) : (
              `Từ ${value.startDate.toLocaleDateString()} - ${value.endDate.toLocaleDateString()}`
            )
          ) : (
            <span className='text-color-2'>Chọn ngày</span>
          )}
        </p>
        <CalendarRange className='w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2 text-color-2' />
      </div>

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
