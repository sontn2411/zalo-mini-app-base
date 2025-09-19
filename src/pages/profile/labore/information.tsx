import InputCustom from '@/components/ui/inputCustom'
import InputEditable from '../inputEdit'
import {
  AlertCircle,
  Award,
  Building2,
  Calendar,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
  UserRound,
} from 'lucide-react'
import ProfileField from '../profileField'
import { Controller, useForm } from 'react-hook-form'
import SheetDate from '@/components/shared/form/sheetDate'
import { zodResolver } from '@hookform/resolvers/zod'
import { createRegisterPersonSchema } from '@/schemas/registerSchema'
import z from 'zod'
import GenderField from '@/components/shared/form/genderField'
import SelectInput from '@/components/shared/form/selectInput'
import useSettingStore from '@/store/useSetting'
import ProfilePerson from '../profilePerson'

const defaultValues = {
  job: ['Lập trình viên Frontend', 'UI/UX Designer'],
  gender: 'Nam',
  birthday: '1998-05-20',
  ethnicity: 'Kinh',
  fullName: 'Nguyễn Văn A',
  phone: '0912345678',
  email: 'nguyenvana@example.com',
  address: '123 Lê Lợi, Quận 1, TP.HCM',
  idCard: '079123456789',
  dateIdCard: '2016/08/12',
  addressIdCar: 'Công an TP.HCM',
  graduationSchool: 'ĐH Khoa học Tự nhiên',
  major: 'Công nghệ thông tin',
  educationLevel: 'Đại học',
  study: 'Thạc sĩ Khoa học máy tính',
}

const Information = () => {
  const { ListEthnicity } = useSettingStore()

  const maxJob = 5
  const schema = createRegisterPersonSchema(maxJob)

  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  })
  return (
    <div className='pb-6'>
      <ProfilePerson />
    </div>
  )
}

export default Information
