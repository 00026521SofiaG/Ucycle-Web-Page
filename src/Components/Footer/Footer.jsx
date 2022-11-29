import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareFacebook, faTwitter,faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
        <footer className="pie-pagina">
            <div className="container-footer">
                <div className="box">
                    <h2 className="name-pie">Redes Sociales</h2>
                    <div className="red-social">
                     <a href="#" ><FontAwesomeIcon icon = {faSquareFacebook} /></a>
                     <a href="#"><FontAwesomeIcon icon = {faTwitter} /></a>
                     <a href="#"><FontAwesomeIcon icon = {faInstagram} /></a>

                    </div>
                </div>
                <div className="box">
                    <h2 className="name-pie">Donaciones</h2>
                </div>
                <div className="box">
                    <h2 className="name-pie">Ideas</h2>
                </div>
                <div className="box" id="whatsapp">

                    <h2 className="name-pie" >Soporte</h2>
                    <a href="#" className="whatsapp"><FontAwesomeIcon icon = {faWhatsapp} /></a>
    
                </div>

            </div>
            <div className="derecho-autor">
                <small>&copy; 2022 <b>Ucycle</b> -  Todos los Derechos Reservados.</small>
            </div>

        </footer>
    );
        
    
}

export default Footer;