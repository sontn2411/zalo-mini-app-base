import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import instance from '../http'

const fetchDataOverseasJobs = async ({ pageParam = 0 }) => {
  const pageSize = 10
  const { data } = await instance.get(
    `OverseasJobs?rowIndex=${pageParam}&pageSize=${pageSize}`
  )
  return data
}

export const useDataOverseasJobs = () => {
  return useInfiniteQuery({
    queryKey: ['overseasJobs'],
    queryFn: fetchDataOverseasJobs,
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * 10
    },
  })
}

const fetchDataUnemploymentInsurance = async ({ pageParam = 0 }) => {
  const pageSize = 10
  const { data } = await instance.get(
    `UnemploymentInsurance?rowIndex=${pageParam}&pageSize=${pageSize}`
  )

  return data
}

export const useDataUnemploymentInsurance = () => {
  return useInfiniteQuery({
    queryKey: ['UnemploymentInsurance'],
    queryFn: fetchDataUnemploymentInsurance,
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * 10
    },
  })
}

const fetchDataDetailNews = async ({ id }: { id: string }) => {
  const { data } = await instance.get(`GetNews?newsId=${id}`)

  return data
}

export const useDetailNews = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ['news-detail', id],
    queryFn: () => fetchDataDetailNews({ id: id }),
    staleTime: 5 * 60 * 1000,
  })
}

const fetchDataNewList = async ({ pageParam = 0 }) => {
  const pageSize = 10
  const { data } = await instance.get(
    `HotNewsHomePage?rowIndex=${pageParam}&pageSize=${pageSize}`
  )

  return data
}

export const useDataNewList = () => {
  return useInfiniteQuery({
    queryKey: ['newsList'],
    queryFn: fetchDataNewList,
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * 10
    },
  })
}
