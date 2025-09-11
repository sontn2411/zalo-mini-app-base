import { useQuery } from '@tanstack/react-query'
import instance from '../http'

const fetchDataProvince = async () => {
  const { data } = await instance.get('/Province')

  return data
}

export const useDataProvince = () => {
  return useQuery({
    queryKey: ['province'],
    queryFn: fetchDataProvince,
    staleTime: 5 * 60 * 1000,
  })
}

const fetchDataWards = async (id?: string) => {
  const { data } = await instance.get('/Wards', {
    params: {
      provinceIds: id,
    },
  })

  return data
}

export const useDataWards = (id?: string) => {
  return useQuery({
    queryKey: ['wards', id],
    queryFn: () => fetchDataWards(id),
  })
}
