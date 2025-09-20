import {
  Award,
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
import he from 'he'
import { noCompany } from '@/static'

interface JobDetailContentProps {
  job: any
}

const JobDetailContent = ({ job }: JobDetailContentProps) => {
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
    position && { icon: Building2, title: 'Cấp bậc', value: position },
    salary && { icon: DollarSign, title: 'Mức lương', value: salary },
    numofrecruitment && {
      icon: Users,
      title: 'Số lượng tuyển',
      value: `${numofrecruitment} người`,
    },
    deadline && { icon: Clock, title: 'Ngày hết hạn', value: deadline },
  ].filter(Boolean)

  return (
    <div>
      {/* Header */}
      <div className='flex flex-col bg-white p-4 mb-4'>
        <div className=' flex items-start space-x-4'>
          <div className='w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-100'>
            {thumbnail ? (
              <img
                src={thumbnail || noCompany}
                alt={title || 'Logo công ty'}
                className='w-full h-full object-cover'
                onError={(e) => {
                  e.currentTarget.src = noCompany
                }}
              />
            ) : (
              <Building2 className='w-8 h-8 text-white' />
            )}
          </div>
          <div className='flex-1'>
            <h2 className='text-lg font-bold text-gray-900'>{title}</h2>
            <p className='text-gray-600 text-sm mb-2'>{companyname}</p>
          </div>
        </div>

        <div className='mt-1 space-y-2'>
          <div className='flex items-center text-gray-600 text-sm mb-2'>
            <MapPin className='w-4 h-4 mr-1 text-gray-500' />
            {location}
          </div>
          <div className='flex items-center space-x-4 text-xs text-gray-500'>
            <span className='flex items-center'>
              <Eye className='w-4 h-4 mr-1' /> {viewcount || 0} lượt xem
            </span>

            {publishdate && (
              <span className='flex items-center'>
                <Calendar className='w-4 h-4 mr-1' />
                Ngày đăng {publishdate}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Info cards */}
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

      {/* Tabs */}
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
                      {industry && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Ngành nghề
                          </p>
                          <div className='flex items-center'>
                            <Target className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {industry}
                            </p>
                          </div>
                        </div>
                      )}
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
                      {degreerequired && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Yêu cầu bằng cấp
                          </p>
                          <div className='flex items-center'>
                            <GraduationCap className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {degreerequired}
                            </p>
                          </div>
                        </div>
                      )}
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

                      {deadline && (
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Hạn nộp hồ sơ
                          </p>
                          <div className='flex items-center'>
                            <Calendar className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {deadline}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
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
                          src={thumbnail || noCompany}
                          alt={companyname || 'Logo công ty'}
                          className='w-full h-full object-cover'
                          onError={(e) => {
                            e.currentTarget.src = noCompany
                          }}
                        />
                      ) : (
                        <Building2 className='w-6 h-6 text-gray-600' />
                      )}
                    </div>
                    <h4 className='font-semibold text-gray-900'>
                      {companyname}
                    </h4>
                  </div>

                  <div className='flex gap-6'>
                    {companyscale && (
                      <div>
                        <p className='text-xs text-gray-500 mb-0.5'>Quy mô</p>
                        <p className='text-sm font-medium text-gray-900'>
                          {companyscale}
                        </p>
                      </div>
                    )}

                    {companyaddress && (
                      <div>
                        <p className='text-xs text-gray-500 mb-0.5'>Địa chỉ</p>
                        <p className='text-sm text-gray-700 flex items-center'>
                          <MapPin className='w-4 h-4 mr-1 text-gray-500' />
                          {companyaddress}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

export default JobDetailContent
