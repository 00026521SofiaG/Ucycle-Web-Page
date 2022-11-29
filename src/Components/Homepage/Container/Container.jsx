import React from "react";
import "./Container.css";
import tapa from "../../../assets/images/tapas-ucycle.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";


const Container = () =>{

    return(
        <div>
           
        <section className="container-carrusel-img">
            
            <div className="container-img">
                <img src={tapa} alt = "Imagen de tapas de botella" className="img-carrusel"></img>
            </div>
            <div className="flecha-carrusel">
                <a href="" ><FontAwesomeIcon icon = {faCircleArrowLeft} /></a>
                <a href=""><FontAwesomeIcon icon = {faCircleArrowRight} /></a>     
            </div>
        </section>
        </div>

    );

}

export default Container;
