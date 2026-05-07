import { cn } from '@/utils/cn'
import { Smile, Sun, Cloud, Zap, Heart } from 'lucide-react'
import type { LifeMoment } from '@/types/life'

const MOOD_CONFIG: Record<string, { icon: React.ElementType; label: string; color: string }> = {
  happy: { icon: Smile, label: '开心', color: 'text-amber-500' },
  peaceful: { icon: Sun, label: '平静', color: 'text-sky-500' },
  thoughtful: { icon: Cloud, label: '沉思', color: 'text-slate-500' },
  excited: { icon: Zap, label: '兴奋', color: 'text-orange-500' },
  grateful: { icon: Heart, label: '感恩', color: 'text-rose-500' },
}

interface MoodIconProps {
  mood?: LifeMoment['mood']
  size?: number
  showLabel?: boolean
}

const MoodIcon = ({ mood, size = 16, showLabel = false }: MoodIconProps) => {
  if (!mood) return null
  const config = MOOD_CONFIG[mood]
  if (!config) return null
  const Icon = config.icon

  return (
    <span className={cn('inline-flex items-center gap-1', config.color)}>
      <Icon className="size-4" style={{ width: size, height: size }} />
      {showLabel && <span className="text-xs">{config.label}</span>}
    </span>
  )
}

export default MoodIcon
