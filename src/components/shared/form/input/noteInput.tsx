import { FileText } from 'lucide-react'

const NoteInput = () => {
  return (
    <div>
      <label className='block text-sm font-semibold text-gray-700 mb-2'>
        <FileText className='w-4 h-4 inline mr-2' />
        Ghi chú thêm
      </label>
      <textarea
        // onChange={(e) => handleInputChange('notes', e.target.value)}
        placeholder='Thông tin bổ sung về bản thân, kỹ năng đặc biệt, mong muốn khác...'
        rows={4}
        className='w-full px-4 py-3 border rounded-xl  transition-all resize-none focus:outline-color-1  focus:outline focus:outline-2'
      />
    </div>
  )
}

export default NoteInput
