import { useEffect, useState } from 'react'
import { AppError, authorize } from 'zmp-sdk'

const useAuthorize = () => {
  const [socpe, setScope] = useState<{
    userInfo: boolean
    phoneNumber: boolean
  }>({
    userInfo: false,
    phoneNumber: false,
  })

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const data = await authorize({
          scopes: ['scope.userInfo', 'scope.userPhonenumber'],
        })
        setScope({
          userInfo: data['scope.userInfo'] || false,
          phoneNumber: data['scope.userPhonenumber'] || false,
        })
      } catch (error) {
        const code = (error as AppError).code
        if (code === -201) {
          console.log('Người dùng đã từ chối cấp quyền')
        } else {
          console.log('Lỗi khác')
        }
      }

      fetchAuth()
    }
  }, [])

  return socpe
}

export default useAuthorize
