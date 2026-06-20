import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ForgeApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForgeApp />
  </StrictMode>,
)
