import { Check, X } from 'lucide-react'
import { Sheet } from 'zmp-ui'

type FilterType = 'industry' | 'location' | 'salary' | 'experience' | 'jobType'

interface FilterBottomSheetProps {
  filterType: FilterType | null
  options: string[] | undefined
  filterLabels: Record<FilterType, string>
  selectedFilters: Record<FilterType, string[]>
  handleFilterSelect: (filterType: FilterType, option: string) => void
  clearFilters: () => void
  onClose: () => void
}

export default function FilterBottomSheet({
  filterType,
  options,
  filterLabels,
  selectedFilters,
  handleFilterSelect,
  clearFilters,
  onClose,
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
          <h2 className='text-lg font-bold '>Title </h2>
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

    // <div
    //   className='fixed inset-0 z-50 bg-black bg-opacity-50'
    //   onClick={onClose}
    // >
    //   <div
    //     className='absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[70vh] overflow-hidden'
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     <div className='p-4 border-b border-gray-200'>
    //       <div className='flex items-center justify-between mb-2'>
    //         <h3 className='text-lg font-semibold text-gray-900'>
    //           {filterLabels[filterType]}
    //         </h3>
    //         <button
    //           onClick={onClose}
    //           className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-100'
    //         >
    //           <X className='w-5 h-5 text-gray-600' />
    //         </button>
    //       </div>
    //     </div>

    //     <div className='overflow-y-auto max-h-[50vh] p-4'>
    //       <div className='space-y-3'>
    // {options.map((option, index) => (
    //   <button
    //     key={index}
    //     onClick={() => handleFilterSelect(filterType, option)}
    //     className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
    //       selectedFilters[filterType].includes(option)
    //         ? 'border-blue-500 bg-blue-50 text-blue-700'
    //         : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
    //     }`}
    //   >
    //     <span className='font-medium'>{option}</span>
    //     {selectedFilters[filterType].includes(option) && (
    //       <Check className='w-5 h-5 text-blue-600' />
    //     )}
    //   </button>
    // ))}
    //       </div>
    //     </div>

    //     <div className='p-4 border-t border-gray-200 bg-gray-50'>
    //       <div className='flex space-x-3'>
    //         <button
    //           onClick={clearFilters}
    //           className='flex-1 py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium'
    //         >
    //           Xóa tất cả
    //         </button>
    //         <button
    //           onClick={onClose}
    //           className='flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium'
    //         >
    //           Áp dụng ({selectedFilters[filterType].length})
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
