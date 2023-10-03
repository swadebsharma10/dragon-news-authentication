import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import Router from './Routes/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
  
  </React.StrictMode>,
)
