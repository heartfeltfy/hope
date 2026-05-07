export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  postCount: number
  sortOrder: number
}

export interface Tag {
  id: string
  name: string
  slug: string
  color?: string
  postCount: number
}

export interface ImageAsset {
  id: string
  url: string
  alt?: string
  width?: number
  height?: number
  thumbnailUrl?: string
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: ImageAsset
  category: Category
  tags: Tag[]
  author: string
  status: 'draft' | 'published' | 'archived'
  publishedAt: string
  updatedAt: string
  readingTime: number
  viewCount: number
}

export interface Pagination {
  currentPage: number
  pageSize: number
  totalPosts: number
  totalPages: number
}

export interface TocItem {
  id: string
  text: string
  level: number
}
