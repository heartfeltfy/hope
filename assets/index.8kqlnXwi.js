const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home.DOyC7OmK.js","assets/vendor.J-r1jg1a.js","assets/vendor.Bw3DiFyI.css","assets/mobx.DE0CRLsx.js","assets/vendor-lucide.DiUayyn3.js","assets/vendor-axios.bIC8cyVI.js","assets/index.BT40M3lw.js","assets/PostDetail.M3IBaiQZ.js","assets/index.iK9DcEZ8.js","assets/index.CsMrLLO9.js","assets/NotFound.DSukLmmD.js"])))=>i.map(i=>d[i]);
var J=Object.defineProperty;var E=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var A=(e,t,s)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,v=(e,t)=>{for(var s in t||(t={}))z.call(t,s)&&A(e,s,t[s]);if(E)for(var s of E(t))_.call(t,s)&&A(e,s,t[s]);return e};var P=(e,t)=>{var s={};for(var r in e)z.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&E)for(var r of E(e))t.indexOf(r)<0&&_.call(e,r)&&(s[r]=e[r]);return s};var w=(e,t,s)=>A(e,typeof t!="symbol"?t+"":t,s);import{r as l,t as V,c as H,j as o,L as O,b as Q,T as $,P as K,C as Y,I as ee,u as te,O as se,d as oe,N as L,e as re,f as ne,g as ie}from"./vendor.J-r1jg1a.js";import{m as j,a as q,r as c,M as ae,o as le,P as ce}from"./mobx.DE0CRLsx.js";import{a as de}from"./vendor-axios.bIC8cyVI.js";import{S as ue,M as he,L as me,H as pe}from"./vendor-lucide.DiUayyn3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const ge=window.location.hostname,D=window.location.port,fe=window.location.protocol+"//"+ge+(D?":"+D:"")+"/api",g=de.create({baseURL:fe,timeout:10*1e3}),xe=e=>{const t=N.getToken();t&&(e.headers.Authorization=`Bearer ${t}`)},be=["login","public","refresh"];g.interceptors.request.use(e=>(be.some(s=>{var r;return(r=e.url)==null?void 0:r.includes(s)})||xe(e),e),e=>Promise.reject(e));g.interceptors.response.use(e=>e,e=>Promise.reject(e));const ve=e=>({method:"POST",url:"/login",data:e}),ye=e=>({method:"POST",url:"/refresh",data:{refresh_token:e}}),Se=()=>({method:"POST",url:"/logout"});let y=null;const N=j({userInfo:null,isLoggedIn:!1,loading:!1,error:null,setUserInfo(e){this.userInfo=e,this.isLoggedIn=!!e,e?this.startAutoLogoutTimer():y&&clearTimeout(y)},setLoading(e){this.loading=e},setError(e){typeof e=="string"?this.error=e:e?this.error=e.message:this.error=null},async login(e,t){try{if(this.setLoading(!0),this.setError(null),!e||!t)throw new Error("用户名和密码不能为空");const{data:s}=await g.request(ve({username:e,password:t}));if(!s||!s.access_token)throw new Error("登录失败，未获取到有效的 token");this.setUserInfo(s)}catch(s){throw s instanceof Error?this.setError(s.message):this.setError("登录失败"),s}finally{this.setLoading(!1)}},async refresh(){try{if(this.setLoading(!0),this.setError(null),!this.userInfo||!this.userInfo.refresh_token)throw new Error("刷新令牌不能为空");const{data:e}=await g.request(ye(this.userInfo.refresh_token));if(!e||!e.access_token)throw new Error("刷新失败，未获取到有效的 token");this.setUserInfo(e)}catch(e){throw e instanceof Error?this.setError(e.message):this.setError("刷新失败"),e}finally{this.setLoading(!1)}},async logout(){try{this.setLoading(!0),this.setError(null);const{data:e}=await g.request(Se());console.log(e),this.reset()}catch(e){console.error("登出时发生错误:",e)}},getUserInfo(){return this.userInfo},getToken(){var e;return(e=this.userInfo)==null?void 0:e.access_token},startAutoLogoutTimer(e=1800*1e3){y&&clearTimeout(y),y=setTimeout(()=>{this.logout()},e)},reset(){this.userInfo=null,this.isLoggedIn=!1,this.loading=!1,this.error=null,y&&clearTimeout(y)}}),Z={name:"AuthStore",properties:["userInfo","isLoggedIn"],storage:window.localStorage,version:1,cleanup:()=>{try{const e=localStorage.getItem("AuthStore");if(e){const t=JSON.parse(e);(!t.version||t.version!==Z.version)&&localStorage.removeItem("AuthStore")}}catch(e){localStorage.removeItem("AuthStore")}}};q(N,Z);const R=j({theme:"system",systemTheme:"light",setTheme(e){this.theme=e,this.applyTheme()},detectSystemTheme(){const e=window.matchMedia("(prefers-color-scheme: dark)");c(()=>{this.systemTheme=e.matches?"dark":"light"}),e.onchange=t=>{c(()=>{this.systemTheme=t.matches?"dark":"light",this.theme==="system"&&this.applyTheme()})},this.applyTheme()},applyTheme(){const e=document.documentElement;let t=this.theme;this.theme==="system"&&(t=this.systemTheme),e.classList.remove("light","dark"),e.classList.add(t)}});q(R,{name:"themeStore",properties:["theme","systemTheme"],storage:window.localStorage}).then(()=>{R.detectSystemTheme()});const I={LOGIN:"/login",REFRESH:"/refresh",LOGOUT:"/logout",POSTS:"/posts",POST_DETAIL:e=>`/posts/${e}`,CATEGORIES:"/categories",TAGS:"/tags",UPLOAD_IMAGE:"/upload/image"},we=e=>({method:"GET",url:I.POSTS,params:e}),Te=e=>({method:"GET",url:I.POST_DETAIL(e)}),ke=()=>({method:"GET",url:I.CATEGORIES}),Ce=()=>({method:"GET",url:I.TAGS}),p=[{id:"1",name:"前端开发",slug:"frontend",icon:"Monitor",postCount:3,sortOrder:1},{id:"2",name:"后端架构",slug:"backend",icon:"Server",postCount:2,sortOrder:2},{id:"3",name:"DevOps",slug:"devops",icon:"Container",postCount:1,sortOrder:3},{id:"4",name:"随想杂谈",slug:"thoughts",icon:"Lightbulb",postCount:1,sortOrder:4}],u=[{id:"1",name:"React",slug:"react",color:"#61dafb",postCount:2},{id:"2",name:"TypeScript",slug:"typescript",color:"#3178c6",postCount:3},{id:"3",name:"Vite",slug:"vite",color:"#646cff",postCount:1},{id:"4",name:"Node.js",slug:"nodejs",color:"#339933",postCount:2},{id:"5",name:"Docker",slug:"docker",color:"#2496ed",postCount:1},{id:"6",name:"Go",slug:"go",color:"#00add8",postCount:1},{id:"7",name:"性能优化",slug:"performance",color:"#f97316",postCount:1},{id:"8",name:"MobX",slug:"mobx",color:"#ff9955",postCount:1}],b=[{id:"1",title:"React 19 新特性深度解析",slug:"react-19-new-features",excerpt:"本文深入探讨 React 19 带来的重大更新，包括新的并发特性、Server Components 的成熟以及性能提升等方面...",content:`## React 19 新特性深度解析

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
`,category:p[0],tags:[u[0],u[1]],author:"Hope",status:"published",publishedAt:"2025-04-15T08:00:00Z",updatedAt:"2025-04-15T08:00:00Z",readingTime:8,viewCount:256},{id:"2",title:"TypeScript 高级类型体操实战指南",slug:"typescript-advanced-types-guide",excerpt:"掌握 TypeScript 高级类型是写出优雅、类型安全代码的关键。本文通过实际案例，带你一步步掌握条件类型、映射类型等高级技巧...",content:`## TypeScript 高级类型体操实战指南

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
`,category:p[0],tags:[u[1]],author:"Hope",status:"published",publishedAt:"2025-04-10T08:00:00Z",updatedAt:"2025-04-12T08:00:00Z",readingTime:12,viewCount:189},{id:"3",title:"Vite 构建优化与插件开发",slug:"vite-build-optimization-and-plugins",excerpt:"Vite 作为新一代前端构建工具，其插件系统和优化策略值得深入了解。本文将分享 Vite 构建优化的实践经验和插件开发技巧...",content:`## Vite 构建优化与插件开发

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
`,category:p[0],tags:[u[2],u[1]],author:"Hope",status:"published",publishedAt:"2025-03-28T08:00:00Z",updatedAt:"2025-03-28T08:00:00Z",readingTime:10,viewCount:142},{id:"4",title:"Node.js 微服务架构实践",slug:"nodejs-microservice-architecture",excerpt:"微服务架构是现代后端开发的重要模式。本文将分享如何使用 Node.js 构建可扩展的微服务系统，包括服务拆分、通信和部署...",content:`## Node.js 微服务架构实践

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
`,category:p[1],tags:[u[3]],author:"Hope",status:"published",publishedAt:"2025-03-15T08:00:00Z",updatedAt:"2025-03-16T08:00:00Z",readingTime:15,viewCount:98},{id:"5",title:"Go 语言并发编程：goroutine 与 channel",slug:"go-concurrency-goroutine-channel",excerpt:"Go 语言的并发模型是其最强大的特性之一。本文将深入讲解 goroutine 和 channel 的使用，以及常见的并发模式...",content:`## Go 语言并发编程：goroutine 与 channel

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
`,category:p[1],tags:[u[5]],author:"Hope",status:"published",publishedAt:"2025-03-01T08:00:00Z",updatedAt:"2025-03-01T08:00:00Z",readingTime:11,viewCount:76},{id:"6",title:"Docker 容器化部署最佳实践",slug:"docker-deployment-best-practices",excerpt:"Docker 是现代应用部署的核心工具。本文将分享 Docker 容器化部署的最佳实践，包括镜像优化、多阶段构建和编排策略...",content:`## Docker 容器化部署最佳实践

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
`,category:p[2],tags:[u[4]],author:"Hope",status:"published",publishedAt:"2025-02-20T08:00:00Z",updatedAt:"2025-02-20T08:00:00Z",readingTime:9,viewCount:112},{id:"7",title:"MobX 状态管理：从入门到精通",slug:"mobx-state-management-guide",excerpt:"MobX 是一个简单、可扩展的状态管理库。本文将带你从基础概念到高级用法，全面掌握 MobX 在 React 项目中的实践...",content:`## MobX 状态管理：从入门到精通

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
`,category:p[0],tags:[u[0],u[7]],author:"Hope",status:"published",publishedAt:"2025-02-10T08:00:00Z",updatedAt:"2025-02-12T08:00:00Z",readingTime:7,viewCount:203},{id:"8",title:"前端性能优化全攻略",slug:"frontend-performance-optimization",excerpt:"性能优化是前端开发中永恒的话题。本文从加载性能、渲染性能和运行时性能三个维度，全面介绍前端性能优化的策略和工具...",content:`## 前端性能优化全攻略

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
`,category:p[0],tags:[u[6],u[0]],author:"Hope",status:"published",publishedAt:"2025-01-25T08:00:00Z",updatedAt:"2025-01-26T08:00:00Z",readingTime:13,viewCount:321},{id:"9",title:"程序员的自我修养：持续学习与成长",slug:"programmer-self-cultivation",excerpt:"技术更新日新月异，如何保持持续学习的动力？本文分享一些关于学习方法、时间管理和职业发展的思考...",content:`## 程序员的自我修养：持续学习与成长

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
`,category:p[3],tags:[],author:"Hope",status:"published",publishedAt:"2025-01-10T08:00:00Z",updatedAt:"2025-01-10T08:00:00Z",readingTime:6,viewCount:445}],Pe=j({posts:[],categories:[],tags:[],currentPost:null,pagination:{currentPage:1,pageSize:10,totalPosts:0,totalPages:0},selectedCategory:null,selectedTag:null,searchQuery:"",loading:!1,error:null,setPosts(e){this.posts=e},setCategories(e){this.categories=e},setTags(e){this.tags=e},setCurrentPost(e){this.currentPost=e},setPagination(e){this.pagination=v(v({},this.pagination),e)},setSelectedCategory(e){this.selectedCategory=e,this.pagination.currentPage=1},setSelectedTag(e){this.selectedTag=e,this.pagination.currentPage=1},setSearchQuery(e){this.searchQuery=e,this.pagination.currentPage=1},setLoading(e){this.loading=e},setError(e){this.error=e},get filteredPosts(){let e=this.posts;if(this.selectedCategory&&(e=e.filter(t=>t.category.slug===this.selectedCategory)),this.selectedTag&&(e=e.filter(t=>t.tags.some(s=>s.slug===this.selectedTag))),this.searchQuery){const t=this.searchQuery.toLowerCase();e=e.filter(s=>s.title.toLowerCase().includes(t)||s.excerpt.toLowerCase().includes(t)||s.tags.some(r=>r.name.toLowerCase().includes(t)))}return e},get relatedPosts(){return this.currentPost?this.posts.filter(e=>e.id!==this.currentPost.id&&(e.category.id===this.currentPost.category.id||e.tags.some(t=>this.currentPost.tags.some(s=>s.id===t.id)))).slice(0,3):[]},get prevPost(){if(!this.currentPost)return null;const e=this.posts.findIndex(t=>t.id===this.currentPost.id);return e>0?this.posts[e-1]:null},get nextPost(){if(!this.currentPost)return null;const e=this.posts.findIndex(t=>t.id===this.currentPost.id);return e<this.posts.length-1?this.posts[e+1]:null},async fetchPosts(){try{this.setLoading(!0),this.setError(null);const{data:e}=await g.request(we());c(()=>{this.setPosts(e||b),this.setPagination({totalPosts:(e||b).length,totalPages:Math.ceil((e||b).length/this.pagination.pageSize)})})}catch(e){c(()=>{this.setPosts(b),this.setPagination({totalPosts:b.length,totalPages:Math.ceil(b.length/this.pagination.pageSize)})})}finally{c(()=>{this.setLoading(!1)})}},async fetchPostBySlug(e){try{this.setLoading(!0),this.setError(null);const{data:t}=await g.request(Te(e));c(()=>{this.setCurrentPost(t||b.find(s=>s.slug===e)||null)})}catch(t){c(()=>{this.setCurrentPost(b.find(s=>s.slug===e)||null)})}finally{c(()=>{this.setLoading(!1)})}},async fetchCategories(){try{const{data:e}=await g.request(ke());c(()=>{this.setCategories(e||p)})}catch(e){c(()=>{this.setCategories(p)})}},async fetchTags(){try{const{data:e}=await g.request(Ce());c(()=>{this.setTags(e||u)})}catch(e){c(()=>{this.setTags(u)})}},clearFilters(){this.selectedCategory=null,this.selectedTag=null,this.searchQuery="",this.pagination.currentPage=1}}),je=[{id:"1",date:"2025-05-01",title:"五一假期，去了趟海边",content:"终于等到假期，和朋友一起去了海边。海风拂面，浪花拍岸，所有的疲惫都被冲散了。日落时分，天空被染成了橘红色，美得让人窒息。",images:[{id:"1-1",url:"https://picsum.photos/seed/sea1/800/600",alt:"海边日落",thumbnailUrl:"https://picsum.photos/seed/sea1/400/300"},{id:"1-2",url:"https://picsum.photos/seed/sea2/800/600",alt:"沙滩漫步",thumbnailUrl:"https://picsum.photos/seed/sea2/400/300"}],tags:["旅行","海边","假期"],mood:"happy"},{id:"2",date:"2025-04-20",title:"周末的咖啡时光",content:"在一个安静的角落，点了一杯拿铁，翻开一本很久没读的书。窗外的阳光透过玻璃洒在桌面上，时间仿佛慢了下来。偶尔抬头看看窗外的行人，也是一种别样的享受。",images:[{id:"2-1",url:"https://picsum.photos/seed/coffee1/800/600",alt:"咖啡时光",thumbnailUrl:"https://picsum.photos/seed/coffee1/400/300"}],tags:["咖啡","阅读","周末"],mood:"peaceful"},{id:"3",date:"2025-04-12",title:"第一次尝试做蛋糕",content:"跟着视频教程，第一次尝试做了戚风蛋糕。虽然外形不太完美，但味道出乎意料地好！烘焙的过程让人很放松，看着面糊在烤箱里慢慢膨胀，有一种小小的成就感。",images:[{id:"3-1",url:"https://picsum.photos/seed/cake1/800/600",alt:"自制蛋糕",thumbnailUrl:"https://picsum.photos/seed/cake1/400/300"},{id:"3-2",url:"https://picsum.photos/seed/cake2/800/600",alt:"烘焙过程",thumbnailUrl:"https://picsum.photos/seed/cake2/400/300"},{id:"3-3",url:"https://picsum.photos/seed/cake3/800/600",alt:"成品展示",thumbnailUrl:"https://picsum.photos/seed/cake3/400/300"}],tags:["烘焙","美食","生活"],mood:"excited"},{id:"4",date:"2025-04-05",title:"清明踏青",content:"清明时节，和家人一起去郊外踏青。春意盎然，桃花盛开，空气中弥漫着泥土和花草的清香。走在乡间小路上，感受着大自然的生机与活力。",images:[{id:"4-1",url:"https://picsum.photos/seed/spring1/800/600",alt:"春日踏青",thumbnailUrl:"https://picsum.photos/seed/spring1/400/300"},{id:"4-2",url:"https://picsum.photos/seed/spring2/800/600",alt:"桃花盛开",thumbnailUrl:"https://picsum.photos/seed/spring2/400/300"}],tags:["踏青","春天","家人"],mood:"grateful"},{id:"5",date:"2025-03-28",title:"深夜的代码与思考",content:"凌晨两点，终于解决了一个困扰了好几天的技术难题。当测试通过的那一刻，所有的疲惫都值了。写代码就像解谜，每一个 bug 都是一个待解的谜题，而找到答案的那一刻，就是最好的奖励。",images:[],tags:["编程","深夜","思考"],mood:"thoughtful"},{id:"6",date:"2025-03-15",title:"春日跑步计划启动",content:"天气渐暖，开始了今年的跑步计划。清晨的公园里，空气清新，鸟鸣声声。跑了三公里，虽然有些喘，但出了汗之后整个人都精神了很多。坚持就是胜利！",images:[{id:"6-1",url:"https://picsum.photos/seed/run1/800/600",alt:"晨跑",thumbnailUrl:"https://picsum.photos/seed/run1/400/300"}],tags:["运动","跑步","健康"],mood:"excited"},{id:"7",date:"2025-03-01",title:"读完了《人类简史》",content:"花了两周时间终于读完了《人类简史》。书中关于认知革命和虚构故事的论述让我印象深刻。人类之所以能统治地球，不是因为个体的强大，而是因为我们能够通过共同的故事来协作。推荐给每一个对人类命运感兴趣的人。",images:[],tags:["阅读","推荐","思考"],mood:"thoughtful"},{id:"8",date:"2025-02-14",title:"一个人的情人节",content:"情人节没有约会，但也不觉得孤单。给自己买了一束花，做了一顿丰盛的晚餐。学会享受独处的时光，也是一种幸福。爱自己，才是终身浪漫的开始。",images:[{id:"8-1",url:"https://picsum.photos/seed/flower1/800/600",alt:"鲜花",thumbnailUrl:"https://picsum.photos/seed/flower1/400/300"},{id:"8-2",url:"https://picsum.photos/seed/dinner1/800/600",alt:"晚餐",thumbnailUrl:"https://picsum.photos/seed/dinner1/400/300"}],tags:["独处","美食","生活"],mood:"peaceful"},{id:"9",date:"2025-01-28",title:"除夕夜，团圆饭",content:"一年到头最期待的就是这顿团圆饭。妈妈做了满满一桌子菜，爸爸开了一瓶好酒。一家人围坐在一起，聊着过去一年的故事，笑声不断。这就是家的味道。",images:[{id:"9-1",url:"https://picsum.photos/seed/cny1/800/600",alt:"团圆饭",thumbnailUrl:"https://picsum.photos/seed/cny1/400/300"},{id:"9-2",url:"https://picsum.photos/seed/cny2/800/600",alt:"年夜饭",thumbnailUrl:"https://picsum.photos/seed/cny2/400/300"},{id:"9-3",url:"https://picsum.photos/seed/cny3/800/600",alt:"烟花",thumbnailUrl:"https://picsum.photos/seed/cny3/400/300"}],tags:["春节","家人","团圆"],mood:"grateful"}],Ee=j({moments:[],viewMode:"timeline",selectedTag:null,loading:!1,setMoments(e){this.moments=e},setViewMode(e){this.viewMode=e},setSelectedTag(e){this.selectedTag=e},setLoading(e){this.loading=e},get filteredMoments(){return this.selectedTag?this.moments.filter(e=>e.tags.includes(this.selectedTag)):this.moments},get allTags(){const e=new Set;return this.moments.forEach(t=>t.tags.forEach(s=>e.add(s))),Array.from(e)},get galleryImages(){return this.filteredMoments.flatMap(e=>e.images.map(t=>({src:t.url,alt:t.alt,thumbnailUrl:t.thumbnailUrl,momentId:e.id})))},async fetchMoments(){try{this.setLoading(!0),c(()=>{this.setMoments(je)})}finally{c(()=>{this.setLoading(!1)})}},clearFilters(){this.selectedTag=null}}),Ie={你好:"你好！我是 Hope AI 助手，很高兴为你服务 😊 有什么我可以帮助你的吗？",hello:"Hello! I'm Hope AI Assistant. How can I help you today? 😊",你是谁:"我是 Hope AI 助手，一个基于前端静态响应的智能问答助手。目前我还在开发中，未来会接入真正的大语言模型，为你提供更智能的回答！",react:`React 是由 Meta 开发的 JavaScript 前端框架，用于构建用户界面。它的核心特性包括：

