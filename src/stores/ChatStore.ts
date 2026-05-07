import { makeAutoObservable, runInAction } from 'mobx'
import type { ChatMessage, ChatSession } from '@/types/chat'

const STATIC_RESPONSES: Record<string, string> = {
  你好: '你好！我是 Hope AI 助手，很高兴为你服务 😊 有什么我可以帮助你的吗？',
  hello: "Hello! I'm Hope AI Assistant. How can I help you today? 😊",
  你是谁:
    '我是 Hope AI 助手，一个基于前端静态响应的智能问答助手。目前我还在开发中，未来会接入真正的大语言模型，为你提供更智能的回答！',
  react:
    'React 是由 Meta 开发的 JavaScript 前端框架，用于构建用户界面。它的核心特性包括：\n\n1. **组件化开发**：将 UI 拆分为独立的、可复用的组件\n2. **虚拟 DOM**：通过虚拟 DOM 提升渲染性能\n3. **JSX 语法**：在 JavaScript 中书写类 HTML 模板\n4. **Hooks**：React 16.8 引入的函数式编程范式\n5. **生态丰富**：React Router、Redux、Next.js 等\n\n目前最新版本是 React 19，带来了 Server Components、改进的并发特性等。',
  typescript:
    'TypeScript 是 JavaScript 的超集，添加了静态类型系统。主要优势：\n\n1. **类型安全**：编译时发现错误，减少运行时 bug\n2. **智能提示**：IDE 自动补全和类型检查\n3. **可维护性**：类型即文档，代码更易理解\n4. **渐进式**：可以逐步引入类型，与 JS 完全兼容\n\n推荐学习路径：基础类型 → 接口和类型别名 → 泛型 → 高级类型 → 类型体操。',
  vite: 'Vite 是新一代前端构建工具，由 Vue 作者尤雨溪开发。核心特点：\n\n1. **极速开发**：基于原生 ESM 的开发服务器，毫秒级热更新\n2. **高效构建**：生产环境使用 Rollup 打包\n3. **开箱即用**：支持 TypeScript、JSX、CSS 预处理器等\n4. **插件系统**：兼容 Rollup 插件生态\n\nVite 已成为 React、Vue 等框架的推荐构建工具。',
  mobx: 'MobX 是一个简单、可扩展的状态管理库。核心理念：\n\n1. **Observable**：可观察的状态，任何修改都会被追踪\n2. **Action**：修改状态的唯一方式\n3. **Computed**：基于状态自动派生的计算值\n4. **Reaction**：状态变化时自动执行的副作用\n\n与 Redux 相比，MobX 更简单直观，代码量更少，适合中小型项目。',
  tailwind:
    'Tailwind CSS 是一个实用优先的 CSS 框架。核心特点：\n\n1. **原子化 CSS**：通过组合小类名构建界面\n2. **无需命名**：不再纠结 class 命名\n3. **响应式设计**：内置 sm/md/lg/xl 断点\n4. **暗色模式**：dark: 前缀轻松支持\n5. **按需生成**：只包含使用到的样式\n\nTailwind CSS v4 带来了全新的引擎和更快的编译速度。',
  建议: '作为开发者，我有以下建议：\n\n1. **持续学习**：技术更新快，保持学习热情很重要\n2. **动手实践**：看十遍不如写一遍，项目驱动学习\n3. **写技术博客**：输出是最好的输入，教是最好的学\n4. **参与开源**：阅读优秀源码，提升代码品味\n5. **关注健康**：久坐伤身，记得运动和休息\n\n加油！💪',
  前端: '前端开发是 Web 开发的重要领域，当前技术趋势：\n\n1. **框架演进**：React 19、Vue 3.5、Svelte 5 各有特色\n2. **构建工具**：Vite 成为主流，Turbopack 崛起\n3. **AI 赋能**：AI 辅助编码、AI 生成 UI\n4. **全栈趋势**：Next.js、Nuxt.js 等 SSR/SSG 框架\n5. **性能优化**：Core Web Vitals、边缘计算\n\n前端领域日新月异，保持好奇心是关键！',
  编程: '编程是一门创造性的技艺，以下是一些心得：\n\n1. **代码是写给人看的**：可读性 > 简洁性\n2. **先让它工作，再让它优雅**：不要过早优化\n3. **测试很重要**：好的测试是代码质量的保障\n4. **版本控制**：Git 是必备技能\n5. **学会搜索**：Google 和 Stack Overflow 是最好的老师\n\n记住：每个大神都曾是新手。坚持写代码，你一定会进步的！🚀',
}

