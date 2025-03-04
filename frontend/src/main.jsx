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
import RouteProtect from './routes/RouteProtect.jsx'




const router = createBrowserRouter(

  createRoutesFromElements(
    <>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/api/login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='/user' element={<RouteProtect />}>
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
