import React from 'react';
import "./NoticePage.css";
const NoticeImg = ({titulo_a = "", descripcion_a = "", image_a = "", descripcion_a2 = ""}) => {
  return (
    <div>
        <div className='Notice-page-card'><h2>Notice</h2></div>
            <div className='tittle-notice-section'>
                <h1>{titulo_a}</h1>
            </div>
       <figure className='img-noticie-page'><img src={image_a} className = "imgen-notice-page"></img></figure>
       <section className='section-info-notice'>
                <div className='title-notice-page'>
                    <h1>{titulo_a}</h1>
                </div>
                <p className='parrafo-notice1'>{descripcion_a}</p>
                <p className='parrafo-notice1'>{descripcion_a2}</p>
        </section>   
    </div>
    
  )
}

export default NoticeImg