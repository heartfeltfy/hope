const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home.DAK2zcMc.js","assets/vendor.D1EtV5hc.js","assets/mobx.24vIJxeE.js","assets/index.BMZwLDMK.js","assets/vendor-lucide.UPlbGLWD.js","assets/vendor-axios.bIC8cyVI.js","assets/PostDetail.D0R6QyMU.js","assets/Life.D5_XW1nS.js","assets/AiChat.msP_gDqc.js","assets/NotFound.Cq50rYn5.js"])))=>i.map(i=>d[i]);
var X=Object.defineProperty;var P=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var z=(e,r,o)=>r in e?X(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,v=(e,r)=>{for(var o in r||(r={}))N.call(r,o)&&z(e,o,r[o]);if(P)for(var o of P(r))_.call(r,o)&&z(e,o,r[o]);return e};var S=(e,r)=>{var o={};for(var s in e)N.call(e,s)&&r.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&P)for(var s of P(e))r.indexOf(s)<0&&_.call(e,s)&&(o[s]=e[s]);return o};import{r as a,t as G,c as q,j as t,L as A,b as Q,T as W,P as $,C as K,I as Y,u as J,O as ee,d as te,N as j,e as re,f as oe,g as se}from"./vendor.D1EtV5hc.js";import{m as L,a as V,r as d,M as ne,o as ie,P as ae}from"./mobx.24vIJxeE.js";import{a as le}from"./vendor-axios.bIC8cyVI.js";import{S as ce,M as de,L as ue}from"./vendor-lucide.UPlbGLWD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const me=window.location.hostname,R=window.location.port,he=window.location.protocol+"//"+me+(R?":"+R:"")+"/api",g=le.create({baseURL:he,timeout:10*1e3}),pe=e=>{const r=I.getToken();r&&(e.headers.Authorization=`Bearer ${r}`)},ge=["login","public","refresh"];g.interceptors.request.use(e=>(ge.some(o=>{var s;return(s=e.url)==null?void 0:s.includes(o)})||pe(e),e),e=>Promise.reject(e));g.interceptors.response.use(e=>e,e=>Promise.reject(e));const fe=e=>({method:"POST",url:"/login",data:e}),xe=e=>({method:"POST",url:"/refresh",data:{refresh_token:e}}),ve=()=>({method:"POST",url:"/logout"});let b=null;const I=L({userInfo:null,isLoggedIn:!1,loading:!1,error:null,setUserInfo(e){this.userInfo=e,this.isLoggedIn=!!e,e?this.startAutoLogoutTimer():b&&clearTimeout(b)},setLoading(e){this.loading=e},setError(e){typeof e=="string"?this.error=e:e?this.error=e.message:this.error=null},async login(e,r){try{if(this.setLoading(!0),this.setError(null),!e||!r)throw new Error("用户名和密码不能为空");const{data:o}=await g.request(fe({username:e,password:r}));if(!o||!o.access_token)throw new Error("登录失败，未获取到有效的 token");this.setUserInfo(o)}catch(o){throw o instanceof Error?this.setError(o.message):this.setError("登录失败"),o}finally{this.setLoading(!1)}},async refresh(){try{if(this.setLoading(!0),this.setError(null),!this.userInfo||!this.userInfo.refresh_token)throw new Error("刷新令牌不能为空");const{data:e}=await g.request(xe(this.userInfo.refresh_token));if(!e||!e.access_token)throw new Error("刷新失败，未获取到有效的 token");this.setUserInfo(e)}catch(e){throw e instanceof Error?this.setError(e.message):this.setError("刷新失败"),e}finally{this.setLoading(!1)}},async logout(){try{this.setLoading(!0),this.setError(null);const{data:e}=await g.request(ve());console.log(e),this.reset()}catch(e){console.error("登出时发生错误:",e)}},getUserInfo(){return this.userInfo},getToken(){var e;return(e=this.userInfo)==null?void 0:e.access_token},startAutoLogoutTimer(e=1800*1e3){b&&clearTimeout(b),b=setTimeout(()=>{this.logout()},e)},reset(){this.userInfo=null,this.isLoggedIn=!1,this.loading=!1,this.error=null,b&&clearTimeout(b)}}),H={name:"AuthStore",properties:["userInfo","isLoggedIn"],storage:window.localStorage,version:1,cleanup:()=>{try{const e=localStorage.getItem("AuthStore");if(e){const r=JSON.parse(e);(!r.version||r.version!==H.version)&&localStorage.removeItem("AuthStore")}}catch(e){localStorage.removeItem("AuthStore")}}};V(I,H);const E=L({theme:"system",systemTheme:"light",setTheme(e){this.theme=e,this.applyTheme()},detectSystemTheme(){const e=window.matchMedia("(prefers-color-scheme: dark)");d(()=>{this.systemTheme=e.matches?"dark":"light"}),e.onchange=r=>{d(()=>{this.systemTheme=r.matches?"dark":"light",this.theme==="system"&&this.applyTheme()})},this.applyTheme()},applyTheme(){const e=document.documentElement;let r=this.theme;this.theme==="system"&&(r=this.systemTheme),e.classList.remove("light","dark"),e.classList.add(r)}});V(E,{name:"themeStore",properties:["theme","systemTheme"],storage:window.localStorage}).then(()=>{E.detectSystemTheme()});const C={LOGIN:"/login",REFRESH:"/refresh",LOGOUT:"/logout",POSTS:"/posts",POST_DETAIL:e=>`/posts/${e}`,CATEGORIES:"/categories",TAGS:"/tags",UPLOAD_IMAGE:"/upload/image"},be=e=>({method:"GET",url:C.POSTS,params:e}),ye=e=>({method:"GET",url:C.POST_DETAIL(e)}),Te=()=>({method:"GET",url:C.CATEGORIES}),we=()=>({method:"GET",url:C.TAGS}),m=[{id:"1",name:"前端开发",slug:"frontend",icon:"Monitor",postCount:3,sortOrder:1},{id:"2",name:"后端架构",slug:"backend",icon:"Server",postCount:2,sortOrder:2},{id:"3",name:"DevOps",slug:"devops",icon:"Container",postCount:1,sortOrder:3},{id:"4",name:"随想杂谈",slug:"thoughts",icon:"Lightbulb",postCount:1,sortOrder:4}],l=[{id:"1",name:"React",slug:"react",color:"#61dafb",postCount:2},{id:"2",name:"TypeScript",slug:"typescript",color:"#3178c6",postCount:3},{id:"3",name:"Vite",slug:"vite",color:"#646cff",postCount:1},{id:"4",name:"Node.js",slug:"nodejs",color:"#339933",postCount:2},{id:"5",name:"Docker",slug:"docker",color:"#2496ed",postCount:1},{id:"6",name:"Go",slug:"go",color:"#00add8",postCount:1},{id:"7",name:"性能优化",slug:"performance",color:"#f97316",postCount:1},{id:"8",name:"MobX",slug:"mobx",color:"#ff9955",postCount:1}],x=[{id:"1",title:"React 19 新特性深度解析",slug:"react-19-new-features",excerpt:"本文深入探讨 React 19 带来的重大更新，包括新的并发特性、Server Components 的成熟以及性能提升等方面...",content:`## React 19 新特性深度解析

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
`,category:m[0],tags:[l[0],l[1]],author:"Hope",status:"published",publishedAt:"2025-04-15T08:00:00Z",updatedAt:"2025-04-15T08:00:00Z",readingTime:8,viewCount:256},{id:"2",title:"TypeScript 高级类型体操实战指南",slug:"typescript-advanced-types-guide",excerpt:"掌握 TypeScript 高级类型是写出优雅、类型安全代码的关键。本文通过实际案例，带你一步步掌握条件类型、映射类型等高级技巧...",content:`## TypeScript 高级类型体操实战指南

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
`,category:m[0],tags:[l[1]],author:"Hope",status:"published",publishedAt:"2025-04-10T08:00:00Z",updatedAt:"2025-04-12T08:00:00Z",readingTime:12,viewCount:189},{id:"3",title:"Vite 构建优化与插件开发",slug:"vite-build-optimization-and-plugins",excerpt:"Vite 作为新一代前端构建工具，其插件系统和优化策略值得深入了解。本文将分享 Vite 构建优化的实践经验和插件开发技巧...",content:`## Vite 构建优化与插件开发

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
`,category:m[0],tags:[l[2],l[1]],author:"Hope",status:"published",publishedAt:"2025-03-28T08:00:00Z",updatedAt:"2025-03-28T08:00:00Z",readingTime:10,viewCount:142},{id:"4",title:"Node.js 微服务架构实践",slug:"nodejs-microservice-architecture",excerpt:"微服务架构是现代后端开发的重要模式。本文将分享如何使用 Node.js 构建可扩展的微服务系统，包括服务拆分、通信和部署...",content:`## Node.js 微服务架构实践

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
`,category:m[1],tags:[l[3]],author:"Hope",status:"published",publishedAt:"2025-03-15T08:00:00Z",updatedAt:"2025-03-16T08:00:00Z",readingTime:15,viewCount:98},{id:"5",title:"Go 语言并发编程：goroutine 与 channel",slug:"go-concurrency-goroutine-channel",excerpt:"Go 语言的并发模型是其最强大的特性之一。本文将深入讲解 goroutine 和 channel 的使用，以及常见的并发模式...",content:`## Go 语言并发编程：goroutine 与 channel

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
`,category:m[1],tags:[l[5]],author:"Hope",status:"published",publishedAt:"2025-03-01T08:00:00Z",updatedAt:"2025-03-01T08:00:00Z",readingTime:11,viewCount:76},{id:"6",title:"Docker 容器化部署最佳实践",slug:"docker-deployment-best-practices",excerpt:"Docker 是现代应用部署的核心工具。本文将分享 Docker 容器化部署的最佳实践，包括镜像优化、多阶段构建和编排策略...",content:`## Docker 容器化部署最佳实践

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
`,category:m[2],tags:[l[4]],author:"Hope",status:"published",publishedAt:"2025-02-20T08:00:00Z",updatedAt:"2025-02-20T08:00:00Z",readingTime:9,viewCount:112},{id:"7",title:"MobX 状态管理：从入门到精通",slug:"mobx-state-management-guide",excerpt:"MobX 是一个简单、可扩展的状态管理库。本文将带你从基础概念到高级用法，全面掌握 MobX 在 React 项目中的实践...",content:`## MobX 状态管理：从入门到精通

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
`,category:m[0],tags:[l[0],l[7]],author:"Hope",status:"published",publishedAt:"2025-02-10T08:00:00Z",updatedAt:"2025-02-12T08:00:00Z",readingTime:7,viewCount:203},{id:"8",title:"前端性能优化全攻略",slug:"frontend-performance-optimization",excerpt:"性能优化是前端开发中永恒的话题。本文从加载性能、渲染性能和运行时性能三个维度，全面介绍前端性能优化的策略和工具...",content:`## 前端性能优化全攻略

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
`,category:m[0],tags:[l[6],l[0]],author:"Hope",status:"published",publishedAt:"2025-01-25T08:00:00Z",updatedAt:"2025-01-26T08:00:00Z",readingTime:13,viewCount:321},{id:"9",title:"程序员的自我修养：持续学习与成长",slug:"programmer-self-cultivation",excerpt:"技术更新日新月异，如何保持持续学习的动力？本文分享一些关于学习方法、时间管理和职业发展的思考...",content:`## 程序员的自我修养：持续学习与成长

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
`,category:m[3],tags:[],author:"Hope",status:"published",publishedAt:"2025-01-10T08:00:00Z",updatedAt:"2025-01-10T08:00:00Z",readingTime:6,viewCount:445}],ke=L({posts:[],categories:[],tags:[],currentPost:null,pagination:{currentPage:1,pageSize:10,totalPosts:0,totalPages:0},selectedCategory:null,selectedTag:null,searchQuery:"",loading:!1,error:null,setPosts(e){this.posts=e},setCategories(e){this.categories=e},setTags(e){this.tags=e},setCurrentPost(e){this.currentPost=e},setPagination(e){this.pagination=v(v({},this.pagination),e)},setSelectedCategory(e){this.selectedCategory=e,this.pagination.currentPage=1},setSelectedTag(e){this.selectedTag=e,this.pagination.currentPage=1},setSearchQuery(e){this.searchQuery=e,this.pagination.currentPage=1},setLoading(e){this.loading=e},setError(e){this.error=e},get filteredPosts(){let e=this.posts;if(this.selectedCategory&&(e=e.filter(r=>r.category.slug===this.selectedCategory)),this.selectedTag&&(e=e.filter(r=>r.tags.some(o=>o.slug===this.selectedTag))),this.searchQuery){const r=this.searchQuery.toLowerCase();e=e.filter(o=>o.title.toLowerCase().includes(r)||o.excerpt.toLowerCase().includes(r)||o.tags.some(s=>s.name.toLowerCase().includes(r)))}return e},get relatedPosts(){return this.currentPost?this.posts.filter(e=>e.id!==this.currentPost.id&&(e.category.id===this.currentPost.category.id||e.tags.some(r=>this.currentPost.tags.some(o=>o.id===r.id)))).slice(0,3):[]},async fetchPosts(){try{this.setLoading(!0),this.setError(null);const{data:e}=await g.request(be());d(()=>{this.setPosts(e||x),this.setPagination({totalPosts:(e||x).length,totalPages:Math.ceil((e||x).length/this.pagination.pageSize)})})}catch(e){d(()=>{this.setPosts(x),this.setPagination({totalPosts:x.length,totalPages:Math.ceil(x.length/this.pagination.pageSize)})})}finally{d(()=>{this.setLoading(!1)})}},async fetchPostBySlug(e){try{this.setLoading(!0),this.setError(null);const{data:r}=await g.request(ye(e));d(()=>{this.setCurrentPost(r||x.find(o=>o.slug===e)||null)})}catch(r){d(()=>{this.setCurrentPost(x.find(o=>o.slug===e)||null)})}finally{d(()=>{this.setLoading(!1)})}},async fetchCategories(){try{const{data:e}=await g.request(Te());d(()=>{this.setCategories(e||m)})}catch(e){d(()=>{this.setCategories(m)})}},async fetchTags(){try{const{data:e}=await g.request(we());d(()=>{this.setTags(e||l)})}catch(e){d(()=>{this.setTags(l)})}},clearFilters(){this.selectedCategory=null,this.selectedTag=null,this.searchQuery="",this.pagination.currentPage=1}}),Se={authStore:I,themeStore:E,blogStore:ke},Pe=()=>{const e=a.useContext(ne);if(!e)throw new Error("useStores must be used within a MobXProviderContext.Provider");return e.store||e},Ce="modulepreload",je=function(e){return"/hope/"+e},M={},w=function(r,o,s){let n=Promise.resolve();if(o&&o.length>0){let h=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),O=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));n=h(o.map(p=>{if(p=je(p),p in M)return;M[p]=!0;const y=p.endsWith(".css"),k=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${k}`))return;const f=document.createElement("link");if(f.rel=y?"stylesheet":Ce,y||(f.as="script"),f.crossOrigin="",f.href=p,O&&f.setAttribute("nonce",O),document.head.appendChild(f),y)return new Promise((U,F)=>{f.addEventListener("load",U),f.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(h){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=h,window.dispatchEvent(c),!c.defaultPrevented)throw h}return n.then(h=>{for(const c of h||[])c.status==="rejected"&&i(c.reason);return r().catch(i)})};function u(...e){return G(q(e))}const Z=({url:e="https://github.com/heartfeltfy"})=>t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:u("text-slate-600 hover:text-indigo-600","dark:text-slate-200 dark:hover:text-indigo-400","rounded-full p-2","hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60","transition-all duration-300","flex items-center justify-center"),"aria-label":"GitHub",children:t.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor",children:t.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})});function Ee({navList:e}){return t.jsxs("div",{className:"hidden sm:flex items-center space-x-2",children:[e.map(r=>t.jsx(A,{to:r.path,className:u("text-sm font-medium tracking-wide cursor-pointer px-3 py-2 rounded-md transition-colors duration-200","text-slate-600 dark:text-slate-200","hover:text-indigo-600 dark:hover:text-indigo-400","hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60"),children:r.name},r.name)),t.jsx("div",{className:"ml-2 pl-2 border-l border-slate-200 dark:border-zinc-700",children:t.jsx(Z,{})})]})}const Ae=({isOpen:e,navList:r})=>t.jsx("div",{className:u("sm:hidden","absolute left-0 right-0","w-full bg-linear-to-b from-blue-50/95 to-white/95 backdrop-blur-sm","dark:bg-linear-to-b dark:from-zinc-900/95 dark:to-zinc-800/95 dark:backdrop-blur-sm","border-t border-slate-200/70 dark:border-zinc-700/70","shadow-lg","transition-all duration-300 ease-in-out","z-40","top-full",e?"opacity-100 translate-y-0":"opacity-0 -translate-y-2",!e&&"invisible"),style:{transformOrigin:"top"},children:t.jsx("ul",{className:u("flex flex-col","divide-y divide-slate-100 dark:divide-zinc-700","text-slate-600 dark:text-slate-200","max-w-7xl mx-auto","max-h-[calc(100vh-100%)]","overflow-y-auto"),children:r.map(o=>t.jsx("li",{children:t.jsx(A,{to:o.path,className:u("py-4 px-8","text-sm tracking-wide","cursor-pointer","hover:bg-indigo-50/50 hover:text-indigo-600","dark:hover:bg-zinc-800/60 dark:hover:text-indigo-400","transition-colors duration-300","flex items-center justify-center","font-medium","w-full"),children:o.name})},o.path))})}),Le=({isOpen:e,onClick:r,className:o})=>t.jsx("button",{className:u("block z-50 cursor-pointer p-2 rounded-md","text-slate-600 hover:text-indigo-600","hover:bg-indigo-50/60","dark:text-slate-200 dark:hover:text-indigo-400","dark:hover:bg-zinc-800/60","transition-all duration-300",o),onClick:r,"aria-expanded":e,"aria-label":e?"关闭菜单":"打开菜单",children:t.jsx("svg",{className:u("w-6 h-6 transition-transform duration-300",e&&"rotate-90"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})});function Ie(){return t.jsxs(A,{to:"/",className:u("flex items-center space-x-2 group"),children:[t.jsx("div",{className:u("w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm","bg-linear-to-br from-indigo-500 to-purple-600","dark:from-zinc-700 dark:to-zinc-900"),children:"H"}),t.jsx("h1",{className:u("text-xl sm:text-2xl font-bold","tracking-wider","font-['Montserrat',sans-serif]","bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent","group-hover:from-indigo-500 group-hover:to-purple-500","transition-all duration-300","dark:from-zinc-200 dark:to-zinc-400 dark:group-hover:from-zinc-100 dark:group-hover:to-zinc-300"),children:"HOPE"})]})}function B(...e){return G(q(e))}function Oe(r){var e=S(r,[]);return t.jsx(Q,v({"data-slot":"dropdown-menu"},e))}function ze(r){var e=S(r,[]);return t.jsx(W,v({"data-slot":"dropdown-menu-trigger"},e))}function Ne(s){var n=s,{className:e,sideOffset:r=4}=n,o=S(n,["className","sideOffset"]);return t.jsx($,{children:t.jsx(K,v({"data-slot":"dropdown-menu-content",sideOffset:r,className:B("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",e)},o))})}function _e(n){var i=n,{className:e,inset:r,variant:o="default"}=i,s=S(i,["className","inset","variant"]);return t.jsx(Y,v({"data-slot":"dropdown-menu-item","data-inset":r,"data-variant":o,className:B("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e)},s))}const Re=ie(()=>{const{themeStore:e}=Pe(),r=[{value:"light",label:"浅色",icon:t.jsx(ce,{className:"w-4 h-4"})},{value:"dark",label:"深色",icon:t.jsx(de,{className:"w-4 h-4"})},{value:"system",label:`跟随系统（当前：${e.systemTheme==="dark"?"深色":"浅色"}）`,icon:t.jsx(ue,{className:"w-4 h-4"})}],o=r.find(s=>s.value===e.theme);return t.jsxs(Oe,{modal:!1,children:[t.jsx(ze,{asChild:!0,children:t.jsx("button",{className:"flex items-center gap-2 px-3 py-2 rounded-md border bg-background hover:bg-accent transition","aria-label":"切换主题",children:o==null?void 0:o.icon})}),t.jsx(Ne,{align:"center",sideOffset:4,className:"flex gap-2",children:r.map(s=>t.jsx(_e,{onClick:()=>e.setTheme(s.value),className:e.theme===s.value?"font-bold bg-accent text-accent-foreground":"",children:s.icon},s.value))})]})}),D=[{name:"首页",path:"/"},{name:"博客",path:"/blog"},{name:"生活记录",path:"/life"},{name:"AI 智能问答",path:"/ai"}],Me=()=>{const[e,r]=a.useState(!1),[o,s]=a.useState(!1),n=a.useCallback(()=>{r(i=>!i)},[]);return a.useEffect(()=>{const i=()=>{window.innerWidth>=1024&&r(!1)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),a.useEffect(()=>{const i=()=>{s(window.scrollY>10)};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),t.jsxs("header",{className:u("sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b",o?"bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-md backdrop-blur-sm dark:bg-linear-to-r dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 dark:shadow-lg border-b border-slate-200/80 dark:border-zinc-700/80":"bg-linear-to-r from-white via-slate-50 to-white dark:bg-linear-to-r dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-b border-slate-200/80 dark:border-zinc-700/80"),children:[t.jsxs("nav",{className:u("flex justify-between items-center","h-16 px-4 md:px-6 py-4","max-w-6xl mx-auto","transition-all duration-300"),"aria-label":"Main navigation",children:[t.jsx(Ie,{}),t.jsxs("div",{className:"flex",children:[t.jsx(Ee,{navList:D}),t.jsx(Re,{}),t.jsxs("div",{className:"flex sm:hidden items-center space-x-1",children:[t.jsx(Z,{}),t.jsx(Le,{isOpen:e,onClick:n})]})]})]}),t.jsx(Ae,{isOpen:e,navList:D})]})};function De(){const[e,r]=a.useState(new Date);a.useEffect(()=>{const s=setInterval(()=>{r(new Date)},1e3);return()=>clearInterval(s)},[]);const o=s=>s.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return t.jsx("footer",{className:"py-6 text-center bg-white dark:bg-zinc-900 transition-colors duration-300",children:t.jsxs("div",{className:"container mx-auto",children:[t.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:"每一个今天都是成就明天的起点"}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",o(e)," 让我们一起创造美好未来"]})]})})}function Ge(){const{pathname:e,search:r,hash:o}=J();return a.useEffect(()=>{if(window.scrollTo({top:0,left:0,behavior:"smooth"}),o){const s=decodeURIComponent(o.replace("#","")),n=document.getElementById(s);n&&n.scrollIntoView({behavior:"smooth"})}},[e,r,o]),null}const qe=()=>t.jsxs("div",{className:"min-h-screen flex flex-col",children:[t.jsx(Ge,{}),t.jsx(Me,{}),t.jsx("main",{className:"flex-1",children:t.jsx(ee,{})}),t.jsx(De,{})]}),Ve=()=>t.jsx("div",{className:"fixed inset-0 z-50 flex justify-center items-center bg-white dark:bg-zinc-900 transition-colors duration-300",children:t.jsx("div",{className:`\r
          w-[50px] h-[50px] rounded-full\r
          border-4 border-slate-200 border-t-blue-400\r
          dark:border-zinc-700 dark:border-t-blue-500\r
          animate-spin\r
        `})}),T=({element:e,fallback:r})=>t.jsx(a.Suspense,{fallback:r||t.jsx(Ve,{}),children:e}),He=a.lazy(()=>w(()=>import("./Home.DAK2zcMc.js"),__vite__mapDeps([0,1,2]))),Ze=a.lazy(()=>w(()=>import("./index.BMZwLDMK.js"),__vite__mapDeps([3,1,2,4,5]))),Be=a.lazy(()=>w(()=>import("./PostDetail.D0R6QyMU.js"),__vite__mapDeps([6,1,2,4,5]))),Ue=a.lazy(()=>w(()=>import("./Life.D5_XW1nS.js"),__vite__mapDeps([7,1]))),Fe=a.lazy(()=>w(()=>import("./AiChat.msP_gDqc.js"),__vite__mapDeps([8,1,2,5,4]))),Xe=a.lazy(()=>w(()=>import("./NotFound.Cq50rYn5.js"),__vite__mapDeps([9,1]))),Qe=[{path:"/",element:t.jsx(qe,{}),children:[{index:!0,element:t.jsx(T,{element:t.jsx(He,{})})},{path:"blog",element:t.jsx(T,{element:t.jsx(Ze,{})})},{path:"blog/:slug",element:t.jsx(T,{element:t.jsx(Be,{})})},{path:"life",element:t.jsx(T,{element:t.jsx(Ue,{})})},{path:"ai",element:t.jsx(T,{element:t.jsx(Fe,{})})},{path:"about",element:t.jsx(j,{to:"/life",replace:!0})},{path:"posts",element:t.jsx(j,{to:"/blog",replace:!0})},{path:"*",element:t.jsx(T,{element:t.jsx(Xe,{})})}]},{path:"/chat",element:t.jsx(j,{to:"/ai",replace:!0})}],We=te(Qe,{basename:"/hope"});function $e(){return t.jsx(re,{router:We})}oe.createRoot(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsxs(ae,{store:Se,children:[t.jsx(se,{}),t.jsx($e,{})]})}));export{B as a,I as b,u as c,Pe as u};
