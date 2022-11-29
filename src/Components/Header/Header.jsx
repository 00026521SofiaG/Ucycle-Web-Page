import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

const Header = () => {

  const {LoginWithRedirect} = useAuth0();

    return (
        <header>
          <a href= "/" className="name-page">
            <h2 className="name">Ucycle</h2>
          </a>
         <nav>
             
              <NavLink to={""} className = "button-header">Inicio</NavLink>
              <NavLink to={"/Retos"} className = "button-header">Retos</NavLink>
              <NavLink to={"/Voluntariado"} className = "button-header">Voluntariado</NavLink>
              <Login />
              <NavLink to="/Profile" className="button-header"> Perfil </NavLink> 

            
               
          </nav> 

        </header>
      );

};




export default Header;
