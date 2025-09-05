import { Edit3 } from 'lucide-react'

interface ProfileSectionProps {
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  section: string
  children: React.ReactNode
  isEditing?: boolean
  handleSectionEdit: (section: string) => void
  canEdit?: boolean
}

const ProfileSection = ({
  title,
  icon: Icon,
  section,
  children,
  canEdit = true,
  isEditing,
  handleSectionEdit,
}: ProfileSectionProps) => {
  return (
    <div className='bg-white rounded-2xl px-4 py-6 shadow-sm mb-4 transition-all hover:shadow-md mt-6'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-color-5 rounded-xl flex items-center justify-center mr-3'>
            <Icon className='w-5 h-5 text-color-1' />
          </div>
          <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
        </div>
        {canEdit && !isEditing && (
          <div className='flex gap-2'>
            {/* <button
              onClick={() => handleSectionEdit(section)}
              className='w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors'
            >
              <Edit3 className='w-4 h-4 text-gray-600 hover:text-color-1' />
            </button> */}
            <button
              onClick={() => handleSectionEdit(section)}
              className='w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors'
            >
              <Edit3 className='w-4 h-4 text-gray-600 hover:text-color-1' />
            </button>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

export default ProfileSection