1. **组件化开发**：将 UI 拆分为独立的、可复用的组件
2. **虚拟 DOM**：通过虚拟 DOM 提升渲染性能
3. **JSX 语法**：在 JavaScript 中书写类 HTML 模板
4. **Hooks**：React 16.8 引入的函数式编程范式
5. **生态丰富**：React Router、Redux、Next.js 等

目前最新版本是 React 19，带来了 Server Components、改进的并发特性等。`,typescript:`TypeScript 是 JavaScript 的超集，添加了静态类型系统。主要优势：

1. **类型安全**：编译时发现错误，减少运行时 bug
2. **智能提示**：IDE 自动补全和类型检查
3. **可维护性**：类型即文档，代码更易理解
4. **渐进式**：可以逐步引入类型，与 JS 完全兼容

推荐学习路径：基础类型 → 接口和类型别名 → 泛型 → 高级类型 → 类型体操。`,vite:`Vite 是新一代前端构建工具，由 Vue 作者尤雨溪开发。核心特点：

1. **极速开发**：基于原生 ESM 的开发服务器，毫秒级热更新
2. **高效构建**：生产环境使用 Rollup 打包
3. **开箱即用**：支持 TypeScript、JSX、CSS 预处理器等
4. **插件系统**：兼容 Rollup 插件生态

