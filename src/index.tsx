import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from 'theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Selection from 'components/Selection'
import Affiliations from 'components/Affiliations'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'selection',
        element: <Selection />
      },
      {
        path: 'affiliations',
        element: <Affiliations />
      }
    ]
  }
])

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
