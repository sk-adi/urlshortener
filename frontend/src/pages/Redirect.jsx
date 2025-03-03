import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { redirectUser } from '../api/redirectApi'

c


function Redirect() {
    const [success, Setsuccess] = useState()
    const internalRoutes=['/login','/register','/dashboard']
    const navigate=useNavigate()
    const { code } = useParams()
    useEffect(() => {
        const fetchUrlAndRedirect = async () => {

            if(internalRoutes.includes(`/${code}`)){
                navigate(`/${code}`)
            }


            try {
                const response = await redirectUser(code)

                if (response.redirectUrl) {
                }
                else {
                    console.log("Url Not Found")
                    Setsuccess("Error : 404 ! Url Not Found")
                }

            } catch (error) {
                console.log(error)

            }
        }
        fetchUrlAndRedirect()

    }, [code])

    return (
        <>
            <h1>redirecting...</h1>
            <h1>{success}</h1>
        </>
    )
}

export default Redirect