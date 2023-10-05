import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'

import GlobalProvider from './providers/GlobalProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  </React.StrictMode>,
)
