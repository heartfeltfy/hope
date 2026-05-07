import { makeAutoObservable, runInAction } from 'mobx'
import type { LifeMoment, LifeViewMode } from '@/types/life'

const MOCK_MOMENTS: LifeMoment[] = [
  {
    id: '1',
    date: '2025-05-01',
    title: '五一假期，去了趟海边',
    content:
      '终于等到假期，和朋友一起去了海边。海风拂面，浪花拍岸，所有的疲惫都被冲散了。日落时分，天空被染成了橘红色，美得让人窒息。',
    images: [
      {
        id: '1-1',
        url: 'https://picsum.photos/seed/sea1/800/600',
        alt: '海边日落',
        thumbnailUrl: 'https://picsum.photos/seed/sea1/400/300',
      },
      {
        id: '1-2',
        url: 'https://picsum.photos/seed/sea2/800/600',
        alt: '沙滩漫步',
        thumbnailUrl: 'https://picsum.photos/seed/sea2/400/300',
      },
    ],
    tags: ['旅行', '海边', '假期'],
    mood: 'happy',
  },
  {
    id: '2',
    date: '2025-04-20',
    title: '周末的咖啡时光',
    content:
      '在一个安静的角落，点了一杯拿铁，翻开一本很久没读的书。窗外的阳光透过玻璃洒在桌面上，时间仿佛慢了下来。偶尔抬头看看窗外的行人，也是一种别样的享受。',
    images: [
      {
        id: '2-1',
        url: 'https://picsum.photos/seed/coffee1/800/600',
        alt: '咖啡时光',
        thumbnailUrl: 'https://picsum.photos/seed/coffee1/400/300',
      },
    ],
    tags: ['咖啡', '阅读', '周末'],
    mood: 'peaceful',
  },
  {
    id: '3',
    date: '2025-04-12',
    title: '第一次尝试做蛋糕',
    content:
      '跟着视频教程，第一次尝试做了戚风蛋糕。虽然外形不太完美，但味道出乎意料地好！烘焙的过程让人很放松，看着面糊在烤箱里慢慢膨胀，有一种小小的成就感。',
    images: [
      {
        id: '3-1',
        url: 'https://picsum.photos/seed/cake1/800/600',
        alt: '自制蛋糕',
        thumbnailUrl: 'https://picsum.photos/seed/cake1/400/300',
      },
      {
        id: '3-2',
        url: 'https://picsum.photos/seed/cake2/800/600',
        alt: '烘焙过程',
        thumbnailUrl: 'https://picsum.photos/seed/cake2/400/300',
      },
      {
        id: '3-3',
        url: 'https://picsum.photos/seed/cake3/800/600',
        alt: '成品展示',
        thumbnailUrl: 'https://picsum.photos/seed/cake3/400/300',
      },
    ],
    tags: ['烘焙', '美食', '生活'],
    mood: 'excited',
  },
  {
    id: '4',
    date: '2025-04-05',
    title: '清明踏青',
    content:
      '清明时节，和家人一起去郊外踏青。春意盎然，桃花盛开，空气中弥漫着泥土和花草的清香。走在乡间小路上，感受着大自然的生机与活力。',
    images: [
      {
        id: '4-1',
        url: 'https://picsum.photos/seed/spring1/800/600',
        alt: '春日踏青',
        thumbnailUrl: 'https://picsum.photos/seed/spring1/400/300',
      },
      {
        id: '4-2',
        url: 'https://picsum.photos/seed/spring2/800/600',
        alt: '桃花盛开',
        thumbnailUrl: 'https://picsum.photos/seed/spring2/400/300',
      },
    ],
    tags: ['踏青', '春天', '家人'],
    mood: 'grateful',
  },
  {
    id: '5',
    date: '2025-03-28',
    title: '深夜的代码与思考',
    content:
      '凌晨两点，终于解决了一个困扰了好几天的技术难题。当测试通过的那一刻，所有的疲惫都值了。写代码就像解谜，每一个 bug 都是一个待解的谜题，而找到答案的那一刻，就是最好的奖励。',
    images: [],
    tags: ['编程', '深夜', '思考'],
    mood: 'thoughtful',
  },
  {
    id: '6',
    date: '2025-03-15',
    title: '春日跑步计划启动',
    content:
      '天气渐暖，开始了今年的跑步计划。清晨的公园里，空气清新，鸟鸣声声。跑了三公里，虽然有些喘，但出了汗之后整个人都精神了很多。坚持就是胜利！',
    images: [
      {
        id: '6-1',
        url: 'https://picsum.photos/seed/run1/800/600',
        alt: '晨跑',
        thumbnailUrl: 'https://picsum.photos/seed/run1/400/300',
      },
    ],
    tags: ['运动', '跑步', '健康'],
    mood: 'excited',
  },
  {
    id: '7',
    date: '2025-03-01',
    title: '读完了《人类简史》',
    content:
      '花了两周时间终于读完了《人类简史》。书中关于认知革命和虚构故事的论述让我印象深刻。人类之所以能统治地球，不是因为个体的强大，而是因为我们能够通过共同的故事来协作。推荐给每一个对人类命运感兴趣的人。',
    images: [],
    tags: ['阅读', '推荐', '思考'],
    mood: 'thoughtful',
  },
  {
    id: '8',
    date: '2025-02-14',
    title: '一个人的情人节',
    content:
      '情人节没有约会，但也不觉得孤单。给自己买了一束花，做了一顿丰盛的晚餐。学会享受独处的时光，也是一种幸福。爱自己，才是终身浪漫的开始。',
    images: [
      {
        id: '8-1',
        url: 'https://picsum.photos/seed/flower1/800/600',
        alt: '鲜花',
        thumbnailUrl: 'https://picsum.photos/seed/flower1/400/300',
      },
      {
        id: '8-2',
        url: 'https://picsum.photos/seed/dinner1/800/600',
        alt: '晚餐',
        thumbnailUrl: 'https://picsum.photos/seed/dinner1/400/300',
      },
    ],
    tags: ['独处', '美食', '生活'],
    mood: 'peaceful',
  },
  {
    id: '9',
    date: '2025-01-28',
    title: '除夕夜，团圆饭',
    content:
      '一年到头最期待的就是这顿团圆饭。妈妈做了满满一桌子菜，爸爸开了一瓶好酒。一家人围坐在一起，聊着过去一年的故事，笑声不断。这就是家的味道。',
    images: [
      {
        id: '9-1',
        url: 'https://picsum.photos/seed/cny1/800/600',
        alt: '团圆饭',
        thumbnailUrl: 'https://picsum.photos/seed/cny1/400/300',
      },
      {
        id: '9-2',
        url: 'https://picsum.photos/seed/cny2/800/600',
        alt: '年夜饭',
        thumbnailUrl: 'https://picsum.photos/seed/cny2/400/300',
      },
      {
        id: '9-3',
        url: 'https://picsum.photos/seed/cny3/800/600',
        alt: '烟花',
        thumbnailUrl: 'https://picsum.photos/seed/cny3/400/300',
      },
    ],
    tags: ['春节', '家人', '团圆'],
    mood: 'grateful',
  },
]

