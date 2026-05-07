import { AxiosRequestConfig } from 'axios'
import { API_ENDPOINTS } from './endpoints'

export const fetchPostsApi = (params?: {
  page?: number
  pageSize?: number
  category?: string
  tag?: string
  search?: string
}): AxiosRequestConfig => ({
  method: 'GET',
  url: API_ENDPOINTS.POSTS,
  params,
})

export const fetchPostBySlugApi = (slug: string): AxiosRequestConfig => ({
  method: 'GET',
  url: API_ENDPOINTS.POST_DETAIL(slug),
})

export const fetchCategoriesApi = (): AxiosRequestConfig => ({
  method: 'GET',
  url: API_ENDPOINTS.CATEGORIES,
})

export const fetchTagsApi = (): AxiosRequestConfig => ({
  method: 'GET',
  url: API_ENDPOINTS.TAGS,
})

export const uploadImageApi = (formData: FormData): AxiosRequestConfig => ({
  method: 'POST',
  url: API_ENDPOINTS.UPLOAD_IMAGE,
  data: formData,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
