import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import ItemListContainer from "./Status/ItemList/ItemListContainer";
import JSONpretty from "react-json-pretty";
import Footer from "../../Footer/Footer";

export const Profile = () => {

    // Sacamos los datos del usuario con una desestructuración, serán los datos que nos devuelva la API-Aut0.



    const { user, isAuthenticated, isLoading, } = useAuth0();

    if (isLoading) {

        return <div>
            Loanding....
        </div>
    }

    // carga ya el perfil 


    return (

        // Si el usuario está autenticado, mostramos su perfil



        isAuthenticated && (
            

            <section className="aut0-profile">
                

                <div className="container-profile">
                    <h1> Bienvenido: </h1>
                    <h1>{user.name}: </h1>



                    <img className="foto-perfil" src={user.picture} alt={user.name} />



                </div>

            

                <div className="calculo">

                    <ItemListContainer />
                    
                    

                </div>

                <Footer />

            </section> 
            

        )
        
                
        )

}


