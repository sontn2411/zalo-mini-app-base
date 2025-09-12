import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import SheetPortal from './sheetPortal'

interface Option {
  value: string
  label: string
}

interface SelectInputProps {
  options: Option[]
  maxSelect?: number
  title?: string
  placeholder?: string
  onChange?: (values: string[]) => void
  showSearch?: boolean
  className?: string
}

const SelectInput = ({
  options,
  maxSelect = 2,
  title = 'Chọn mục',
  placeholder = 'Chọn',
  onChange,
  showSearch = true,
  className,
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [tempSelected, setTempSelected] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleToggle = (value: string) => {
    if (maxSelect === 1) {
      setSelectedValues([value])
      onChange?.([value])
      setIsOpen(false)
    } else {
      if (tempSelected.includes(value)) {
        setTempSelected(tempSelected.filter((v) => v !== value))
      } else {
        if (tempSelected.length < maxSelect) {
          setTempSelected([...tempSelected, value])
        } else {
          alert(`Bạn chỉ được chọn tối đa ${maxSelect} mục!`)
        }
      }
    }
  }

  const handleConfirm = () => {
    setSelectedValues(tempSelected)
    setIsOpen(false)
    onChange?.(tempSelected)
  }

  const handleOpen = () => {
    setTempSelected(selectedValues)
    setSearchTerm('')
    setIsOpen(true)
  }

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div
        className={`border rounded-xl px-4 py-2  cursor-pointer w-full flex justify-between bg-white items-center gap-2 min-h-12 z-50 ${className}`}
        onClick={handleOpen}
      >
        <div>
          {selectedValues.length > 0 ? (
            options
              .filter((opt) => selectedValues.includes(opt.value))
              .map((opt) => opt.label)
              .join(', ')
          ) : (
            <span className='text-color-2'>{placeholder}</span>
          )}
        </div>
        <ChevronDown />
      </div>

      <SheetPortal
        visible={isOpen}
        height='85%'
        onClose={() => setIsOpen(false)}
      >
        <div className='flex flex-col h-full pb-4'>
          <div className='flex justify-between p-4 pb-2'>
            <h2 className='text-lg font-bold'>{title}</h2>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          {showSearch && (
            <div className='px-4 pb-2'>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Tìm kiếm...'
                className='w-full border rounded-lg px-3 py-2 focus:outline-color-1 focus:outline focus:outline-2'
              />
            </div>
          )}

          <div className='flex-1 overflow-y-auto px-4 space-y-3'>
            {filteredOptions.map((opt, index) => {
              const checked =
                maxSelect === 1
                  ? selectedValues.includes(opt.value)
                  : tempSelected.includes(opt.value)

              return (
                <div
                  key={index}
                  onClick={() => handleToggle(opt.value)}
                  className='flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition'
                >
                  <span
                    className={`text-base ${
                      checked ? 'text-color-1 font-medium' : 'text-black'
                    }`}
                  >
                    {opt.label}
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

            {filteredOptions.length === 0 && (
              <p className='text-center text-sm text-gray-500 py-4'>
                Không tìm thấy kết quả
              </p>
            )}
          </div>

          {maxSelect > 1 && (
            <div className='px-4 pb-8 py-4 border-t bg-white'>
              <button
                onClick={handleConfirm}
                className='w-full py-3 bg-color-1 text-white font-semibold rounded-lg'
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

export default SelectInput
