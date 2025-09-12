import { useEffect, useState } from 'react'
import { getUserInfo } from 'zmp-sdk/apis'
import { getPhoneNumber } from 'zmp-sdk/apis'
import { getAccessToken } from 'zmp-sdk/apis'
type AppInfo = {
  id: string
  name: string
  avatar: string
  accessToken: string
}

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState<AppInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoading(true)
        setError(null)

        const { userInfo } = await getUserInfo({
          autoRequestPermission: true,
        })

        const accessToken = await getAccessToken()

        setUserInfo({
          id: userInfo.id,
          name: userInfo.name,
          avatar: userInfo.avatar,
          accessToken: accessToken,
        })
      } catch (err: any) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setLoading(false)
      }
    }

    fetchUserInfo()
  }, [])

  return { userInfo, loading, error }
}
