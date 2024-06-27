import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import { ThemeProvider } from '@material-tailwind/react'
import Provider from './context/provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