Vite 已成为 React、Vue 等框架的推荐构建工具。`,mobx:`MobX 是一个简单、可扩展的状态管理库。核心理念：

1. **Observable**：可观察的状态，任何修改都会被追踪
2. **Action**：修改状态的唯一方式
3. **Computed**：基于状态自动派生的计算值
4. **Reaction**：状态变化时自动执行的副作用

与 Redux 相比，MobX 更简单直观，代码量更少，适合中小型项目。`,tailwind:`Tailwind CSS 是一个实用优先的 CSS 框架。核心特点：

1. **原子化 CSS**：通过组合小类名构建界面
2. **无需命名**：不再纠结 class 命名
3. **响应式设计**：内置 sm/md/lg/xl 断点
4. **暗色模式**：dark: 前缀轻松支持
5. **按需生成**：只包含使用到的样式

Tailwind CSS v4 带来了全新的引擎和更快的编译速度。`,建议:`作为开发者，我有以下建议：

1. **持续学习**：技术更新快，保持学习热情很重要
2. **动手实践**：看十遍不如写一遍，项目驱动学习
3. **写技术博客**：输出是最好的输入，教是最好的学
4. **参与开源**：阅读优秀源码，提升代码品味
5. **关注健康**：久坐伤身，记得运动和休息

加油！💪`,前端:`前端开发是 Web 开发的重要领域，当前技术趋势：

