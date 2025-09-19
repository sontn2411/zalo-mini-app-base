import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'
import instance from '../http'
import { PAGESIZE } from '@/constants/message'
import { PostingJobPayload } from '@/types/job'
import { AxiosError } from 'axios'

const pageSize = PAGESIZE

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
      return allPages.length * pageSize
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

interface JobForeigners {
  rowIndex?: number
  keyword?: string
  enterprise?: string
}

const fetchDataJobForeigners = async ({
  rowIndex,
  keyword,
  enterprise,
}: JobForeigners) => {
  const { data } = await instance.get('/RecruitmentForeigners', {
    params: {
      rowIndex,
      keyword,
      enterprise,
      pageSize,
    },
  })
  return data
}

export const useDataJobForeigners = (params: JobForeigners) => {
  return useInfiniteQuery({
    queryKey: ['jobForeigners', params],
    queryFn: ({ pageParam = 0 }) =>
      fetchDataJobForeigners({ ...params, rowIndex: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * pageSize
    },
    staleTime: 5 * 60 * 1000,
  })
}

const fetchDetailJobForeigner = async (id: string) => {
  const { data } = await instance.get('/GetRecruitmentForeigner', {
    params: {
      jodId: id,
    },
  })

  return data
}

export const useDetailJobForeigner = (id: string) => {
  return useQuery({
    queryKey: ['detailJobForeigner', id],
    queryFn: () => fetchDetailJobForeigner(id),
  })
}

const fetchRegisterRecruitment = async (payload: PostingJobPayload) => {
  try {
    const { data } = await instance.post('/RegisterRecruitment', { ...payload })
    return data
  } catch (err) {
    const error = err as AxiosError
    console.error('❌ Lỗi fetchUpdateProfileEnterprise:', error)

    if (error.response?.data) {
      return error.response.data
    }
    throw error
  }
}

export const insertRegisterRecruitment = () => {
  return useMutation({
    mutationFn: (data: PostingJobPayload) => fetchRegisterRecruitment(data),
  })
}

interface JobByEnterprisePayload {
  keyword: string
  rowIndex: number
}

const fetchDataJobByEnterprise = async (payload: JobByEnterprisePayload) => {
  const { data } = await instance.get('/EnterpriseJobList', {
    params: {
      rowIndex: payload.rowIndex,
      keyword: payload.keyword,
    },
  })

  return data
}

export const useJobByEnterprise = (params: JobByEnterprisePayload) => {
  return useInfiniteQuery({
    queryKey: ['jobByEnterprise', params],
    queryFn: ({ pageParam = 0 }) =>
      fetchDataJobByEnterprise({ ...params, rowIndex: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.Data?.Data?.length === 0) return undefined
      return allPages.length * pageSize
    },
    staleTime: 5 * 60 * 1000,
  })
}
