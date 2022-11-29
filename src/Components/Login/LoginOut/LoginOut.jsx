import React from "react";
import { useAuth0} from "@auth0/auth0-react";

const LogooutButton = () =>{
    const {logout} = useAuth0();

    return <button className="button-header" onClick={()=> logout({returnTo:window.location.origin})}> Salir </button>

};

export default LogooutButton; 