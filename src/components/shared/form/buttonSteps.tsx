import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

const ButtonNextStep = ({ handleNextStep }: { handleNextStep: () => void }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        handleNextStep()
      }}
      className='flex-1 bg-color-1 w-full text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center'
    >
      Tiếp theo
      <ArrowRight className='w-5 h-5 ml-2' />
    </button>
  )
}

const ButtonPrevStep = ({ handlePrevStep }: { handlePrevStep: () => void }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        handlePrevStep()
      }}
      className='flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center'
    >
      <ArrowLeft className='w-5 h-5 mr-2' />
      Quay lại
    </button>
  )
}

const ButtonCompleted = ({
  hanldeComplete,
}: {
  hanldeComplete: () => void
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        hanldeComplete()
      }}
      className='flex-1 bg-color-1 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center'
    >
      <CheckCircle className='w-5 h-5 mr-2' />
      Hoàn thành
    </button>
  )
}

export { ButtonNextStep, ButtonPrevStep, ButtonCompleted }