1. **框架演进**：React 19、Vue 3.5、Svelte 5 各有特色
2. **构建工具**：Vite 成为主流，Turbopack 崛起
3. **AI 赋能**：AI 辅助编码、AI 生成 UI
4. **全栈趋势**：Next.js、Nuxt.js 等 SSR/SSG 框架
5. **性能优化**：Core Web Vitals、边缘计算

前端领域日新月异，保持好奇心是关键！`,编程:`编程是一门创造性的技艺，以下是一些心得：

1. **代码是写给人看的**：可读性 > 简洁性
2. **先让它工作，再让它优雅**：不要过早优化
3. **测试很重要**：好的测试是代码质量的保障
4. **版本控制**：Git 是必备技能
5. **学会搜索**：Google 和 Stack Overflow 是最好的老师

记住：每个大神都曾是新手。坚持写代码，你一定会进步的！🚀`},Ae=`感谢你的提问！目前我还在开发中，暂时只能回答一些预设的问题。你可以试试问我关于 React、TypeScript、Vite、MobX、Tailwind CSS 等技术话题，或者跟我打个招呼 😊

未来我会接入真正的大语言模型，届时可以回答更多问题！`,M=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);class Le{constructor(){w(this,"sessions",[]);w(this,"currentSessionId",null);w(this,"isGenerating",!1);w(this,"streamingContent","");w(this,"streamingMessageId",null);j(this)}get currentSession(){return this.sessions.find(t=>t.id===this.currentSessionId)}get currentMessages(){var t;return((t=this.currentSession)==null?void 0:t.messages)||[]}createSession(){const t={id:M(),title:"新对话",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return this.sessions.unshift(t),this.currentSessionId=t.id,t}deleteSession(t){this.sessions=this.sessions.filter(s=>s.id!==t),this.currentSessionId===t&&(this.currentSessionId=this.sessions.length>0?this.sessions[0].id:null)}switchSession(t){this.currentSessionId=t}sendMessage(t){if(!t.trim()||this.isGenerating)return;let s=this.currentSession;s||(s=this.createSession());const r={id:M(),role:"user",content:t.trim(),timestamp:Date.now()};s.messages.push(r),s.messages.length===1&&(s.title=t.trim().slice(0,20)+(t.trim().length>20?"...":"")),this.isGenerating=!0;const n=this.findResponse(t.trim()),i={id:M(),role:"assistant",content:"",timestamp:Date.now()};s.messages.push(i),this.streamingMessageId=i.id,this.streamingContent="",this.startStreaming(i.id,n)}startStreaming(t,s){const r=[...s];let n=0;const i=()=>{if(n>=r.length){c(()=>{const S=this.currentSession;if(S){const h=S.messages.find(f=>f.id===t);h&&(h.content=s),S.updatedAt=Date.now()}this.isGenerating=!1,this.streamingContent="",this.streamingMessageId=null});return}n++;const a=r.slice(0,n).join("");c(()=>{this.streamingContent=a});const d=r[n-1]===`
`?40:20+Math.random()*25;setTimeout(i,d)};setTimeout(i,300)}findResponse(t){const s=t.toLowerCase();for(const[n,i]of Object.entries(Ie))if(s.includes(n.toLowerCase()))return i;const r=["js","javascript","css","html","node","npm","api","git","docker","go","python"];for(const n of r)if(s.includes(n))return`关于 ${n.toUpperCase()}，这是一个很棒的技术话题！目前我的知识库还在完善中，暂时无法提供详细的解答。不过你可以去官方文档或 MDN 查阅相关资料，那里有最权威的信息。

