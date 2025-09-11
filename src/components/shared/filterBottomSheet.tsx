import { useLayoutEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import type { FilterType, FilterOption } from './searchFilter'
import SheetPortal from './form/sheetPortal'
import useWindowHeight from '@/hooks/useWindowHeight'

interface FilterBottomSheetProps {
  filterType: FilterType | null
  options: FilterOption[] | undefined
  filterLabels: Record<FilterType, string>
  selectedFilters: Record<FilterType, string[]>
  handleFilterSelect: (filterType: FilterType, value: string) => void
  clearFilters: () => void
  onClose: () => void
}

export default function FilterBottomSheet({
  filterType,
  options,
  selectedFilters,
  handleFilterSelect,
  onClose,
  filterLabels,
}: FilterBottomSheetProps) {
  if (!filterType || !options) return null

  const windowHeight = useWindowHeight()
  const [searchTerm, setSearchTerm] = useState('')
  const listContainerRef = useRef<HTMLDivElement>(null)

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectedValue = selectedFilters[filterType][0]
  const showSearch = options.length >= 10

  useLayoutEffect(() => {
    if (!listContainerRef.current || !selectedValue) return

    // tìm chính xác item đã chọn trong list
    const selectedEl = listContainerRef.current.querySelector<HTMLDivElement>(
      `[data-value="${selectedValue}"]`
    )

    if (selectedEl) {
      setTimeout(() => {
        selectedEl.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }, 0)
    }
  }, [filterType, selectedValue, searchTerm])

  return (
    <SheetPortal visible height='85%' onClose={onClose}>
      <div>
        {/* Header */}
        <div className='flex flex-col p-4 pb-2'>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='text-lg font-bold'>{filterLabels[filterType]}</h2>
            <button
              onClick={(e) => {
                e.preventDefault()
                onClose()
              }}
            >
              <X />
            </button>
          </div>

          {showSearch && (
            <input
              type='text'
              placeholder='Tìm kiếm...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg text-sm placeholder-gray-500 focus:outline-color-1 focus:outline focus:outline-2 mb-2'
            />
          )}
        </div>

        {/* List */}
        <div
          ref={listContainerRef}
          className='px-4 space-y-3 mt-2 overflow-y-auto'
          style={{ maxHeight: windowHeight * 0.7 }}
        >
          {filteredOptions.map((option) => {
            const checked = selectedFilters[filterType].includes(option.value)
            return (
              <div
                key={option.value}
                data-value={option.value}
                onClick={() => {
                  handleFilterSelect(filterType, option.value)
                  onClose()
                }}
                className='flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition'
              >
                <span
                  className={`text-base ${
                    checked ? 'text-color-1 font-medium' : 'text-black'
                  }`}
                >
                  {option.label}
                </span>
                {checked && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-color-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </SheetPortal>
  )
}
