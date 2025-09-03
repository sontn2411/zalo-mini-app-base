import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  Eye,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Target,
  Timer,
  UserCheck,
  Users,
} from 'lucide-react'
import InfoCard from './infoCard'
import CustomTabs from '@/components/shared/customTabs'

const jobData = {
  position: 'Nhân viên Kế toán Tổng hợp',
  company: 'Công ty TNHH Kỹ thuật Khánh Hòa',
  education: 'Đại học',
  salary: '10-15 triệu VNĐ',
  location: 'Nam Nha Trang, Khánh Hòa',
  deadline: '30/09/2025',
  totalViews: 47,
  postingDate: '15/08/2025',
  jobLevel: 'Nhân viên',
  genderRequirement: 'Không yêu cầu',
  numberOfHires: 2,
  workingHours: '8:00 - 17:00 (Thứ 2 - Thứ 6)',
  degreeRequirement: 'Cử nhân Kế toán hoặc tương đương',
  experienceRequirement: '1-3 năm kinh nghiệm',
  industry: 'Kế toán - Kiểm toán',
  urgentHiring: true,
  employerInfo: {
    name: 'Công ty TNHH Kỹ thuật Khánh Hòa',
    type: 'Công ty TNHH',
    size: '50-100 nhân viên',
    website: 'www.ktkhanhoa.com.vn',
    phone: '0258.123.456',
    email: 'hr@ktkhanhoa.com.vn',
    address: '123 Trần Phú, Vĩnh Hải, TP. Nha Trang',
    established: '2018',
    description:
      'Chuyên cung cấp dịch vụ kỹ thuật và tư vấn trong lĩnh vực xây dựng',
  },
  jobDescription: [
    'Thực hiện công tác kế toán tổng hợp cho công ty',
    'Lập báo cáo tài chính hàng tháng, quý, năm',
    'Theo dõi và kiểm soát các khoản thu chi',
    'Lập hồ sơ thanh quyết toán thuế',
    'Phối hợp với các bộ phận khác trong công ty',
  ],
  requirements: [
    'Tốt nghiệp Đại học chuyên ngành Kế toán',
    'Có 1-3 năm kinh nghiệm làm việc',
    'Thành thạo Excel, Word và phần mềm kế toán',
    'Có chứng chỉ hành nghề kế toán là lợi thế',
    'Tỉ mỉ, cẩn thận trong công việc',
  ],
  benefits: [
    'Lương cơ bản + phụ cấp + thưởng',
    'Bảo hiểm xã hội, y tế đầy đủ',
    'Thưởng tháng 13, thưởng hiệu suất',
    '12 ngày phép/năm',
    'Đào tạo nâng cao kỹ năng',
    'Môi trường làm việc thân thiện',
  ],
}

