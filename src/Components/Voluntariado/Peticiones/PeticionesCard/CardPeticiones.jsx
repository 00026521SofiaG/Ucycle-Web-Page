import React from 'react'
import "../Peticiones.css";

import { NavLink } from "react-router-dom";


const CardPeticiones = ({titulo_p ="", descripcion_p = "", imagen_p = ""}) => {
  return (
    <article className='peticiones-card-page'>
        <div className='titulo-peticiones-page'>{titulo_p}</div>
        <figure className='container-img-peticiones'><img className='img-peticiones-page' src={imagen_p}></img></figure>
        <p className='parrafo-peticiones-page'>{descripcion_p}</p>
        <NavLink to={"/Info-peticiones"} className = 'button-peticiones-page'>Firmar</NavLink>
    </article>
  )
}

export default CardPeticiones