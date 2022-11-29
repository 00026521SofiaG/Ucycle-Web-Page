import React from 'react'
import Footer from '../Footer/Footer';
import NoticeImg from './NoticeImg';
import "./NoticePage.css";


const NoticeSec = ({articles = []}) => {

    const mappedNotices = articles.map( article =>{
        return(
            <NoticeImg
            key={article._id}
            titulo_a={ article.titulo_a }
            descripcion_a = {article.descripcion_a}
            image_a = {article.image_a}
            descripcion_a2 = {article.descripcion_a2}

            />

        );
    })
  return (
    <section className='imagen-notice'>
      
        {mappedNotices}
    </section>

  );
}

export default NoticeSec