const JobDetail = () => {
  return (
    <div>
      <div className='bg-white p-4 mb-4'>
        <div className='flex items-start space-x-4'>
          <div className='w-16 h-16 bg-color-1 rounded-2xl flex items-center justify-center'>
            <Building2 className='w-8 h-8 text-white' />
          </div>
          <div className='flex-1'>
            <div className='flex items-center space-x-2 mb-1'>
              <h2 className='text-lg font-bold text-gray-900'>
                {jobData.position}
              </h2>
            </div>
            <p className='text-gray-600 text-sm mb-2'>{jobData.company}</p>
            <div className='flex items-center space-x-4 text-xs text-gray-500'>
              <span className='flex items-center'>
                <Eye className='w-3 h-3 mr-1' />
                {jobData.totalViews} lượt xem
              </span>
              <span className='flex items-center'>
                <Calendar className='w-3 h-3 mr-1' />
                Đăng {jobData.postingDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 mb-4'>
        <div className='grid grid-cols-2 gap-3'>
          <div className='col-span-2'>
            <InfoCard icon={MapPin} title='Địa điểm' value={jobData.location} />
          </div>
          <InfoCard
            icon={DollarSign}
            title='Mức lương'
            value={jobData.salary}
          />
          <InfoCard icon={Clock} title='Hạn nộp' value={jobData.deadline} />
          <InfoCard
            icon={Users}
            title='Số lượng tuyển'
            value={`${jobData.numberOfHires} người`}
          />
          <InfoCard icon={Building2} title='Cấp bậc' value={jobData.jobLevel} />
        </div>
      </div>
      <div className='px-4 mb-4'>
        <CustomTabs
          tabs={[
            {
              key: 'job',
              label: 'Nội dung công việc',
              content: (
                <>
                  <div className='bg-white p-4 mb-4'>
                    <div className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>Cấp bậc</p>
                          <div className='flex items-center'>
                            <Briefcase className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {jobData.jobLevel}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>Trình độ</p>
                          <div className='flex items-center'>
                            <GraduationCap className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {jobData.education}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Kinh nghiệm
                          </p>
                          <div className='flex items-center'>
                            <Award className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {jobData.experienceRequirement}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className='text-xs text-gray-500 mb-1'>
                            Giới tính
                          </p>
                          <div className='flex items-center'>
                            <UserCheck className='w-4 h-4 text-gray-400 mr-2' />
                            <p className='text-sm font-medium text-gray-900'>
                              {jobData.genderRequirement}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className='text-xs text-gray-500 mb-1'>
                          Thời gian làm việc
                        </p>
                        <div className='flex items-center'>
                          <Timer className='w-4 h-4 text-gray-400 mr-2' />
                          <p className='text-sm font-medium text-gray-900'>
                            {jobData.workingHours}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className='text-xs text-gray-500 mb-1'>Ngành nghề</p>
                        <div className='flex items-center'>
                          <Target className='w-4 h-4 text-gray-400 mr-2' />
                          <p className='text-sm font-medium text-gray-900'>
                            {jobData.industry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white p-4 mb-4'>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>
                      Mô tả công việc
                    </h3>
                    <ul className='space-y-2'>
                      {jobData.jobDescription.map((desc, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='w-2 h-2 bg-color-1 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                          <p className='text-sm text-gray-700 leading-relaxed'>
                            {desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='bg-white p-4 mb-4'>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>
                      Yêu cầu công việc
                    </h3>
                    <ul className='space-y-2'>
                      {jobData.requirements.map((req, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='w-2 h-2 bg-color-4 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                          <p className='text-sm text-gray-700 leading-relaxed'>
                            {req}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='bg-white p-4 mb-4'>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>
                      Quyền lợi được hưởng
                    </h3>
                    <ul className='space-y-2'>
                      {jobData.benefits.map((benefit, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='w-2 h-2 bg-color-3 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                          <p className='text-sm text-gray-700 leading-relaxed'>
                            {benefit}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ),
            },
            {
              key: 'company',
              label: 'Thông tin công ty',
              content: (
                <div className='bg-white p-4 mb-20'>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center'>
                        <Building2 className='w-6 h-6 text-gray-600' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-gray-900'>
                          {jobData.employerInfo.name}
                        </h4>
                        <p className='text-sm text-gray-600'>
                          {jobData.employerInfo.type}
                        </p>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <p className='text-xs text-gray-500 mb-1'>Quy mô</p>
                        <p className='text-sm font-medium text-gray-900'>
                          {jobData.employerInfo.size}
                        </p>
                      </div>
                      <div>
                        <p className='text-xs text-gray-500 mb-1'>Thành lập</p>
                        <p className='text-sm font-medium text-gray-900'>
                          {jobData.employerInfo.established}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className='text-xs text-gray-500 mb-1'>
                        Mô tả công ty
                      </p>
                      <p className='text-sm text-gray-700 leading-relaxed'>
                        {jobData.employerInfo.description}
                      </p>
                    </div>

                    <div className='space-y-2'>
                      <div className='flex items-center space-x-2'>
                        <Phone className='w-4 h-4 text-gray-400' />
                        <p className='text-sm text-gray-700'>
                          {jobData.employerInfo.phone}
                        </p>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Mail className='w-4 h-4 text-gray-400' />
                        <p className='text-sm text-gray-700'>
                          {jobData.employerInfo.email}
                        </p>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Globe className='w-4 h-4 text-gray-400' />
                        <p className='text-sm text-blue-600'>
                          {jobData.employerInfo.website}
                        </p>
                      </div>
                      <div className='flex items-start space-x-2'>
                        <MapPin className='w-4 h-4 text-gray-400 mt-0.5' />
                        <p className='text-sm text-gray-700'>
                          {jobData.employerInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
      ;
    </div>
  )
}

export default JobDetail
