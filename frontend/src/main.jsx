import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Redirect from './pages/Redirect.jsx'



const router = createBrowserRouter(

  createRoutesFromElements(
    <>    
      <Route path='/' element={<Home />} />
      <Route path='/api/register' element={<SignUp />} />
      <Route path='/api/login' element={<Login />} />
      <Route path='/api/dashboard' element={<Dashboard />} />
      <Route path='/:code' element={<Redirect/>} />
      </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
