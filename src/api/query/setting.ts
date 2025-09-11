import { useQuery } from '@tanstack/react-query'
import instance from '../http'

const fetchDataSettings = async () => {
  const { data } = await instance.get('/Settings')

  return data
}

export const useDataSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: fetchDataSettings,
    staleTime: 5 * 60 * 1000,
  })
}

const fetchAbout = async () => {
  const { data } = await instance.get('/AboutUs')

  return data
}

export const useDataAbout = () => {
  return useQuery({
    queryKey: ['about'],
    queryFn: fetchAbout,
    staleTime: 5 * 60 * 1000,
  })
}
