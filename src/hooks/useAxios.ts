import { useState } from 'react'
import axiosInstance from '@/utils/axios'

export const useAxios = <T>(config: Parameters<typeof axiosInstance.request>[0]) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axiosInstance.request<T>(config)
      setData(response.data)
      return response.data // 返回数据
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      } else {
        setError(new Error('An unknown error occurred'))
      }
    } finally {
      setLoading(false)
    }
  }
  return { data, error, loading, fetchData }
}
