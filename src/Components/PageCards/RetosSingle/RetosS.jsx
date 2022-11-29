import Card from "../CardsTwo/CardSection";
import "../CardsTwo/CardSection.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import reto from "../../../assets/images/botella-de-agua.png";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

const Retos = ({retos = []}) => {
const mappedRetos = retos.map((retos) => {
    return(
        <Card
            key={retos._id}
            titulo_r={retos.titulo_r}
            descripcion_r = {retos.descripcion_r}
            imagen_r = {retos.imagen_r}
            fecha_r = {retos.fecha_r}
            
            
        />
    )
})

return(
    <article className='contenedor-cardIntento2'>
    <article className="tittle-h1">
       <h1 >¡RETOS!</h1>
    </article>
    <section className='container-carrusel'>
            {mappedRetos}      
    </section>
    </article>
    
    )
}

export default Retos;