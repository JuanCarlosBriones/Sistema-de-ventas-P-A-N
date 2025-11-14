import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'



import { ThemeProvider } from '@material-tailwind/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <App />  
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>,
)



