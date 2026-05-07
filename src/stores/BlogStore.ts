import { makeAutoObservable, runInAction } from 'mobx'
import axiosInstance from '@/utils/axios'
import { fetchPostsApi, fetchPostBySlugApi, fetchCategoriesApi, fetchTagsApi } from '@/api/blog'
import type { Post, Category, Tag, Pagination } from '@/types/blog'

const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: '前端开发', slug: 'frontend', icon: 'Monitor', postCount: 3, sortOrder: 1 },
  { id: '2', name: '后端架构', slug: 'backend', icon: 'Server', postCount: 2, sortOrder: 2 },
  { id: '3', name: 'DevOps', slug: 'devops', icon: 'Container', postCount: 1, sortOrder: 3 },
  { id: '4', name: '随想杂谈', slug: 'thoughts', icon: 'Lightbulb', postCount: 1, sortOrder: 4 },
]

const MOCK_TAGS: Tag[] = [
  { id: '1', name: 'React', slug: 'react', color: '#61dafb', postCount: 2 },
  { id: '2', name: 'TypeScript', slug: 'typescript', color: '#3178c6', postCount: 3 },
  { id: '3', name: 'Vite', slug: 'vite', color: '#646cff', postCount: 1 },
  { id: '4', name: 'Node.js', slug: 'nodejs', color: '#339933', postCount: 2 },
  { id: '5', name: 'Docker', slug: 'docker', color: '#2496ed', postCount: 1 },
  { id: '6', name: 'Go', slug: 'go', color: '#00add8', postCount: 1 },
  { id: '7', name: '性能优化', slug: 'performance', color: '#f97316', postCount: 1 },
  { id: '8', name: 'MobX', slug: 'mobx', color: '#ff9955', postCount: 1 },
]

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'React 19 新特性深度解析',
    slug: 'react-19-new-features',
    excerpt:
      '本文深入探讨 React 19 带来的重大更新，包括新的并发特性、Server Components 的成熟以及性能提升等方面...',
    content: `## React 19 新特性深度解析

React 19 带来了许多令人兴奋的新特性，让我们一起来深入了解。

### 1. 并发渲染的成熟

React 19 对并发渲染进行了全面优化，提供了更流畅的用户体验。

\`\`\`tsx
import { useTransition } from 'react'

function SearchResults() {
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    startTransition(() => {
      setQuery(e.target.value)
    })
  }

  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <Spinner />}
      <Results query={query} />
    </div>
  )
}
\`\`\`

### 2. Server Components

Server Components 允许你在服务端渲染组件，减少客户端 JavaScript 包的体积。

\`\`\`tsx
// ServerComponent.tsx
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data')
  const result = await data.json()

  return <div>{result.message}</div>
}
\`\`\`

### 3. 改进的错误处理

React 19 引入了更优雅的错误处理机制，让开发者能够更好地捕获和处理异常。

### 4. 性能提升

- 更快的首次渲染
- 减少不必要的重渲染
- 优化的批量更新机制

### 总结

React 19 是一个重要的里程碑版本，它不仅带来了新特性，更重要的是为未来的发展奠定了基础。
`,
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[0], MOCK_TAGS[1]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-04-15T08:00:00Z',
    updatedAt: '2025-04-15T08:00:00Z',
    readingTime: 8,
    viewCount: 256,
  },
  {
    id: '2',
    title: 'TypeScript 高级类型体操实战指南',
    slug: 'typescript-advanced-types-guide',
    excerpt:
      '掌握 TypeScript 高级类型是写出优雅、类型安全代码的关键。本文通过实际案例，带你一步步掌握条件类型、映射类型等高级技巧...',
    content: `## TypeScript 高级类型体操实战指南

TypeScript 的类型系统非常强大，掌握高级类型可以让你写出更安全、更优雅的代码。

### 1. 条件类型

条件类型类似于三元表达式，可以根据类型条件返回不同的类型。

\`\`\`typescript
type IsString<T> = T extends string ? true : false

type A = IsString<string> // true
type B = IsString<number> // false
\`\`\`

### 2. 映射类型

映射类型可以基于已有类型创建新的类型。

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Optional<T> = {
  [P in keyof T]?: T[P]
}
\`\`\`

### 3. 模板字面量类型

TypeScript 4.1 引入了模板字面量类型，让我们可以在类型层面进行字符串操作。

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`
type ClickEvent = EventName<'click'> // 'onClick'
\`\`\`

### 4. 递归类型

递归类型可以处理嵌套的数据结构。

\`\`\`typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P]
}
\`\`\`

### 总结

TypeScript 的类型系统是图灵完备的，掌握高级类型可以极大地提升代码质量。
`,
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[1]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-04-10T08:00:00Z',
    updatedAt: '2025-04-12T08:00:00Z',
    readingTime: 12,
    viewCount: 189,
  },
  {
    id: '3',
    title: 'Vite 构建优化与插件开发',
    slug: 'vite-build-optimization-and-plugins',
    excerpt:
      'Vite 作为新一代前端构建工具，其插件系统和优化策略值得深入了解。本文将分享 Vite 构建优化的实践经验和插件开发技巧...',
    content: `## Vite 构建优化与插件开发

Vite 凭借其极速的开发体验和灵活的插件系统，已经成为前端构建工具的首选。

### 1. 构建优化策略

#### 代码分割

\`\`\`typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('axios')) return 'vendor-axios'
            return 'vendor'
          }
        },
      },
    },
  },
})
\`\`\`

#### 资源优化

- 图片压缩与懒加载
- CSS 代码分割
- Tree Shaking 优化

### 2. 插件开发基础

Vite 插件基于 Rollup 插件接口扩展而来。

\`\`\`typescript
export default function myVitePlugin(): Plugin {
  return {
    name: 'my-vite-plugin',
    resolveId(id) {
      // 自定义模块解析
    },
    transform(code, id) {
      // 自定义代码转换
    },
    configureServer(server) {
      // 自定义开发服务器
    },
  }
}
\`\`\`

### 3. 实战：自定义 404 页面插件

\`\`\`typescript
export default function copy404Plugin(): Plugin {
  return {
    name: 'copy-404',
    closeBundle() {
      fs.copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}
\`\`\`

### 总结

Vite 的插件系统非常灵活，掌握其原理可以帮助我们更好地优化构建流程。
`,
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[2], MOCK_TAGS[1]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-03-28T08:00:00Z',
    updatedAt: '2025-03-28T08:00:00Z',
    readingTime: 10,
    viewCount: 142,
  },
  {
    id: '4',
    title: 'Node.js 微服务架构实践',
    slug: 'nodejs-microservice-architecture',
    excerpt:
      '微服务架构是现代后端开发的重要模式。本文将分享如何使用 Node.js 构建可扩展的微服务系统，包括服务拆分、通信和部署...',
    content: `## Node.js 微服务架构实践

微服务架构将大型应用拆分为多个小型服务，每个服务独立开发、部署和扩展。

### 1. 服务拆分原则

- 单一职责原则
- 限界上下文
- 数据独立性

### 2. 服务间通信

#### REST API

\`\`\`typescript
// 用户服务
app.get('/api/users/:id', async (req, res) => {
  const user = await UserService.findById(req.params.id)
  res.json(user)
})
\`\`\`

#### 消息队列

\`\`\`typescript
// 发布事件
await messageQueue.publish('user.created', {
  userId: user.id,
  email: user.email,
})

// 订阅事件
messageQueue.subscribe('user.created', async (event) => {
  await NotificationService.sendWelcome(event.email)
})
\`\`\`

### 3. 服务发现与注册

使用 Consul 或 etcd 进行服务注册和发现。

### 4. 容器化部署

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "dist/main.js"]
\`\`\`

### 总结

微服务架构虽然带来了灵活性，但也增加了系统复杂度。选择合适的架构需要根据团队规模和业务需求来决定。
`,
    category: MOCK_CATEGORIES[1],
    tags: [MOCK_TAGS[3]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-03-15T08:00:00Z',
    updatedAt: '2025-03-16T08:00:00Z',
    readingTime: 15,
    viewCount: 98,
  },
  {
    id: '5',
    title: 'Go 语言并发编程：goroutine 与 channel',
    slug: 'go-concurrency-goroutine-channel',
    excerpt:
      'Go 语言的并发模型是其最强大的特性之一。本文将深入讲解 goroutine 和 channel 的使用，以及常见的并发模式...',
    content: `## Go 语言并发编程：goroutine 与 channel

Go 语言的并发模型基于 CSP（Communicating Sequential Processes），通过 goroutine 和 channel 实现高效的并发编程。

### 1. Goroutine 基础

\`\`\`go
func main() {
    go func() {
        fmt.Println("Hello from goroutine!")
    }()
    fmt.Println("Hello from main!")
    time.Sleep(time.Second)
}
\`\`\`

### 2. Channel 通信

\`\`\`go
func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
    }
    close(ch)
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Println("Received:", val)
    }
}

func main() {
    ch := make(chan int)
    go producer(ch)
    consumer(ch)
}
\`\`\`

### 3. Select 多路复用

\`\`\`go
select {
case msg := <-ch1:
    fmt.Println("Received from ch1:", msg)
case msg := <-ch2:
    fmt.Println("Received from ch2:", msg)
case <-time.After(5 * time.Second):
    fmt.Println("Timeout!")
}
\`\`\`

### 4. 常见并发模式

- Fan-out/Fan-in 模式
- Pipeline 模式
- Worker Pool 模式

### 总结

Go 的并发模型简洁而强大，掌握 goroutine 和 channel 是写出高效 Go 程序的关键。
`,
    category: MOCK_CATEGORIES[1],
    tags: [MOCK_TAGS[5]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-03-01T08:00:00Z',
    updatedAt: '2025-03-01T08:00:00Z',
    readingTime: 11,
    viewCount: 76,
  },
  {
    id: '6',
    title: 'Docker 容器化部署最佳实践',
    slug: 'docker-deployment-best-practices',
    excerpt:
      'Docker 是现代应用部署的核心工具。本文将分享 Docker 容器化部署的最佳实践，包括镜像优化、多阶段构建和编排策略...',
    content: `## Docker 容器化部署最佳实践

Docker 让应用的打包、分发和部署变得简单而一致。

### 1. 镜像优化

#### 多阶段构建

\`\`\`dockerfile
# 构建阶段
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

### 2. Docker Compose 编排

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
      - redis
  db:
    image: postgres:15-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
  redis:
    image: redis:7-alpine
volumes:
  pgdata:
\`\`\`

### 3. 安全最佳实践

- 使用非 root 用户运行
- 最小化基础镜像
- 定期更新基础镜像
- 不在镜像中存储敏感信息

### 总结

Docker 容器化部署是现代 DevOps 的基石，掌握最佳实践可以显著提升部署效率和应用安全性。
`,
    category: MOCK_CATEGORIES[2],
    tags: [MOCK_TAGS[4]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-02-20T08:00:00Z',
    updatedAt: '2025-02-20T08:00:00Z',
    readingTime: 9,
    viewCount: 112,
  },
  {
    id: '7',
    title: 'MobX 状态管理：从入门到精通',
    slug: 'mobx-state-management-guide',
    excerpt:
      'MobX 是一个简单、可扩展的状态管理库。本文将带你从基础概念到高级用法，全面掌握 MobX 在 React 项目中的实践...',
    content: `## MobX 状态管理：从入门到精通

MobX 通过响应式编程范式，让状态管理变得简单而直观。

### 1. 核心概念

- **Observable**: 可观察的状态
- **Action**: 修改状态的操作
- **Computed**: 基于状态派生的值
- **Reaction**: 对状态变化的响应

### 2. 创建 Store

\`\`\`typescript
import { makeAutoObservable } from 'mobx'

class TodoStore {
  todos: Todo[] = []
  filter: string = 'all'

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(text: string) {
    this.todos.push({ id: Date.now(), text, completed: false })
  }

  get filteredTodos() {
    switch (this.filter) {
      case 'completed':
        return this.todos.filter(t => t.completed)
      case 'active':
        return this.todos.filter(t => !t.completed)
      default:
        return this.todos
    }
  }
}
\`\`\`

### 3. 在 React 中使用

\`\`\`tsx
import { observer } from 'mobx-react-lite'

const TodoList = observer(({ store }) => (
  <ul>
    {store.filteredTodos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
))
\`\`\`

### 4. 状态持久化

使用 mobx-persist-store 可以轻松实现状态持久化。

\`\`\`typescript
import { makePersistable } from 'mobx-persist-store'

makePersistable(store, {
  name: 'TodoStore',
  properties: ['todos'],
  storage: localStorage,
})
\`\`\`

### 总结

MobX 的响应式编程模型让状态管理变得自然和高效，特别适合中大型 React 项目。
`,
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[0], MOCK_TAGS[7]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-02-10T08:00:00Z',
    updatedAt: '2025-02-12T08:00:00Z',
    readingTime: 7,
    viewCount: 203,
  },
  {
    id: '8',
    title: '前端性能优化全攻略',
    slug: 'frontend-performance-optimization',
    excerpt:
      '性能优化是前端开发中永恒的话题。本文从加载性能、渲染性能和运行时性能三个维度，全面介绍前端性能优化的策略和工具...',
    content: `## 前端性能优化全攻略

前端性能直接影响用户体验和业务指标，是每个前端工程师必须掌握的技能。

### 1. 加载性能优化

#### 资源压缩与合并

- Gzip / Brotli 压缩
- CSS 和 JS 压缩
- 图片格式优化（WebP、AVIF）

#### 代码分割

\`\`\`typescript
const Blog = lazy(() => import('@/pages/Blog'))
const AiChat = lazy(() => import('@/pages/AiChat'))
\`\`\`

#### 资源预加载

\`\`\`html
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="prefetch" href="/blog" as="document">
\`\`\`

### 2. 渲染性能优化

- 减少 DOM 操作
- 使用 CSS 动画代替 JS 动画
- 虚拟列表（大量数据渲染）
- 避免强制同步布局

### 3. 运行时性能优化

\`\`\`typescript
import { useMemo, useCallback } from 'react'

function OptimizedComponent({ data, onItemClick }) {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item))
  }, [data])

  const handleClick = useCallback((id: string) => {
    onItemClick(id)
  }, [onItemClick])

  return (
    <ul>
      {processedData.map(item => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
\`\`\`

### 4. 性能监控

- Core Web Vitals（LCP、FID、CLS）
- Performance API
- Lighthouse 审计

### 总结

性能优化是一个持续的过程，需要在开发中不断关注和改进。建立性能监控体系是保证应用性能的关键。
`,
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[6], MOCK_TAGS[0]],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-01-25T08:00:00Z',
    updatedAt: '2025-01-26T08:00:00Z',
    readingTime: 13,
    viewCount: 321,
  },
  {
    id: '9',
    title: '程序员的自我修养：持续学习与成长',
    slug: 'programmer-self-cultivation',
    excerpt:
      '技术更新日新月异，如何保持持续学习的动力？本文分享一些关于学习方法、时间管理和职业发展的思考...',
    content: `## 程序员的自我修养：持续学习与成长

在技术快速迭代的时代，持续学习是每个程序员的必修课。

### 1. 学习方法论

#### 费曼学习法

1. 选择一个概念
2. 用简单的语言解释它
3. 找出理解不足的地方
4. 回顾并简化

#### 刻意练习

- 走出舒适区
- 设定明确目标
- 及时获取反馈
- 重复练习

### 2. 时间管理

- 番茄工作法
- 重要紧急矩阵
- 深度工作时间保护

### 3. 技术视野

- 关注技术趋势
- 参与开源社区
- 阅读优秀源码
- 写技术博客

### 4. 职业发展

> 不要只做代码的搬运工，要做问题的解决者。

- T 型人才：广度 + 深度
- 技术领导力
- 沟通与协作能力

### 总结

成长是一个持续的过程，保持好奇心和学习热情是最重要的。愿每一位开发者都能在技术的道路上找到属于自己的方向。
`,
    category: MOCK_CATEGORIES[3],
    tags: [],
    author: 'Hope',
    status: 'published',
    publishedAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-01-10T08:00:00Z',
    readingTime: 6,
    viewCount: 445,
  },
]

const blogStore = makeAutoObservable({
  posts: [] as Post[],
  categories: [] as Category[],
  tags: [] as Tag[],
  currentPost: null as Post | null,
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPosts: 0,
    totalPages: 0,
  } as Pagination,
  selectedCategory: null as string | null,
  selectedTag: null as string | null,
  searchQuery: '',
  loading: false,
  error: null as string | null,

  setPosts(posts: Post[]) {
    this.posts = posts
  },

  setCategories(categories: Category[]) {
    this.categories = categories
  },

  setTags(tags: Tag[]) {
    this.tags = tags
  },

  setCurrentPost(post: Post | null) {
    this.currentPost = post
  },

  setPagination(pagination: Partial<Pagination>) {
    this.pagination = { ...this.pagination, ...pagination }
  },

  setSelectedCategory(slug: string | null) {
    this.selectedCategory = slug
    this.pagination.currentPage = 1
  },

  setSelectedTag(slug: string | null) {
    this.selectedTag = slug
    this.pagination.currentPage = 1
  },

  setSearchQuery(query: string) {
    this.searchQuery = query
    this.pagination.currentPage = 1
  },

  setLoading(loading: boolean) {
    this.loading = loading
  },

  setError(error: string | null) {
    this.error = error
  },

  get filteredPosts(): Post[] {
    let result = this.posts

    if (this.selectedCategory) {
      result = result.filter(post => post.category.slug === this.selectedCategory)
    }

    if (this.selectedTag) {
      result = result.filter(post => post.tags.some(tag => tag.slug === this.selectedTag))
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase()
      result = result.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.name.toLowerCase().includes(query))
      )
    }

    return result
  },

  get relatedPosts(): Post[] {
    if (!this.currentPost) return []
    return this.posts
      .filter(
        post =>
          post.id !== this.currentPost!.id &&
          (post.category.id === this.currentPost!.category.id ||
            post.tags.some(tag => this.currentPost!.tags.some(t => t.id === tag.id)))
      )
      .slice(0, 3)
  },

  async fetchPosts() {
    try {
      this.setLoading(true)
      this.setError(null)
      const { data } = await axiosInstance.request(fetchPostsApi())
      runInAction(() => {
        this.setPosts(data || MOCK_POSTS)
        this.setPagination({
          totalPosts: (data || MOCK_POSTS).length,
          totalPages: Math.ceil((data || MOCK_POSTS).length / this.pagination.pageSize),
        })
      })
    } catch {
      runInAction(() => {
        this.setPosts(MOCK_POSTS)
        this.setPagination({
          totalPosts: MOCK_POSTS.length,
          totalPages: Math.ceil(MOCK_POSTS.length / this.pagination.pageSize),
        })
      })
    } finally {
      runInAction(() => {
        this.setLoading(false)
      })
    }
  },

  async fetchPostBySlug(slug: string) {
    try {
      this.setLoading(true)
      this.setError(null)
      const { data } = await axiosInstance.request(fetchPostBySlugApi(slug))
      runInAction(() => {
        this.setCurrentPost(data || MOCK_POSTS.find(p => p.slug === slug) || null)
      })
    } catch {
      runInAction(() => {
        this.setCurrentPost(MOCK_POSTS.find(p => p.slug === slug) || null)
      })
    } finally {
      runInAction(() => {
        this.setLoading(false)
      })
    }
  },

  async fetchCategories() {
    try {
      const { data } = await axiosInstance.request(fetchCategoriesApi())
      runInAction(() => {
        this.setCategories(data || MOCK_CATEGORIES)
      })
    } catch {
      runInAction(() => {
        this.setCategories(MOCK_CATEGORIES)
      })
    }
  },

  async fetchTags() {
    try {
      const { data } = await axiosInstance.request(fetchTagsApi())
      runInAction(() => {
        this.setTags(data || MOCK_TAGS)
      })
    } catch {
      runInAction(() => {
        this.setTags(MOCK_TAGS)
      })
    }
  },

  clearFilters() {
    this.selectedCategory = null
    this.selectedTag = null
    this.searchQuery = ''
    this.pagination.currentPage = 1
  },
})

export default blogStore
