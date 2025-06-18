import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'mobx-react'
import { stores } from '@/stores'
import './index.css'
import App from './App'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={stores}>
      <Toaster />
      <App />
    </Provider>
  </StrictMode>
)
