import { Check, X } from 'lucide-react'
import { Sheet } from 'zmp-ui'

type FilterType = 'sex' | 'age' | 'location' | 'industry'

interface FilterBottomSheetProps {
  filterType: FilterType | null
  options: string[] | undefined
  filterLabels: Record<FilterType, string>
  selectedFilters: Record<FilterType, string[]>
  handleFilterSelect: (filterType: FilterType, option: string) => void
  clearFilters: () => void
  onClose: () => void
  // title: string
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

  return (
    <Sheet
      visible
      autoHeight={false}
      height='85%'
      className=''
      onClose={onClose}
    >
      <div className=''>
        <div className='flex justify-between p-4 pb-2'>
          <h2 className='text-lg font-bold '>{filterLabels[filterType]} </h2>
          <button
            onClick={(e) => {
              e.preventDefault()
              onClose()
            }}
          >
            <X />
          </button>
        </div>
        <div className='px-4 space-y-3 mt-2'>
          {options.map((option, index) => {
            const checked = selectedFilters[filterType].includes(option)
            return (
              <div
                key={index}
                onClick={() => {
                  handleFilterSelect(filterType, option)
                  onClose()
                }}
                className='flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition'
              >
                <span
                  className={`text-base ${
                    checked ? 'text-color-1 font-medium' : 'text-black'
                  }`}
                >
                  {option}
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
    </Sheet>
  )
}
