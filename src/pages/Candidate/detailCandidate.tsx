import { useCandidateDetail } from '@/api/query/candidate'
import {
  User2,
  Eye,
  IdCard,
  Cake,
  Flag,
  VenusAndMars,
  MapPin,
  Mail,
  User,
  GraduationCap,
  Briefcase,
  Target,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import CandidateSkeleton from './candidateSkeleton'
import { noAvatar } from '@/static'

const DetailCandidate = () => {
  const { id } = useParams()
  if (!id) return null

  const { data, isLoading } = useCandidateDetail(id)

  const candidate = data?.Data?.Data

  if (isLoading) {
    return <CandidateSkeleton />
  }

  if (!candidate) {
    return <div className='p-4 text-center'>Không tìm thấy ứng viên</div>
  }

  return (
    <div className='py-4 mb-4 rounded-2xl space-y-6'>
      {/* Header */}
      <div className='flex items-start space-x-4 px-4'>
        <div className='w-16 h-16 bg-color-1  flex rounded-md items-center justify-center overflow-hidden'>
          <img
            src={candidate.thumbnail || noAvatar}
            alt={candidate.fullname}
            className='w-full h-full object-cover rounded-md '
            onError={(e) => {
              e.currentTarget.src = noAvatar
            }}
          />
        </div>
        <div className='flex-1'>
          <h2 className='text-lg font-bold text-gray-900'>
            {candidate.fullname}
          </h2>
          {candidate.cid && (
            <div className='flex items-center gap-2 mb-1'>
              <IdCard className='text-gray-500 w-5 h-5' />
              <span className='text-sm font-medium text-gray-600'>
                {candidate.cid}
              </span>
            </div>
          )}
          <div className='flex items-center flex-wrap gap-4 text-xs text-gray-500'>
            <span className='flex items-center gap-1'>
              <Eye className='w-4 h-4' />
              {candidate.viewcount} lượt xem
            </span>
            {candidate.gender && (
              <span className='flex items-center gap-1'>
                <VenusAndMars className='w-4 h-4' />
                {candidate.gender}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='space-y-4 bg-white p-4'>
        <h3 className='text-sm font-semibold text-gray-700 uppercase relative flex'>
          Ngành nghề
          <span className='absolute -bottom-1 h-0.5 w-28 bg-color-1'></span>
        </h3>
        <div className='space-y-4 bg-white'>
          <div>
            <p className='text-xs text-gray-500 mb-1'>Ngành nghề</p>
            <div className='flex items-center'>
              <Target className='w-4 h-4 text-gray-400 mr-2' />
              <p className='text-sm font-medium text-gray-900'>
                {candidate.job && candidate.job.length > 0
                  ? [...new Set(candidate.job as string[])].join(', ')
                  : 'Chưa cập nhật'}
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-xs text-gray-500 mb-1'>Trình độ học vấn</p>
              <div className='flex items-center'>
                <GraduationCap className='w-4 h-4 text-gray-400 mr-2' />
                <p className='text-sm font-medium text-gray-900'>
                  {candidate.traininglevel || 'Chưa cập nhật'}
                </p>
              </div>
            </div>
            <div>
              <p className='text-xs text-gray-500 mb-1'>Kinh nghiệm</p>
              <div className='flex items-center'>
                <Briefcase className='w-4 h-4 text-gray-400 mr-2' />
                <p className='text-sm font-medium text-gray-900'>
                  {candidate.experience || 'Chưa có kinh nghiệm'}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className='text-xs text-gray-500 mb-1'>Địa chỉ làm việc</p>
            <div className='flex items-center'>
              <MapPin className='w-4 h-4 text-gray-400 mr-2' />
              <p className='text-sm font-medium text-gray-900'>
                {candidate.locationjob || 'Chưa cập nhật'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thông tin chung */}
      <div className='space-y-4 p-4 bg-white'>
        <h3 className='text-sm font-semibold text-gray-700 uppercase relative'>
          Thông tin chung
          <span className='absolute -bottom-1 left-0 h-0.5 w-36 bg-color-1'></span>
        </h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-xs text-gray-500 mb-1'>Ngày sinh</p>
            <div className='flex items-center'>
              <Cake className='w-4 h-4 text-gray-400 mr-2' />
              <p className='text-sm font-medium text-gray-900'>
                {candidate.birthdate || 'Chưa cập nhật'}
              </p>
            </div>
          </div>
          <div>
            <p className='text-xs text-gray-500 mb-1'>Tuổi</p>
            <div className='flex items-center'>
              <User className='w-4 h-4 text-gray-400 mr-2' />
              <p className='text-sm font-medium text-gray-900'>
                {candidate.age || 'Chưa cập nhật'}
              </p>
            </div>
          </div>
          <div>
            <p className='text-xs text-gray-500 mb-1'>Email</p>
            <div className='flex items-center'>
              <Mail className='w-4 h-4 text-gray-400 mr-2' />
              <p className='text-sm font-medium text-gray-900'>
                {candidate.email || 'Chưa cập nhật'}
              </p>
            </div>
          </div>

          <div>
            <p className='text-xs text-gray-500 mb-1'>Dân tộc</p>
            <div className='flex items-center'>
              <Flag className='w-4 h-4 text-gray-400 mr-2' />
              <p className='text-sm font-medium text-gray-900'>
                {candidate.ethnicity || 'Chưa cập nhật'}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className='text-xs text-gray-500 mb-1'>Địa chỉ</p>
          <div className='flex items-center'>
            <MapPin className='w-4 h-4 text-gray-400 mr-2' />
            <p className='text-sm font-medium text-gray-900'>
              {candidate.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCandidate
