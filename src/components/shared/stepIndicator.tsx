import { CheckCircle } from 'lucide-react'

interface StepItem {
  title: string
  description: string
}

interface StepIndicatorProps {
  steps: StepItem[]
  currentStep: number
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className=''>
      <div className='flex items-center justify-center mb-4'>
        {steps.map((_, index) => (
          <div key={index} className='flex items-center'>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                currentStep > index + 1
                  ? 'bg-color-4 text-white'
                  : currentStep === index + 1
                  ? 'bg-color-1 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {currentStep > index + 1 ? (
                <CheckCircle className='w-5 h-5' />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                  currentStep > index + 1 ? 'bg-color-4' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className='text-center mb-4'>
        <h2 className='text-xl font-bold text-gray-900 mb-2'>
          {steps[currentStep - 1].title}
        </h2>
        <p className='text-gray-600 text-sm'>
          {steps[currentStep - 1].description}
        </p>
      </div>
    </div>
  )
}

export default StepIndicator
