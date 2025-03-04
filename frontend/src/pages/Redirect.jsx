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
      return; // ⬅ Stop execution here
    }

    // If not an internal route, call the redirect function
    redirectUser(code);
  }, [code, navigate]);

  return <div>Redirecting...</div>;
}

export default Redirect;
