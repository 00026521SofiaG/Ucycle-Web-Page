import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginOut from "./LoginOut/LoginOut";


const Login = () => {

    const {loginWithRedirect} = useAuth0();

    return(
        <>
         <button className="button-header" onClick={loginWithRedirect}> Login </button>

         <LoginOut />
    
         </>
    )
    

};
      

export default Login
