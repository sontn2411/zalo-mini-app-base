import { useState } from 'react'
import { DateRange, RangeKeyDict } from 'react-date-range'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { vi } from 'date-fns/locale'

interface Props {
  onChange?: (range: { startDate: Date; endDate: Date }) => void
}

export default function DateRangePicker({ onChange }: Props) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  const handleChange = (item: RangeKeyDict) => {
    const selection = item.selection
    setRange([selection])
    if (onChange) {
      onChange({
        startDate: selection.startDate as Date,
        endDate: selection.endDate as Date,
      })
    }
  }

  return (
    <DateRange
      ranges={range}
      onChange={handleChange}
      moveRangeOnFirstSelection={false}
      editableDateInputs={true}
      months={1}
      direction='vertical'
      locale={vi}
      dateDisplayFormat='dd/MM/yyyy'
    />
  )
}
