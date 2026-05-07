import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import { cn } from '@/utils/cn'

interface PhotoGalleryProps {
  images: { src: string; alt?: string; thumbnailUrl?: string; momentId: string }[]
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500">
        <p className="text-lg">暂无照片</p>
      </div>
    )
  }

  return (
    <>
      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {images.map((img, idx) => (
          <div
            key={`${img.momentId}-${idx}`}
            className="break-inside-avoid rounded-lg overflow-hidden cursor-zoom-in group"
            onClick={() => {
              setLightboxIndex(idx)
              setLightboxOpen(true)
            }}
          >
            <img
              src={img.thumbnailUrl || img.src}
              alt={img.alt || ''}
              className={cn(
                'w-full object-cover',
                'group-hover:scale-105 group-hover:brightness-95',
                'transition-all duration-300'
              )}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        on={{ view: ({ index: i }) => setLightboxIndex(i) }}
        slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3 }}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.85)' } }}
      />
    </>
  )
}

export default PhotoGallery
