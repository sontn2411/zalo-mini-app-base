import { useState } from 'react'
import { DateRange, Calendar } from 'react-date-range'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { vi } from 'date-fns/locale'

interface Props {
  onChange?: (range: { startDate: Date; endDate: Date }) => void
  singleDate?: boolean
}

export default function DateRangePicker({
  onChange,
  singleDate = false,
}: Props) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  const handleRangeChange = (item: any) => {
    const selection = item.selection
    setRange([selection])
    onChange?.({
      startDate: selection.startDate as Date,
      endDate: selection.endDate as Date,
    })
  }

  const handleSingleChange = (date: Date) => {
    setRange([{ startDate: date, endDate: date, key: 'selection' }])
    onChange?.({ startDate: date, endDate: date })
  }

  return singleDate ? (
    <Calendar
      date={range[0].startDate}
      onChange={handleSingleChange}
      locale={vi}
      dateDisplayFormat='dd/MM/yyyy'
    />
  ) : (
    <DateRange
      ranges={range}
      onChange={handleRangeChange}
      moveRangeOnFirstSelection={false}
      editableDateInputs
      months={1}
      direction='vertical'
      locale={vi}
      dateDisplayFormat='dd/MM/yyyy'
    />
  )
}
