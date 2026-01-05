import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './lib/styles/theme.less'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
