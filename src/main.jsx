import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Welcome from './Pages/Welcome.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import PasseioDetalhe from './Pages/PasseioDetalhe.jsx'
import Assessoria from './Pages/Assessoria.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},
  {path: '/portfolio', element: <Portfolio />},
  {path: '/passeios', element: <PasseioDetalhe />},
  {path: '/assessoria', element: <Assessoria />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
