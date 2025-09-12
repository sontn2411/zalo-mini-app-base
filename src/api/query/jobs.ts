import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import instance from '../http'

const fetchDataJobListHome = async () => {
  const rowIndex = 0
  const pageSize = 5
  const { data } = await instance.get(
    `UrgentJobRecruitment?rowIndex=${rowIndex}&pageSize=${pageSize}`
  )

  return data
}

export const useDataJobListHome = () => {
  return useQuery({
    queryKey: ['jobList'],
    queryFn: fetchDataJobListHome,
  })
}

interface JobListParams {
  keyword?: string
  job?: string
  ward?: string
  salary?: string
  gender?: string
  jobtype?: string
}

const fetchDataJobList = async ({
  pageParam = 0,
  keyword = '',
  job = '',
  ward = '',
  salary = '',
  gender = '',
  jobtype = '',
}: JobListParams & { pageParam?: number }) => {
  const pageSize = 10

  const { data } = await instance.get('JobList', {
    params: {
      rowIndex: pageParam,
      pageSize,
      keyword,
      job,
      ward,
      salary,
      gender,
      jobtype,
    },
  })

  return data
}

export const useDataJobListInfinite = (params: JobListParams) => {
  return useInfiniteQuery({
    queryKey: ['jobListInfinite', params],
    queryFn: ({ pageParam = 0 }) => fetchDataJobList({ ...params, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * 10
    },
    staleTime: 5 * 60 * 1000,
  })
}

const fetchDataJobDetail = async (id: string) => {
  const { data } = await instance.get('/GetJob', {
    params: {
      jodId: id,
    },
  })

  return data
}

export const useDataJobDetail = (id: string) => {
  return useQuery({
    queryKey: ['jobDetail', id],
    queryFn: () => fetchDataJobDetail(id),
    staleTime: 5 * 60 * 1000,
  })
}
