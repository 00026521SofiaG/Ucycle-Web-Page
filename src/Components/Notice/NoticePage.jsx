import React from 'react';
import "./NoticePage.css";
import imgNotice from "../../assets/images/noticieimg.jpg";
import NoticeSec from './NoticeSec';
import Footer from "../Footer/Footer";

const dummyData2 = [
    {
        "_id": "6383abe5f3ea68d375a796bb",
        "titulo_a": "Ministerio de Medio Ambiente lanzó campaña de reforestación «Árboles para El Salvador»",
        "descripcion_a": "El ministerio de Medio Ambiente y Recursos Naturales (MARN), Fernando López, lanzó la campaña de reforestación denominada: «Árboles para El Salvador», en un área protegida de San Marcelino.\n\n\nEsta campaña tiene la finalidad de asegurar un mejor futuro ambiental y recuperar las áreas naturales protegidas, según el MARN.\n\n«Esta campaña se realizará durante toda la época de invierno, tiempo en el que organizaremos 71 jornadas de reforestación en 13 áreas de conservación. Un pulmón para el futuro, es una tarea muy importante que hemos asumido en el ministerio de medio ambiente para reforestar el país, especialmente aquellas zonas con ecosistemas degradados por incendios forestales», expresó el titular del MARN.\n\nAsimismo, Fernando López, añadió que cualquier persona puede inscribirse para participar en alguna de estas jornadas, y para ello debe estar pendiente de la información que publican en las redes sociales del Ministerio de Medio Ambiente.\n\n«Con esta campaña de reforestación buscamos revertir la degradación de ecosistemas críticos, priorizando la recuperación de las funciones ecosistémicas, especialmente en áreas de recarga hídrica», indicó el titular del MARN.",
        "descripcion_a2" :"La Montañona fue otra de las áreas naturales protegidas devastadas por los incendios forestales, ahí parte de nuestro equipo de guardarrecursos plantó pinos en los sectores afectados por el fuego semanas atrás.Otro de nuestros equipos salió a las calles y aprovechó el rojo de los semáforos en diferentes puntos de la capital para entregar árboles y que la ciudadanía se involucre para que juntos le demos un abrazo a nuestro planeta.Este 2021, la conmemoración tiene como lema “Restaurar nuestra Tierra”, además de resaltar que pequeñas acciones pueden significar mucho y construir un mundo más sostenible.",
        "image_a": "https://diarioelsalvador.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-05-at-1.56.47-PM.jpeg",
        "__v": 0
    },
]

const NoticePage = () => {
  return (

    <article className='article-notice'>

            <NoticeSec articles={dummyData2}/> 
    </article>
   

  );
}

export default NoticePage