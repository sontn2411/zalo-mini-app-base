import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import instance from '../http'

interface CandidateListParams {
  keyword?: string
  job?: string
  ward?: string
  salary?: string
  gender?: string
  jobtype?: string
}

const fetchDataCandidate = async ({
  pageParam = 0,
  keyword = '',
  job = '',
  ward = '',
  salary = '',
  gender = '',
  jobtype = '',
}: CandidateListParams & { pageParam?: number }) => {
  const pageSize = 10

  const { data } = await instance.get('/Labore', {
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

export const useDataCandidateInfinite = (params: CandidateListParams) => {
  return useInfiniteQuery({
    queryKey: ['candidateList', params],
    queryFn: ({ pageParam = 0 }) =>
      fetchDataCandidate({
        pageParam,
        ...params,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * 10
    },
    staleTime: 5 * 60 * 1000,
  })
}

const fetchCandidateDetail = async (id: string) => {
  const { data } = await instance.get('/GetLabore', {
    params: {
      laboreId: id,
    },
  })

  return data
}

export const useCandidateDetail = (id: string) => {
  return useQuery({
    queryKey: ['candidateDetail', id],
    queryFn: () => fetchCandidateDetail(id),
    staleTime: 5 * 60 * 1000,
  })
}
