import React from 'react';
import "./Notice.css";
import { NavLink } from "react-router-dom";

const NewNotice = ({titulo_a = "", descripcion_a ="", image_a = ""}) => {
  return (
          <div className="Notice-card2">
               <img className="img-article-2" src={image_a}></img>
            <div className="tittle-noticee2">Noticia</div>
            <div className="title-article-notice"><h1>{titulo_a}</h1></div>
    
            <NavLink to="/NoticePage" className="button-notice"> Más información</NavLink> 
         </div>
   
  )
}

export default NewNotice