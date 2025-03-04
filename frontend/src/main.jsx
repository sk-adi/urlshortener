import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Redirect from './pages/Redirect.jsx'
import Layout from './layout/Layout.jsx'
import About from './pages/About.jsx'
import ProtectedRoutes from './routes/protectedRoutes.jsx'
import userRoutesHistory from './pages/userRoutesHistory.jsx'




const router = createBrowserRouter(

  createRoutesFromElements(
    <>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<ProtectedRoutes />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='routesHistory' element={<userRoutesHistory/>} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/:code' element={<Redirect />} />
      </Route>
    </>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
