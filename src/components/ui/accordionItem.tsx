import { useState, ReactNode } from 'react'
import { ChevronDown, User } from 'lucide-react'

interface AccordionItemProps {
  title: string
  children: ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-white rounded-2xl px-4 shadow-sm border border-gray-100'>
      <button
        onClick={() => setOpen(!open)}
        className='flex justify-between items-center w-full py-3 text-left '
      >
        <div className='flex items-center mb-4 gap-2'>
          <div className='p-2 bg-blue-50 rounded-xl'>
            <User size={20} className='text-color-1' />
          </div>
          <span className='font-medium'>{title}</span>
        </div>

        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className='pb-3 text-gray-600'>{children}</div>}
    </div>
  )
}

export default AccordionItem
