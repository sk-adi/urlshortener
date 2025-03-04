import React, { useEffect } from "react";
import { redirectUser } from "../api/redirectApi";
import { useNavigate, useParams } from "react-router-dom";

function Redirect() {
  const internalRoutes = new Set(["login", "register", "dashboard", "routehistory", "user"]);
  const { code } = useParams();
  //const navigate = useNavigate();

  useEffect(() => {
    console.log(`redirect running and this is code ${code}`)
    if (internalRoutes.has(code)) {
      console.log(`if code run inside useffect`)
      navigate(`/${code}`, { replace: true });
      return; // Prevents further execution
    }
    else{
      redirectUser(code);
    }

    // Call backend for external routes
    console.log(`calling backend`)

  }, [code, navigate]); // Runs only when `code` changes

  return <div>Redirecting...</div>;
}

export default Redirect;
