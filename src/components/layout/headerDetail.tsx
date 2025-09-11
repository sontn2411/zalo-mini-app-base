import { To, useNavigate } from 'react-router-dom'
import IconUI from '../ui/iconUi'

const HeaderDetail = () => {
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate(-1 as To, {
      viewTransition: true,
    })
  }

  return (
    <div className='flex-none w-full min-h-24 flex  gap-2  px-4 pt-st pb-2  '>
      <button onClick={handlePrev}>
        <IconUI icon='previous' className='w-5 h-5' />
      </button>
    </div>
  )
}

export default HeaderDetail
