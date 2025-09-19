import { z } from 'zod'

export const JobFormSchema = z.object({
  jobposition: z.string().min(1, 'Vui lòng nhập vị trí tuyển dụng'),
  job: z.string().min(1, 'Vui lòng chọn ngành nghề'),
  position: z.string().min(1, 'Vui lòng chọn vị trí'),
  qualifications: z.string().min(1, 'Vui lòng chọn trình độ'),
  workingtime: z.string().min(1, 'Vui lòng nhập thời gian làm việc'),
  workexperience: z.string().min(1, 'Vui lòng chọn kinh nghiệm'),
  salary: z.string().min(1, 'Vui lòng chọn mức lương'),
  benefits: z.array(z.string().min(1)).min(1, 'Phải có ít nhất một phúc lợi'),
  recruitmentperiod: z.string().min(1, 'Vui lòng chọn thời hạn tuyển'),
  summary: z.string().min(1, 'Vui lòng nhập mô tả ngắn'),
  jobrequirements: z.string().min(1, 'Vui lòng nhập yêu cầu công việc'),
  address: z.string().min(1, 'Vui lòng nhập địa chỉ củ thể'),
  ward: z.array(z.string().min(1)).min(1, 'Vui lòng chọn nơi làm việc'),
  status: z.string(),
  detail: z
    .array(
      z.object({
        gender: z.string().optional(),
        quantity: z.coerce.number().min(1, 'Số lượng phải lớn hơn 0'),
        age: z.string().min(1, 'Vui lòng chọn độ tuổi'),
      })
    )
    .min(1, 'Phải có ít nhất một yêu cầu'),
})

export type JobForm = z.infer<typeof JobFormSchema>
