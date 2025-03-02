import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { redirectUser } from '../api/redirectApi'


function Redirect() {
    const [success, Setsuccess] = useState()
    const { code } = useParams()
    useEffect(() => {
        const fetchUrlAndRedirect = async () => {
            try {
                const response = await redirectUser(code)

                if (response.redirectUrl) {
                    //window.location.href = response.redirectUrl
                    

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