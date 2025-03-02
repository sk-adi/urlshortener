import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'



const router = createBrowserRouter(

  createRoutesFromElements(
    <>    
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
