import { useState } from 'react'
import { toast } from 'react-toastify'
import { useForm, Controller, FieldErrors } from 'react-hook-form'
import { insertZmpLinkedAccount } from '@/api/query/auth'
import InputCustom from '@/components/ui/inputCustom'
import { Mail } from 'lucide-react'
import { Button } from 'zmp-ui'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { getAccessToken, getPhoneNumber, getUserID } from 'zmp-sdk'
import { useLoadingGlobal } from '@/store/useLoadingGlobal'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const ZaloLinkModal = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate()
  const { setIsLoadingGlobal } = useLoadingGlobal()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: { email: '' },
  })

  const zmpLinkedAccount = insertZmpLinkedAccount()

  const onSubmit = async (data: { email: string }) => {
    try {
      const { token } = await getPhoneNumber()
      const accessToken = await getAccessToken()
      const userID = await getUserID()
      if (token && accessToken && userID) {
        setIsLoadingGlobal(true)
        const payload = {
          Accesstoken: accessToken,
          Code: token,
          ZaloId: userID,
          Email: data.email,
        }

        zmpLinkedAccount.mutate(payload, {
          onSuccess: (res) => {
            setIsLoadingGlobal(false)
            const { StatusResult } = res
            console.log('res', res)
            if (StatusResult.Code == 0) {
              navigate(ROUTES.RESULTSZMLINK, {
                state: { email: data.email, results: 'success' },
              })
            } else {
              navigate(ROUTES.RESULTSZMLINK, {
                state: { email: data.email, results: 'falied' },
              })
            }
          },
          onError: (error) => {
            setIsLoadingGlobal(false)
            toast.error('Liên kết thất bại, vui lòng thử lại!')
          },
        })
      } else {
        setIsLoadingGlobal(false)
        toast.error('Liên kết thất bại, vui lòng thử lại!')
      }
      // const res = await zmpLinkedAccount.mutateAsync({ email: data.email })
      // if (res.success) {
      //   toast.success('Liên kết thành công với Zalo!')
      //   onClose()
      //   reset()
      // } else {
      //   toast.error(res.message || 'Liên kết thất bại, vui lòng thử lại!')
      // }
    } catch (error) {
      toast.error('Đã xảy ra lỗi, vui lòng thử lại!')
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-white rounded-xl p-6 w-[320px] space-y-4'>
        <h3 className='text-lg font-semibold text-gray-900'>
          Liên kết tài khoản Zalo
        </h3>
        <p className='text-sm text-gray-500'>
          Nhập email để đồng bộ dữ liệu với Zalo
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Email là bắt buộc',
              pattern: { value: /\S+@\S+\.\S+/, message: 'Email không hợp lệ' },
            }}
            render={({ field }) => (
              <InputCustom
                label='Email'
                type='email'
                placeholder='Nhập email'
                icon={Mail}
                {...field}
                error={errors.email?.message}
              />
            )}
          />

          <div className='flex justify-start gap-2 pt-2'>
            <Button
              htmlType='submit'
              className='px-3 py-1 rounded-lg bg-color-1 text-white hover:bg-color-1/90'
            >
              Liên kết
            </Button>

            <Button
              htmlType='button'
              onClick={() => {
                reset()
                onClose()
              }}
              className='px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300'
            >
              Hủy
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ZaloLinkModal
