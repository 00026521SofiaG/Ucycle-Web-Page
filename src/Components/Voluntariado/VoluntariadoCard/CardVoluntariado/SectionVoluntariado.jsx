import React from 'react'
import CardVoluntariado from './CardVoluntariado';
import "../Voluntariado.css";


const SectionVoluntariado = ({voluntariados = ([])}) => {

    const mappedVoluntariado = voluntariados.map((voluntariado) =>{
        return(
        <CardVoluntariado
            key={voluntariado._id}
            titulo_v ={voluntariado.titulo_v}
			descripcion_v = {voluntariado.descripcion_v}
			imagen_v = {voluntariado.imagen_v}
            fecha_v = {voluntariado.fecha_v}
        />

        );
    })

  return (

    <section id='section-voluntariado-page'>
        <article className="title">
        <h1 className="title-card">Voluntariado</h1>
    </article>
    <div className='container-voluntariado-card'>
        {mappedVoluntariado}
    <article className='voluntariado-card'>
       <div className='title-voluntariado-card'><h2>PROXIMAMENTE</h2></div>
        <p className='parrafo-one-voluntariado'>Trabajando de la mano con los catedráticos de LA MATERIA “CAMBIO CLIMATICO.”</p>
    </article>
    <article className='voluntariado-card'>
       <div className='title-voluntariado-card'><h2>PROXIMAMENTE</h2></div>
        <p className='parrafo-one-voluntariado'>Trabajando de la mano con los catedráticos de la facultad de ciencias.”</p>
    </article>
    </div>
    </section>
  )
}

export default SectionVoluntariado