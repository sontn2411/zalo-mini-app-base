import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  Eye,
  GraduationCap,
  MapPin,
  Target,
  Timer,
  UserCheck,
  Users,
} from 'lucide-react'
import InfoCard from './infoCard'
import CustomTabs from '@/components/shared/customTabs'
import { useParams } from 'react-router-dom'
import { useDataJobDetail } from '@/api/query/jobs'
import SkeletonDetail from './skeletonDetail'
import he from 'he'

const PageNotFound = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
    <h2 className='text-2xl font-bold text-gray-800 mb-2'>
      Không tìm thấy công việc
    </h2>
    <p className='text-gray-500 mb-4'>
      Công việc bạn đang tìm không tồn tại hoặc đã bị xoá.
    </p>
    <a
      href='/'
      className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
    >
      Quay lại trang chủ
    </a>
  </div>
)

const JobDetail = () => {
  const { id } = useParams()
  if (!id) return null

  const { data, isLoading } = useDataJobDetail(id)
  const job = data?.Data?.Data

  if (isLoading) {
    return <SkeletonDetail />
  }

  if (!job) {
    return <PageNotFound />
  }

  const {
    thumbnail,
    title,
    companyname,
    salary,
    position,
    degreerequired,
    experience,
    gender,
    job: industry,
    publishdate,
    viewcount,
    deadline,
    location,
    numofrecruitment,
    workingtime,
    summary,
    jobrequirements,
    benefits,
    companyaddress,
    companyscale,
  } = job

  const infoCards = [
    location && { icon: MapPin, title: 'Địa điểm', value: location },
    salary && { icon: DollarSign, title: 'Mức lương', value: salary },
    deadline && { icon: Clock, title: 'Hạn nộp', value: deadline },
    numofrecruitment && {
      icon: Users,
      title: 'Số lượng tuyển',
      value: `${numofrecruitment} người`,
    },
    position && { icon: Building2, title: 'Cấp bậc', value: position },
  ].filter(Boolean)

  return (
    <div>
      <div className='bg-white p-4 mb-4 flex items-start space-x-4'>
        <div className='w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-100'>
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title || 'Logo công ty'}
              className='w-full h-full object-cover'
            />
          ) : (
            <Building2 className='w-8 h-8 text-white' />
          )}
        </div>
        <div className='flex-1'>
          <h2 className='text-lg font-bold text-gray-900'>{title}</h2>
          <p className='text-gray-600 text-sm mb-2'>{companyname}</p>
          <div className='flex items-center space-x-4 text-xs text-gray-500'>
            {viewcount && (
              <span className='flex items-center'>
                <Eye className='w-3 h-3 mr-1' /> {viewcount} lượt xem
              </span>
            )}
            {publishdate && (
              <span className='flex items-center'>
                <Calendar className='w-3 h-3 mr-1' /> Đăng {publishdate}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='px-4 mb-4 grid grid-cols-2 gap-3'>
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className={card.title === 'Địa điểm' ? 'col-span-2' : ''}
          >
            <InfoCard icon={card.icon} title={card.title} value={card.value} />
          </div>
        ))}
      </div>

      <div className=' mb-4'>
        <CustomTabs
          tabs={[
            {
              key: 'job',
              label: 'Nội dung công việc',
              content: (
                <>
                  <div className='bg-white p-4 mb-4 space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                      {position && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>Cấp bậc</p>
                          <div className='flex items-center'>
                            <Briefcase className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {position}
                            </p>
                          </div>
                        </div>
                      )}
                      {degreerequired && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>Trình độ</p>
                          <div className='flex items-center'>
                            <GraduationCap className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {degreerequired}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      {experience && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Kinh nghiệm
                          </p>
                          <div className='flex items-center'>
                            <Award className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {experience}
                            </p>
                          </div>
                        </div>
                      )}
                      {gender && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Giới tính
                          </p>
                          <div className='flex items-center'>
                            <UserCheck className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {gender}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    {workingtime && (
                      <div>
                        <p className='text-xs text-gray-500 mb-1'>
                          Thời gian làm việc
                        </p>
                        <div className='flex items-center'>
                          <Timer className='w-4 h-4 text-gray-400 mr-2' />
                          <p className='text-sm font-medium text-gray-900'>
                            {workingtime}
                          </p>
                        </div>
                      </div>
                    )}
                    {industry && (
                      <div>
                        <p className='text-xs text-gray-500 mb-1'>Ngành nghề</p>
                        <div className='flex items-center'>
                          <Target className='w-4 h-4 text-gray-400 mr-2' />
                          <p className='text-sm font-medium text-gray-900'>
                            {industry}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {summary && (
                    <div className='bg-white p-4 mb-4'>
                      <h3 className='text-lg font-bold text-gray-900 mb-4'>
                        Mô tả công việc
                      </h3>
                      <div
                        className='text-sm text-gray-700 leading-relaxed'
                        dangerouslySetInnerHTML={{ __html: he.decode(summary) }}
                      />
                    </div>
                  )}
                  {jobrequirements && (
                    <div className='bg-white p-4 mb-4'>
                      <h3 className='text-lg font-bold text-gray-900 mb-4'>
                        Yêu cầu công việc
                      </h3>
                      <div
                        className='text-sm text-gray-700 leading-relaxed'
                        dangerouslySetInnerHTML={{
                          __html: he.decode(jobrequirements),
                        }}
                      />
                    </div>
                  )}
                  {benefits && (
                    <div className='bg-white p-4 mb-4'>
                      <h3 className='text-lg font-bold text-gray-900 mb-4'>
                        Quyền lợi được hưởng
                      </h3>
                      <div
                        className='text-sm text-gray-700 leading-relaxed'
                        dangerouslySetInnerHTML={{
                          __html: he.decode(benefits),
                        }}
                      />
                    </div>
                  )}
                </>
              ),
            },
            {
              key: 'company',
              label: 'Thông tin công ty',
              content: (
                <div className='bg-white p-4 mb-20 space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden'>
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={companyname || 'Logo công ty'}
                          className='w-full h-full object-cover'
                        />
                      ) : (
                        <Building2 className='w-6 h-6 text-gray-600' />
                      )}
                    </div>
                    <h4 className='font-semibold text-gray-900'>
                      {companyname}
                    </h4>
                  </div>

                  {companyscale && (
                    <div>
                      <p className='text-xs text-gray-500 mb-1'>Quy mô</p>
                      <p className='text-sm font-medium text-gray-900'>
                        {companyscale}
                      </p>
                    </div>
                  )}

                  {companyaddress && (
                    <div className='flex items-start space-x-2'>
                      <MapPin className='w-4 h-4 text-gray-400 mt-0.5' />
                      <p className='text-sm text-gray-700'>{companyaddress}</p>
                    </div>
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

export default JobDetail
