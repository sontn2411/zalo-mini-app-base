import { useState } from 'react'
import { Sheet } from 'zmp-ui'

const PrivacyPolicySheet = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span
        className='text-color-1 hover:underline cursor-pointer'
        onClick={() => setOpen(true)}
      >
        Quy định bảo mật
      </span>

      <Sheet
        visible={open}
        onClose={() => setOpen(false)}
        title='Quy định bảo mật'
      >
        <div className='p-4 text-sm text-gray-700 space-y-2'>
          <p>
            Đây là nội dung Quy định bảo mật. Bạn có thể mô tả chính sách bảo
            mật, cách thu thập và xử lý dữ liệu cá nhân tại đây.
          </p>
          <p>
            Nội dung có thể dài, vì vậy Sheet rất phù hợp để hiển thị dưới dạng
            popup trượt từ dưới lên.
          </p>
        </div>
      </Sheet>
    </>
  )
}

const TermsSheet = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span
        className='text-color-1 hover:underline cursor-pointer'
        onClick={() => setOpen(true)}
      >
        Thỏa thuận sử dụng
      </span>

      <Sheet
        visible={open}
        onClose={() => setOpen(false)}
        title='Thỏa thuận sử dụng'
      >
        <div className='p-4 text-sm text-gray-700 space-y-2'>
          <p>
            Đây là nội dung Thỏa thuận sử dụng. Bạn có thể mô tả điều khoản,
            quyền và nghĩa vụ của người dùng.
          </p>
          <p>Người dùng cần đọc kỹ để đồng ý trước khi tiếp tục.</p>
        </div>
      </Sheet>
    </>
  )
}

const TermsConditionBusiness = () => {
  return (
    <div className='flex items-start space-x-2 mb-4'>
      <input
        id='agreement'
        type='checkbox'
        className='mt-1 h-4 w-4 rounded border-gray-300 text-color-1 focus:ring-color-1'
      />
      <label htmlFor='agreement' className='text-sm text-gray-700 leading-5'>
        Tôi đã đọc và đồng ý với các <PrivacyPolicySheet /> và <TermsSheet />
      </label>
    </div>
  )
}

export default TermsConditionBusiness
