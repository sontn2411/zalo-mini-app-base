import { useEffect, useState } from 'react'
import { getUserInfo } from 'zmp-sdk/apis'

type AppInfo = {
  appName: string
  appId: string
  version: string
  [key: string]: any
}

export function useUserInfo() {
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const data = async () => {
      const { userInfo } = await getUserInfo({
        autoRequestPermission: true,
      })
      console.log('======', userInfo)
    }
    data()
  }, [])

  return { appInfo, loading, error }
}
