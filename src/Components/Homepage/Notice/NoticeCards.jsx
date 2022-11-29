import React from 'react'
import "./Notice.css";
import NewNotice from './NewNotice';


const article = ({article = ([])}) => {

    const mapperArticle = article.map( (article) =>{
        return(
            <NewNotice
            key={article._id}
            titulo_a={ article.titulo_a }
            descripcion_a = {article.descripcion_a}
            image_a = {article.image_a}
            image_a2 ={article.image_a}
            titulo_a2={ article.titulo_a }
            descripcion_a2 = {article.descripcion_a}

            />
            
        );
    })

  return (
<section id="Notice">
 <article className="title">
     <h1 className="title-card">ACTUALIDAD</h1>
        </article>
    <section className="card-notice">
        <article className="container-Notice">
        {mapperArticle}
        </article>
    </section>
    </section>
  )
}

export default article