import { useState, useCallback } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

interface ImageLightboxProps {
  images: { src: string; alt?: string }[]
  initialIndex?: number
  open: boolean
  onClose: () => void
}

const ImageLightbox = ({ images, initialIndex = 0, open, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(initialIndex)

  const handleOpen = useCallback(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  useState(() => {
    if (open) handleOpen()
  })

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      on={{ view: ({ index: i }) => setIndex(i) }}
      slides={images.map(img => ({ src: img.src, alt: img.alt }))}
      plugins={[Zoom]}
      zoom={{ maxZoomPixelRatio: 3 }}
      carousel={{ finite: true }}
      controller={{ closeOnBackdropClick: true }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
      }}
    />
  )
}

export default ImageLightbox
