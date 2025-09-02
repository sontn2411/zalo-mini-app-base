import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { Sheet } from 'zmp-ui'

interface SelectInputProps {
  options: string[] // danh sách lựa chọn
  maxSelect?: number // số lượng chọn tối đa (mặc định 2)
  title?: string // tiêu đề hiển thị trong Sheet
  placeholder?: string // text khi chưa chọn
  onChange?: (values: string[]) => void // callback trả về giá trị đã chọn
}

const SelectInput = ({
  options,
  maxSelect = 2,
  title = 'Chọn mục',
  placeholder = 'Chọn',
  onChange,
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [tempSelected, setTempSelected] = useState<string[]>([])

  const handleToggle = (item: string) => {
    if (maxSelect === 1) {
      setSelectedValues([item])
      onChange?.([item])
      setIsOpen(false)
    } else {
      if (tempSelected.includes(item)) {
        setTempSelected(tempSelected.filter((j) => j !== item))
      } else {
        if (tempSelected.length < maxSelect) {
          setTempSelected([...tempSelected, item])
        } else {
          alert(`Bạn chỉ được chọn tối đa ${maxSelect} mục!`)
        }
      }
    }
  }

  const handleConfirm = () => {
    setSelectedValues(tempSelected)
    setIsOpen(false)
    onChange?.(tempSelected) // gọi callback nếu có
  }

  const handleOpen = () => {
    setTempSelected(selectedValues)
    setIsOpen(true)
  }

  return (
    <div>
      <div
        className='border rounded-lg px-4 py-2 cursor-pointer w-full flex justify-between items-center gap-2 min-h-12 '
        onClick={handleOpen}
      >
        <div>
          {selectedValues.length > 0 ? (
            selectedValues.join(', ')
          ) : (
            <span className='text-color-2'>{placeholder}</span>
          )}
        </div>
        <ChevronDown />
      </div>

      <Sheet
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        autoHeight={false}
        height='85%'
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between p-4 pb-2'>
            <h2 className='text-lg font-bold '>{title}</h2>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
              }}
            >
              <X />
            </button>
          </div>

          <div className='flex-1 overflow-y-auto px-4 space-y-3'>
            {options.map((item, index) => {
              const checked =
                maxSelect === 1
                  ? selectedValues.includes(item)
                  : tempSelected.includes(item)

              return (
                <div
                  key={index}
                  onClick={() => handleToggle(item)}
                  className='flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition'
                >
                  <span
                    className={`text-base ${
                      checked ? 'text-color-1 font-medium' : 'text-black'
                    }`}
                  >
                    {item}
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

          {maxSelect > 1 && (
            <div className='px-4 pb-8 py-4 border-t bg-white'>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleConfirm()
                }}
                className='w-full py-3 bg-color-1 text-white font-semibold rounded-lg'
              >
                Xác nhận
              </button>
            </div>
          )}
        </div>
      </Sheet>
    </div>
  )
}

export default SelectInput
