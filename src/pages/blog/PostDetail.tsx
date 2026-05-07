import { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores'
import { cn } from '@/utils/cn'
import PostMeta from './components/PostMeta'
import TableOfContents from './components/TableOfContents'
import ImageLightbox from './components/ImageLightbox'
import PostNavigation from './components/PostNavigation'
import type { TocItem } from '@/types/blog'
import { ArrowLeft, Tag } from 'lucide-react'

const PostDetail = observer(() => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { blogStore } = useStores()
  const { currentPost, loading, relatedPosts, prevPost, nextPost } = blogStore
  const [activeTocId, setActiveTocId] = useState<string>('')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const contentImagesRef = useRef<{ src: string; alt?: string }[]>([])

  useEffect(() => {
    if (blogStore.posts.length === 0) {
      blogStore.fetchPosts()
    }
  }, [blogStore])

  useEffect(() => {
    if (slug) {
      blogStore.fetchPostBySlug(slug)
    }
    return () => {
      blogStore.setCurrentPost(null)
    }
  }, [slug, blogStore])

  const tocItems: TocItem[] = useMemo(() => {
    if (!currentPost) return []
    const regex = /^(#{2,4})\s+(.+)$/gm
    const items: TocItem[] = []
    let match
    while ((match = regex.exec(currentPost.content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-')
      items.push({ id, text, level })
    }
    return items
  }, [currentPost])

  useEffect(() => {
    const handleScroll = () => {
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(tocItems[i].id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveTocId(tocItems[i].id)
            return
          }
        }
      }
      if (tocItems.length > 0) {
        setActiveTocId(tocItems[0].id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const handleTocClick = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleImageClick = useCallback((src: string, _alt?: string) => {
    const idx = contentImagesRef.current.findIndex(img => img.src === src)
    if (idx >= 0) {
      setLightboxIndex(idx)
    } else {
      setLightboxIndex(0)
    }
    setLightboxOpen(true)
  }, [])

  if (loading) {
    return (
      <div
        className={cn(
          'min-h-screen flex justify-center items-center',
          'bg-gradient-to-br from-slate-50 to-blue-50/50',
          'dark:from-zinc-900 dark:to-zinc-800'
        )}
      >
        <div
          className={cn(
            'w-10 h-10 rounded-full',
            'border-3 border-slate-200 border-t-indigo-500',
            'dark:border-zinc-700 dark:border-t-indigo-400',
            'animate-spin'
          )}
        />
      </div>
    )
  }

  if (!currentPost) {
    return (
      <div
        className={cn(
          'min-h-screen flex flex-col items-center justify-center',
          'bg-gradient-to-br from-slate-50 to-blue-50/50',
          'dark:from-zinc-900 dark:to-zinc-800'
        )}
      >
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">文章未找到</p>
        <Link
          to="/blog"
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
            'bg-indigo-600 text-white hover:bg-indigo-700',
            'transition-colors duration-200'
          )}
        >
          <ArrowLeft className="size-4" />
          返回博客
        </Link>
      </div>
    )
  }

  const collectImages = (): { src: string; alt?: string }[] => {
    const images: { src: string; alt?: string }[] = []
    if (currentPost.coverImage) {
      images.push({
        src: currentPost.coverImage.url,
        alt: currentPost.coverImage.alt || currentPost.title,
      })
    }
    const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
    let imgMatch
    while ((imgMatch = imgRegex.exec(currentPost.content)) !== null) {
      images.push({ src: imgMatch[2], alt: imgMatch[1] })
    }
    return images
  }

  const allImages = collectImages()
  contentImagesRef.current = allImages

  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    let inCodeBlock = false
    let codeContent = ''
    let codeLanguage = ''
    let codeBlockIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${codeBlockIndex}`} className="my-4 rounded-lg overflow-hidden">
              <div
                className={cn(
                  'flex items-center justify-between px-4 py-2',
                  'bg-slate-700 dark:bg-zinc-700',
                  'text-xs text-slate-300'
                )}
              >
                <span>{codeLanguage || 'text'}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(codeContent.trim())
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  复制
                </button>
              </div>
              <pre
                className={cn(
                  'p-4 overflow-x-auto text-sm leading-relaxed',
                  'bg-slate-800 dark:bg-zinc-900',
                  'text-slate-200'
                )}
              >
                <code>{codeContent.trim()}</code>
              </pre>
            </div>
          )
          codeBlockIndex++
          codeContent = ''
          codeLanguage = ''
          inCodeBlock = false
        } else {
          inCodeBlock = true
          codeLanguage = line.slice(3).trim()
        }
        continue
      }

      if (inCodeBlock) {
        codeContent += line + '\n'
        continue
      }

      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
      if (imgMatch) {
        const alt = imgMatch[1]
        const src = imgMatch[2]
        elements.push(
          <div key={`img-${i}`} className="my-6">
            <img
              src={src}
              alt={alt}
              className={cn(
                'max-w-full rounded-lg cursor-zoom-in',
                'hover:shadow-lg hover:brightness-95',
                'transition-all duration-200'
              )}
              loading="lazy"
              onClick={() => handleImageClick(src, alt)}
            />
            {alt && (
              <p className="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">{alt}</p>
            )}
          </div>
        )
        continue
      }

      if (line.startsWith('#### ')) {
        const text = line.slice(5).trim()
        const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-')
        elements.push(
          <h4
            key={i}
            id={id}
            className={cn('text-base font-bold mt-6 mb-3', 'text-slate-700 dark:text-slate-200')}
          >
            {text}
          </h4>
        )
      } else if (line.startsWith('### ')) {
        const text = line.slice(4).trim()
        const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-')
        elements.push(
          <h3
            key={i}
            id={id}
            className={cn(
              'text-lg font-bold mt-8 mb-4',
              'text-slate-800 dark:text-slate-100',
              'border-b border-slate-100 dark:border-zinc-700 pb-2'
            )}
          >
            {text}
          </h3>
        )
      } else if (line.startsWith('## ')) {
        const text = line.slice(3).trim()
        const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-')
        elements.push(
          <h2
            key={i}
            id={id}
            className={cn(
              'text-xl sm:text-2xl font-bold mt-10 mb-5',
              'text-slate-800 dark:text-slate-100'
            )}
          >
            {text}
          </h2>
        )
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote
            key={i}
            className={cn(
              'my-4 pl-4 py-2',
              'border-l-4 border-indigo-400 dark:border-indigo-500',
              'bg-indigo-50/50 dark:bg-indigo-900/10',
              'text-slate-600 dark:text-slate-300 italic'
            )}
          >
            {line.slice(2)}
          </blockquote>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <li
            key={i}
            className={cn('ml-4 text-slate-600 dark:text-slate-300', 'leading-relaxed list-disc')}
          >
            {line.slice(2)}
          </li>
        )
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />)
      } else {
        const processedLine = line.replace(
          /`([^`]+)`/g,
          '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 text-sm font-mono">$1</code>'
        )
        elements.push(
          <p
            key={i}
            className={cn(
              'text-base leading-relaxed',
              'text-slate-600 dark:text-slate-300',
              'tracking-wide'
            )}
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        )
      }
    }

    return elements
  }

  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-gradient-to-br from-slate-50 to-blue-50/50',
        'dark:from-zinc-900 dark:to-zinc-800',
        'transition-colors duration-300'
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <button
          onClick={() => navigate('/blog')}
          className={cn(
            'inline-flex items-center gap-2 mb-8',
            'text-sm text-slate-500 hover:text-indigo-600',
            'dark:text-slate-400 dark:hover:text-indigo-400',
            'transition-colors duration-200'
          )}
        >
          <ArrowLeft className="size-4" />
          返回博客
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <article className="flex-1 min-w-0">
            <div
              className={cn(
                'rounded-xl p-6 sm:p-8 lg:p-10',
                'bg-white dark:bg-zinc-800/80',
                'border border-slate-200 dark:border-zinc-700',
                'shadow-sm'
              )}
            >
              {currentPost.coverImage && (
                <div className="mb-6 -mt-2 -mx-2 sm:-mx-4 lg:-mx-6 rounded-t-xl overflow-hidden">
                  <img
                    src={currentPost.coverImage.url}
                    alt={currentPost.coverImage.alt || currentPost.title}
                    className={cn(
                      'w-full h-64 sm:h-80 object-cover',
                      'cursor-zoom-in hover:brightness-95',
                      'transition-all duration-200'
                    )}
                    onClick={() =>
                      handleImageClick(
                        currentPost.coverImage!.url,
                        currentPost.coverImage!.alt || currentPost.title
                      )
                    }
                  />
                </div>
              )}

              <h1
                className={cn(
                  'text-2xl sm:text-3xl lg:text-4xl font-bold mb-4',
                  'text-slate-800 dark:text-slate-100',
                  'leading-tight'
                )}
              >
                {currentPost.title}
              </h1>

              <div className="mb-8">
                <PostMeta post={currentPost} />
              </div>

              {currentPost.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentPost.tags.map(tag => (
                    <Link
                      key={tag.id}
                      to={`/blog?tag=${tag.slug}`}
                      className={cn(
                        'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs',
                        'border border-slate-200 dark:border-zinc-600',
                        'bg-white dark:bg-zinc-700',
                        'text-slate-600 dark:text-slate-300',
                        'hover:border-indigo-300 hover:bg-indigo-50',
                        'dark:hover:border-indigo-600 dark:hover:bg-indigo-900/20',
                        'transition-colors duration-200'
                      )}
                    >
                      <Tag className="size-3" style={{ color: tag.color }} />
                      {tag.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className="prose-custom">{renderContent(currentPost.content)}</div>
            </div>

            <PostNavigation prevPost={prevPost} nextPost={nextPost} />

            {relatedPosts.length > 0 && (
              <div className="mt-8">
                <h3 className={cn('text-lg font-bold mb-4', 'text-slate-700 dark:text-slate-200')}>
                  相关文章
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map(post => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className={cn(
                        'p-4 rounded-lg',
                        'bg-white dark:bg-zinc-800/80',
                        'border border-slate-200 dark:border-zinc-700',
                        'hover:shadow-md hover:-translate-y-0.5',
                        'transition-all duration-200'
                      )}
                    >
                      <span
                        className={cn(
                          'text-xs font-medium px-2 py-0.5 rounded-full',
                          'bg-indigo-50 text-indigo-700',
                          'dark:bg-indigo-900/30 dark:text-indigo-300'
                        )}
                      >
                        {post.category.name}
                      </span>
                      <h4
                        className={cn(
                          'mt-2 text-sm font-semibold',
                          'text-slate-700 dark:text-slate-200',
                          'line-clamp-2'
                        )}
                      >
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {tocItems.length > 0 && (
            <aside className="hidden lg:block w-56 shrink-0">
              <div
                className={cn(
                  'sticky top-20 p-4 rounded-xl',
                  'bg-white dark:bg-zinc-800/80',
                  'border border-slate-200 dark:border-zinc-700',
                  'shadow-sm'
                )}
              >
                <TableOfContents
                  items={tocItems}
                  activeId={activeTocId}
                  onItemClick={handleTocClick}
                />
              </div>
            </aside>
          )}
        </div>
      </div>

      <ImageLightbox
        images={allImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
})

export default PostDetail
