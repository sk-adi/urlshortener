import React, { useEffect, useState } from 'react'
import { redirectUser } from '../api/redirectApi'
import {  useNavigate, useParams } from 'react-router-dom'

function Redirect() {
  const internalRoutes=new Set(["login","register","dashboard","history","user"])

  const [isInternalRoutes,SetisInternalRoutes]=useState(false)
  const {code}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    if(internalRoutes.has(code)){
       SetisInternalRoutes(true)
       navigate(`/${code}`,{replace:true})
    }
    else{
      redirectUser(code)
    }
  },[code,navigate])

  return (
    <div>Redirect</div>
  )
}

export default Redirect