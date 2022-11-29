import React from "react";
import "./Information.css";
import imgLeft from "../../../assets/images/desafioo.png";
import imgRight from "../../../assets/images/monedaa.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

const Informacion = () =>{

    return(
        <section id="container-information">

           <article className="tittle-information">
               <h1 >¡RETOS SEMANALES Y RECOMPENSAS!</h1>
            </article> 

            <section className="container-carrusel-2">
           

                <div className="information">
                    <figure className="img-left"><img src={imgLeft} alt= "Reto" className="ImgV"></img></figure>
                   <h2 className="tittle-parr">RETOS</h2>
                   <p className="parrafo">El propósito de esto retos es que vayas al campus y hagas ejercicio, o simplemente que practiques buenos hábitos y puedas ganar recompensas por cada actividad realizada.</p> 
                </div>
                <div className="information">
                   <figure className="img-left"><img src={imgRight} alt= "Reto" className="ImgV"></img></figure>
                   <h2 className="tittle-parr">RECOMPENSAS</h2>
                   <p className="parrafo">El sistema de recompensa será presencial y se te entregará una moneda validad para el intercambio de horas sociales o de cupones validos unicamente en fundación Gondra</p>
                </div>

            </section>

        </section>
    );
}

export default Informacion;