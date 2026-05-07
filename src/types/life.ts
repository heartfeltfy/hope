export interface LifeMoment {
  id: string
  date: string
  title: string
  content: string
  images: LifeImage[]
  tags: string[]
  mood?: 'happy' | 'peaceful' | 'thoughtful' | 'excited' | 'grateful'
}

export interface LifeImage {
  id: string
  url: string
  alt?: string
  thumbnailUrl?: string
}

export type LifeViewMode = 'timeline' | 'gallery'
