import React from 'react'
import "../Voluntariado.css";
import { NavLink } from "react-router-dom";

const CardVoluntariado = ({ titulo_v = "", descripcion_v = "", imagen_v = "", fecha_v = ""}) => {
  return (
    <div>
    <article className='voluntariado-card'>
        <div className='title-voluntariado-card'><h2>{titulo_v}</h2></div>
            <p className='parrafo-one-voluntariado'>{descripcion_v}</p>
            <p className='parrafo-fecha-voluntariado'> FECHA: {fecha_v}</p>
        <figure className='container-voluntariado-img'><img className='img-voluntariado-card' src={imagen_v}></img></figure>
        <NavLink to={"/Info-voluntariado"} className = 'button-voluntariado'>Saber más</NavLink>

  </article>
  </div>
  
  )
}

export default CardVoluntariado