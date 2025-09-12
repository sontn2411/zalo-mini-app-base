import { useEffect, useState } from 'react'
import { getSetting } from 'zmp-sdk/apis'

const useSettingUser = () => {
  const [scope, setScope] = useState<{ info: boolean; phoneNumber: boolean }>({
    info: false,
    phoneNumber: false,
  })

  useEffect(() => {
    const fetchDataSetting = async () => {
      const { authSetting } = await getSetting()
      setScope({
        info: authSetting['scope.userInfo'] || false,
        phoneNumber: authSetting['scope.userPhonenumber'] || false,
      })
      return authSetting
    }

    fetchDataSetting()
  }, [])

  return scope
}

export default useSettingUser
