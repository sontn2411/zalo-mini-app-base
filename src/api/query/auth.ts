import {
  LoginPayload,
  RegisterEnterprise,
  RegisterLaborePayload,
  UpdateProfileEnterprise,
  UpdateProfileLaborePayload,
  ZmpLinkedAccountPayload,
} from '@/types/auth'
import instance from '../http'
import { useMutation, useQuery } from '@tanstack/react-query'
import { nativeStorage } from 'zmp-sdk/apis'
import { KEYSTORAGE } from '@/constants/message'
import { AxiosError } from 'axios'

const fetchRegisterLabore = async (payload: RegisterLaborePayload) => {
  try {
    const res = await instance.post('/LaboreSignUp', { ...payload })
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error('❌ Lỗi fetchRegisterLabore:', error)

    if (error.response?.data) {
      return error.response.data
    }
    throw error
  }
}

export const insertRegisterLabore = () => {
  return useMutation({
    mutationFn: (data: RegisterLaborePayload) => fetchRegisterLabore(data),
  })
}

const fetchLogin = async (payload: LoginPayload) => {
  try {
    const res = await instance.post('/SignIn', { ...payload })
    return res.data
  } catch (error) {
    console.error('❌ Lỗi fetchLogin:', error)
    throw error
  }
}

export const insertLogin = () => {
  return useMutation({
    mutationFn: (data: LoginPayload) => fetchLogin(data),
  })
}

const fetchUserProfile = async () => {
  try {
    const { data } = await instance.get('/Profile')
    return data
  } catch (error) {
    throw error
  }
}

export const useDataUserProfile = () => {
  const accessToken = nativeStorage.getItem(KEYSTORAGE.ACCESSTOKEN)
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: fetchUserProfile,
    enabled: !!accessToken,
  })
}

const fetchRegisterEnterprise = async (data: RegisterEnterprise) => {
  try {
    const res = await instance.post('/EnterpriseSignUp', { ...data })
    return res.data
  } catch (error) {
    console.error('❌ Lỗi fetchRegisterEnterprise:', error)
    throw error
  }
}

export const insertRegisterEnterprise = () => {
  return useMutation({
    mutationFn: (data: RegisterEnterprise) => fetchRegisterEnterprise(data),
  })
}

const fetchUpdateProfileLabore = async (data: UpdateProfileLaborePayload) => {
  try {
    const res = await instance.post('/LaboreUpdateProfile', { ...data })
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error('❌ Lỗi fetchUpdateProfileLabore:', error)

    if (error.response?.data) {
      return error.response.data
    }
    throw error
  }
}
export const insertUodateLabore = () => {
  return useMutation({
    mutationFn: (data: UpdateProfileLaborePayload) =>
      fetchUpdateProfileLabore(data),
  })
}

const fetchUpdateProfileEnterprise = async (data: UpdateProfileEnterprise) => {
  try {
    const res = await instance.post('/EnterpriseUpdateProfile', { ...data })
    return res.data
  } catch (err) {
    const error = err as AxiosError
    console.error('❌ Lỗi fetchUpdateProfileEnterprise:', error)

    if (error.response?.data) {
      return error.response.data
    }
    throw error
  }
}

export const insertUpdateEntrprise = () => {
  return useMutation({
    mutationFn: (data: UpdateProfileEnterprise) =>
      fetchUpdateProfileEnterprise(data),
  })
}

const fetchZmpLinkedAccount = async (payload: ZmpLinkedAccountPayload) => {
  try {
    const { data } = await instance.post('/ZmpLinkedAccount', { ...payload })

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

export const insertZmpLinkedAccount = () => {
  return useMutation({
    mutationFn: (data: ZmpLinkedAccountPayload) => fetchZmpLinkedAccount(data),
  })
}
