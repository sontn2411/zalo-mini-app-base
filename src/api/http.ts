import { KEYSTORAGE } from '@/constants/message'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { nativeStorage } from 'zmp-sdk/apis'

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })
  failedQueue = []
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ✅ axios-retry config
axiosRetry(instance, {
  retries: 1,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) => {
    const status = error?.response?.status
    const data = error?.response?.data as
      | { StatusResult?: { Code?: number } }
      | undefined

    if (status === 400) {
      if (data?.StatusResult?.Code === 33) {
        return false
      }
      return false
    }

    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      (status !== undefined && status >= 500)
    )
  },
})

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = nativeStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            return instance(originalRequest)
          })
          .catch((err) => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refreshToken = nativeStorage.getItem(KEYSTORAGE.REFRESHTOKEN)
        const accessToken = nativeStorage.getItem(KEYSTORAGE.ACCESSTOKEN)
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/RefreshToken`,
          { RefreshToken: refreshToken },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )

        const newAccessToken = res.data.Data.AccessToken
        const newRefToken = res.data.Data.RefreshToken
        nativeStorage.setItem(KEYSTORAGE.ACCESSTOKEN, newAccessToken)
        nativeStorage.setItem(KEYSTORAGE.REFRESHTOKEN, newRefToken)

        instance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
        processQueue(null, newAccessToken)

        return instance(originalRequest)
      } catch (err) {
        processQueue(err, null)
        nativeStorage.removeItem(KEYSTORAGE.ACCESSTOKEN)
        nativeStorage.removeItem(KEYSTORAGE.REFRESHTOKEN)
        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default instance