未来接入大语言模型后，我会能更好地回答这类问题！`;return Ae}clearFilters(){}}const Me=new Le,Re={authStore:N,themeStore:R,blogStore:Pe,lifeStore:Ee,chatStore:Me},Oe=()=>{const e=l.useContext(ae);if(!e)throw new Error("useStores must be used within a MobXProviderContext.Provider");return e.store||e},Ne="modulepreload",ze=function(e){return"/hope/"+e},U={},k=function(t,s,r){let n=Promise.resolve();if(s&&s.length>0){let a=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),S=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));n=a(s.map(h=>{if(h=ze(h),h in U)return;U[h]=!0;const f=h.endsWith(".css"),C=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${C}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":Ne,f||(x.as="script"),x.crossOrigin="",x.href=h,S&&x.setAttribute("nonce",S),document.head.appendChild(x),f)return new Promise((X,W)=>{x.addEventListener("load",X),x.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return n.then(a=>{for(const d of a||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})};function m(...e){return V(H(e))}const B=({url:e="https://github.com/heartfeltfy"})=>o.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:m("text-slate-600 hover:text-indigo-600","dark:text-slate-200 dark:hover:text-indigo-400","rounded-full p-2","hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60","transition-all duration-300","flex items-center justify-center"),"aria-label":"GitHub",children:o.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor",children:o.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})});function _e({navList:e}){return o.jsxs("div",{className:"hidden sm:flex items-center space-x-2",children:[e.map(t=>o.jsx(O,{to:t.path,className:m("text-sm font-medium tracking-wide cursor-pointer px-3 py-2 rounded-md transition-colors duration-200","text-slate-600 dark:text-slate-200","hover:text-indigo-600 dark:hover:text-indigo-400","hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60"),children:t.name},t.name)),o.jsx("div",{className:"ml-2 pl-2 border-l border-slate-200 dark:border-zinc-700",children:o.jsx(B,{})})]})}const De=({isOpen:e,navList:t,onNavClick:s})=>o.jsx("div",{className:m("sm:hidden","absolute left-0 right-0","w-full bg-linear-to-b from-blue-50/95 to-white/95 backdrop-blur-sm","dark:bg-linear-to-b dark:from-zinc-900/95 dark:to-zinc-800/95 dark:backdrop-blur-sm","border-t border-slate-200/70 dark:border-zinc-700/70","shadow-lg","transition-all duration-300 ease-in-out","z-40","top-full",e?"opacity-100 translate-y-0":"opacity-0 -translate-y-2",!e&&"invisible pointer-events-none"),children:o.jsx("ul",{className:m("flex flex-col","divide-y divide-slate-100 dark:divide-zinc-700","text-slate-600 dark:text-slate-200","max-w-7xl mx-auto","max-h-[calc(100vh-100%)]","overflow-y-auto overscroll-contain"),children:t.map(r=>o.jsx("li",{children:o.jsx(O,{to:r.path,onClick:s,className:m("py-4 px-8","text-sm tracking-wide","cursor-pointer","hover:bg-indigo-50/50 hover:text-indigo-600","dark:hover:bg-zinc-800/60 dark:hover:text-indigo-400","transition-colors duration-300","flex items-center justify-center","font-medium","w-full"),children:r.name})},r.path))})}),Ue=({isOpen:e,onClick:t,className:s})=>o.jsx("button",{className:m("block z-50 cursor-pointer p-2 rounded-md","text-slate-600 hover:text-indigo-600","hover:bg-indigo-50/60","dark:text-slate-200 dark:hover:text-indigo-400","dark:hover:bg-zinc-800/60","transition-all duration-300",s),onClick:t,"aria-expanded":e,"aria-label":e?"关闭菜单":"打开菜单",children:o.jsx("svg",{className:m("w-6 h-6 transition-transform duration-300",e&&"rotate-90"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})});function Ge(){return o.jsxs(O,{to:"/",className:m("flex items-center space-x-2 group"),children:[o.jsx("div",{className:m("w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm","bg-linear-to-br from-indigo-500 to-purple-600","dark:from-zinc-700 dark:to-zinc-900"),children:"H"}),o.jsx("h1",{className:m("text-xl sm:text-2xl font-bold","tracking-wider","font-['Montserrat',sans-serif]","bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent","group-hover:from-indigo-500 group-hover:to-purple-500","transition-all duration-300","dark:from-zinc-200 dark:to-zinc-400 dark:group-hover:from-zinc-100 dark:group-hover:to-zinc-300"),children:"HOPE"})]})}function F(...e){return V(H(e))}function Ve(t){var e=P(t,[]);return o.jsx(Q,v({"data-slot":"dropdown-menu"},e))}function He(t){var e=P(t,[]);return o.jsx($,v({"data-slot":"dropdown-menu-trigger"},e))}function qe(r){var n=r,{className:e,sideOffset:t=4}=n,s=P(n,["className","sideOffset"]);return o.jsx(K,{children:o.jsx(Y,v({"data-slot":"dropdown-menu-content",sideOffset:t,className:F("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",e)},s))})}function Ze(n){var i=n,{className:e,inset:t,variant:s="default"}=i,r=P(i,["className","inset","variant"]);return o.jsx(ee,v({"data-slot":"dropdown-menu-item","data-inset":t,"data-variant":s,className:F("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e)},r))}const Be=le(()=>{const{themeStore:e}=Oe(),t=[{value:"light",label:"浅色",icon:o.jsx(ue,{className:"w-4 h-4"})},{value:"dark",label:"深色",icon:o.jsx(he,{className:"w-4 h-4"})},{value:"system",label:`跟随系统（当前：${e.systemTheme==="dark"?"深色":"浅色"}）`,icon:o.jsx(me,{className:"w-4 h-4"})}],s=t.find(r=>r.value===e.theme);return o.jsxs(Ve,{modal:!1,children:[o.jsx(He,{asChild:!0,children:o.jsx("button",{className:"flex items-center gap-2 px-3 py-2 rounded-md border bg-background hover:bg-accent transition","aria-label":"切换主题",children:s==null?void 0:s.icon})}),o.jsx(qe,{align:"center",sideOffset:4,className:"flex gap-2",children:t.map(r=>o.jsx(Ze,{onClick:()=>e.setTheme(r.value),className:e.theme===r.value?"font-bold bg-accent text-accent-foreground":"",children:r.icon},r.value))})]})}),G=[{name:"首页",path:"/"},{name:"博客",path:"/blog"},{name:"生活记录",path:"/life"},{name:"AI 智能问答",path:"/ai"}],Fe=()=>{const[e,t]=l.useState(!1),[s,r]=l.useState(!1),n=l.useCallback(()=>{t(a=>!a)},[]),i=l.useCallback(()=>{t(!1)},[]);return l.useEffect(()=>{if(e){const a=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${a}px`}else document.body.style.overflow="",document.body.style.paddingRight="";return()=>{document.body.style.overflow="",document.body.style.paddingRight=""}},[e]),l.useEffect(()=>{const a=()=>{window.innerWidth>=1024&&t(!1)};return window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a)}},[]),l.useEffect(()=>{const a=()=>{r(window.scrollY>10)};return window.addEventListener("scroll",a),a(),()=>{window.removeEventListener("scroll",a)}},[]),o.jsxs("header",{className:m("sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b",s?"bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-md backdrop-blur-sm dark:bg-linear-to-r dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 dark:shadow-lg border-b border-slate-200/80 dark:border-zinc-700/80":"bg-linear-to-r from-white via-slate-50 to-white dark:bg-linear-to-r dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-b border-slate-200/80 dark:border-zinc-700/80"),children:[o.jsxs("nav",{className:m("flex justify-between items-center","h-16 px-4 md:px-6 py-4","max-w-6xl mx-auto","transition-all duration-300"),"aria-label":"Main navigation",children:[o.jsx(Ge,{}),o.jsxs("div",{className:"flex",children:[o.jsx(_e,{navList:G}),o.jsx(Be,{}),o.jsxs("div",{className:"flex sm:hidden items-center space-x-1",children:[o.jsx(B,{}),o.jsx(Ue,{isOpen:e,onClick:n})]})]})]}),o.jsx(De,{isOpen:e,navList:G,onNavClick:i})]})};function Xe(){return o.jsx("footer",{className:m("py-2 text-center","bg-white dark:bg-zinc-900","border-t border-slate-100 dark:border-zinc-800","transition-colors duration-300"),children:o.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:o.jsxs("p",{className:"text-xs text-slate-400 dark:text-slate-500 inline-flex items-center gap-1",children:["© ",new Date().getFullYear()," Hope · 愿每一份努力都不被辜负",o.jsx(pe,{className:"size-3 text-rose-400"})]})})})}function We(){const{pathname:e,search:t,hash:s}=te();return l.useEffect(()=>{if(window.scrollTo({top:0,left:0,behavior:"smooth"}),s){const r=decodeURIComponent(s.replace("#","")),n=document.getElementById(r);n&&n.scrollIntoView({behavior:"smooth"})}},[e,t,s]),null}const Je=()=>o.jsxs("div",{className:"h-screen flex flex-col overflow-hidden",children:[o.jsx(We,{}),o.jsx(Fe,{}),o.jsx("main",{className:"flex-1 overflow-y-auto",children:o.jsx(se,{})}),o.jsx(Xe,{})]}),Qe=()=>o.jsx("div",{className:"fixed inset-0 z-50 flex justify-center items-center bg-white dark:bg-zinc-900 transition-colors duration-300",children:o.jsx("div",{className:`\r
          w-[50px] h-[50px] rounded-full\r
          border-4 border-slate-200 border-t-blue-400\r
          dark:border-zinc-700 dark:border-t-blue-500\r
          animate-spin\r
        `})}),T=({element:e,fallback:t})=>o.jsx(l.Suspense,{fallback:t||o.jsx(Qe,{}),children:e}),$e=l.lazy(()=>k(()=>import("./Home.DOyC7OmK.js"),__vite__mapDeps([0,1,2,3,4,5]))),Ke=l.lazy(()=>k(()=>import("./index.BT40M3lw.js"),__vite__mapDeps([6,1,2,3,4,5]))),Ye=l.lazy(()=>k(()=>import("./PostDetail.M3IBaiQZ.js"),__vite__mapDeps([7,1,2,3,4,5]))),et=l.lazy(()=>k(()=>import("./index.iK9DcEZ8.js"),__vite__mapDeps([8,1,2,3,4,5]))),tt=l.lazy(()=>k(()=>import("./index.CsMrLLO9.js"),__vite__mapDeps([9,1,2,3,4,5]))),st=l.lazy(()=>k(()=>import("./NotFound.DSukLmmD.js"),__vite__mapDeps([10,1,2]))),ot=[{path:"/",element:o.jsx(Je,{}),children:[{index:!0,element:o.jsx(T,{element:o.jsx($e,{})})},{path:"blog",element:o.jsx(T,{element:o.jsx(Ke,{})})},{path:"blog/:slug",element:o.jsx(T,{element:o.jsx(Ye,{})})},{path:"life",element:o.jsx(T,{element:o.jsx(et,{})})},{path:"ai",element:o.jsx(T,{element:o.jsx(tt,{})})},{path:"about",element:o.jsx(L,{to:"/life",replace:!0})},{path:"posts",element:o.jsx(L,{to:"/blog",replace:!0})},{path:"*",element:o.jsx(T,{element:o.jsx(st,{})})}]},{path:"/chat",element:o.jsx(L,{to:"/ai",replace:!0})}],rt=oe(ot,{basename:"/hope"});function nt(){return o.jsx(re,{router:rt})}ne.createRoot(document.getElementById("root")).render(o.jsx(l.StrictMode,{children:o.jsxs(ce,{store:Re,children:[o.jsx(ie,{}),o.jsx(nt,{})]})}));export{m as c,Oe as u};