const lifeStore = makeAutoObservable({
  moments: [] as LifeMoment[],
  viewMode: 'timeline' as LifeViewMode,
  selectedTag: null as string | null,
  loading: false,

  setMoments(moments: LifeMoment[]) {
    this.moments = moments
  },

  setViewMode(mode: LifeViewMode) {
    this.viewMode = mode
  },

  setSelectedTag(tag: string | null) {
    this.selectedTag = tag
  },

  setLoading(loading: boolean) {
    this.loading = loading
  },

  get filteredMoments(): LifeMoment[] {
    if (!this.selectedTag) return this.moments
    return this.moments.filter(m => m.tags.includes(this.selectedTag!))
  },

  get allTags(): string[] {
    const tagSet = new Set<string>()
    this.moments.forEach(m => m.tags.forEach(t => tagSet.add(t)))
    return Array.from(tagSet)
  },

  get galleryImages(): { src: string; alt?: string; thumbnailUrl?: string; momentId: string }[] {
    return this.filteredMoments.flatMap(m =>
      m.images.map(img => ({
        src: img.url,
        alt: img.alt,
        thumbnailUrl: img.thumbnailUrl,
        momentId: m.id,
      }))
    )
  },

  async fetchMoments() {
    try {
      this.setLoading(true)
      runInAction(() => {
        this.setMoments(MOCK_MOMENTS)
      })
    } finally {
      runInAction(() => {
        this.setLoading(false)
      })
    }
  },

  clearFilters() {
    this.selectedTag = null
  },
})

export default lifeStore
