export const API_ENDPOINTS = {
  LOGIN: '/login',
  REFRESH: '/refresh',
  LOGOUT: '/logout',
  POSTS: '/posts',
  POST_DETAIL: (slug: string) => `/posts/${slug}`,
  CATEGORIES: '/categories',
  TAGS: '/tags',
  UPLOAD_IMAGE: '/upload/image',
}
