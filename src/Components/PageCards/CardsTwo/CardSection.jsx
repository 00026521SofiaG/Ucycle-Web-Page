import React from "react";
import "./CardSection.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import reto from "../../../assets/images/botella-de-agua.png";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

const Card = ({titulo_r = "", descripcion_r = "", imagen_r = "", fecha_r = ""}) =>{

return(
    <div className='card'>
        <div className='face front'>
            <article className="article-card">
                <div className="reto-s">RETO SEMANAL</div>
                  <h2 className="tittle-reto">{titulo_r}</h2>
                <figure className="img-contenedor"><img className="img-reto" src={imagen_r}></img></figure>
                <div className="fecha-container">FECHA:{fecha_r}</div>    
            </article>
        </div>
        <div className='face back'>
        <div className='reto-back'>
                <p className='parrafo-card1'>{descripcion_r}</p>
                <p className='parrafo-card2'>RECOMPENSA</p>
                <p className='parrafo-card3'>4 EXP Y 10 MIN DE HS </p>
              <form className='form-card'>
                <button className='button-form-card'>REALIZAR RETO</button>
                 <label>Codigo</label>
                  <input id='input-card' placeholder='C34J5'></input>
              </form>    
            </div>
        </div>
    </div>
        
   );
}


export default Card;