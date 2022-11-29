import React from 'react'
import "../Peticiones.css";
import CardPeticiones from './CardPeticiones';

const SectionPeticiones = ({peticiones = ([])}) => {

    const mappedPeticiones = peticiones.map((peticion)=>{
        return(
        <CardPeticiones
            key={peticion._id}
            titulo_p ={peticion.titulo_p}
			      descripcion_p = {peticion.descripcion_p}
			      imagen_p = {peticion.imagen_p}
            firma = {peticion.firma}
        />
        );
    })
  return (

    <section className='section-peticiones-page'>
       <article className="title">
      <h1 className="title-card">Peticiones</h1>
       </article>
      <div className='parrafo-peticiones'><p>Como Ucycle estamos comprometidos con la reducion de nuestra huella ambiental, pero tambien con el cuido de los recursos naturales que nos ofrece nuestro amado planeta. POr lo cual apoyamos movimientos y peticiones en pro de luchas verdes. puedes apoyarnos firmando estas peticiones: </p></div>
      <div className='parrafo-dos-peticiones'><p>Este mes apoyamos:</p></div>
    <div className='container-peticiones-page'>
     {mappedPeticiones}
    </div>
    </section>
  )
}

export default SectionPeticiones