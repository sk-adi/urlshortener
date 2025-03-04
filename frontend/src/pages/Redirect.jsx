import React, { useEffect } from "react";
import { redirectUser } from "../api/redirectApi";
import { useNavigate, useParams } from "react-router-dom";

function Redirect() {
  const internalRoutes = new Set(["login", "register", "dashboard", "routehistory", "user"]);
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (internalRoutes.has(code)) {
      navigate(`/${code}`, { replace: true });
      return; // Prevents further execution
    }

    // Call backend for external routes
    console.log(`calling backend`)
    redirectUser(code);
  }, [code, navigate]); // Runs only when `code` changes

  return <div>Redirecting...</div>;
}

export default Redirect;
