import { useState } from 'react'

export const useAxios = <T>(requestFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  return { data, error, loading }
}
