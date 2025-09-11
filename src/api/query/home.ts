import { useQuery } from '@tanstack/react-query'
import instance from '../http'

const fetchHomeData = async () => {
  const rowIndex = 0
  const pageSize = 5
  const { data } = await instance.get(
    `/HotNewsHomePage?rowIndex=${rowIndex}&pageSize=${pageSize}`
  )

  return data
}

export const useHomeData = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: fetchHomeData,
    staleTime: 5 * 60 * 1000,
  })
}