const DEFAULT_RESPONSE =
  '感谢你的提问！目前我还在开发中，暂时只能回答一些预设的问题。你可以试试问我关于 React、TypeScript、Vite、MobX、Tailwind CSS 等技术话题，或者跟我打个招呼 😊\n\n未来我会接入真正的大语言模型，届时可以回答更多问题！'

const generateId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8)

class ChatStore {
  sessions: ChatSession[] = []
  currentSessionId: string | null = null
  isGenerating = false
  streamingContent = ''
  streamingMessageId: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get currentSession(): ChatSession | undefined {
    return this.sessions.find(s => s.id === this.currentSessionId)
  }

  get currentMessages(): ChatMessage[] {
    return this.currentSession?.messages || []
  }

  createSession() {
    const session: ChatSession = {
      id: generateId(),
      title: '新对话',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    this.sessions.unshift(session)
    this.currentSessionId = session.id
    return session
  }

  deleteSession(id: string) {
    this.sessions = this.sessions.filter(s => s.id !== id)
    if (this.currentSessionId === id) {
      this.currentSessionId = this.sessions.length > 0 ? this.sessions[0].id : null
    }
  }

  switchSession(id: string) {
    this.currentSessionId = id
  }

  sendMessage(content: string) {
    if (!content.trim() || this.isGenerating) return

    let session = this.currentSession
    if (!session) {
      session = this.createSession()
    }

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
      timestamp: Date.now(),
    }

    session.messages.push(userMessage)

    if (session.messages.length === 1) {
      session.title = content.trim().slice(0, 20) + (content.trim().length > 20 ? '...' : '')
    }

    this.isGenerating = true

    const fullResponse = this.findResponse(content.trim())

    const assistantMessage: ChatMessage = {
      id: generateId(),
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
    }

    session.messages.push(assistantMessage)
    this.streamingMessageId = assistantMessage.id
    this.streamingContent = ''

    this.startStreaming(assistantMessage.id, fullResponse)
  }

  startStreaming(messageId: string, fullText: string) {
    const chars = [...fullText]
    let index = 0

    const tick = () => {
      if (index >= chars.length) {
        runInAction(() => {
          const session = this.currentSession
          if (session) {
            const msg = session.messages.find(m => m.id === messageId)
            if (msg) msg.content = fullText
            session.updatedAt = Date.now()
          }
          this.isGenerating = false
          this.streamingContent = ''
          this.streamingMessageId = null
        })
        return
      }

      index++
      const partial = chars.slice(0, index).join('')

      runInAction(() => {
        this.streamingContent = partial
      })

      const delay = chars[index - 1] === '\n' ? 40 : 20 + Math.random() * 25
      setTimeout(tick, delay)
    }

    setTimeout(tick, 300)
  }

  findResponse(input: string): string {
    const lower = input.toLowerCase()

    for (const [key, value] of Object.entries(STATIC_RESPONSES)) {
      if (lower.includes(key.toLowerCase())) {
        return value
      }
    }

    const techKeywords = [
      'js',
      'javascript',
      'css',
      'html',
      'node',
      'npm',
      'api',
      'git',
      'docker',
      'go',
      'python',
    ]
    for (const keyword of techKeywords) {
      if (lower.includes(keyword)) {
        return `关于 ${keyword.toUpperCase()}，这是一个很棒的技术话题！目前我的知识库还在完善中，暂时无法提供详细的解答。不过你可以去官方文档或 MDN 查阅相关资料，那里有最权威的信息。\n\n未来接入大语言模型后，我会能更好地回答这类问题！`
      }
    }

    return DEFAULT_RESPONSE
  }

  clearFilters() {
    // placeholder
  }
}

const chatStore = new ChatStore()
export default chatStore
