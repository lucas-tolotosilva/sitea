import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PasseiosProvider } from './PasseiosContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Welcome from './Pages/Welcome.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import PasseioDetalhe from './Pages/PasseioDetalhe.jsx'
import Assessoria from './Pages/Assessoria.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import { NossosPasseios } from './Pages/NossosPasseios.jsx'
import { NossosPasseiosPasseio } from './Pages/NossosPasseiosPasseio.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},
  {path: '/portfolio', element: <Portfolio />},
  {path: '/passeio', element: <PasseioDetalhe />},
  {path: '/assessoria', element: <Assessoria />},
  {path: '/login', element: <Login />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/nossos-passeios', element: <NossosPasseios />},
  {path: '/nossos-passeios/passeio', element: <NossosPasseiosPasseio />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasseiosProvider>
      <RouterProvider router={router} />
    </PasseiosProvider>
  </React.StrictMode>,
)
