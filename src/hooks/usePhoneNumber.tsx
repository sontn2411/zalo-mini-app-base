import { useState } from 'react'
import { getPhoneNumber } from 'zmp-sdk/apis'

export const usePhoneNumber = () => {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  return
}
