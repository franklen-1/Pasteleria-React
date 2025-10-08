import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom' //Importante para Router

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <App />   
    </BrowserRouter>
  </StrictMode>,
)


