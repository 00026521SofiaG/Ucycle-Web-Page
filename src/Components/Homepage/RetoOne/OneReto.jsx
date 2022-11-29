import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import reto from "../../../assets/images/botella-de-agua.png";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import '../Cards/Cards.css';
import Cards from "../Cards/Cards";


const RetosHome = ({retos = []}) => {
    const mappedRetosHome = retos.map((retos) => {
        return(
            <Cards
                key={retos._id}
                titulo_r={retos.titulo_r}
                descripcion_r = {retos.descripcion_r}
                imagen_r = {retos.imagen_r}
                fecha_r = {retos.fecha_r}
                
                
            />
        )
    })


return(
<article className='contenedor-cardIntento'>
        <article className="tittle-h1">
               <h1 >¡RETOS SEMANALES Y RECOMPENSAS!</h1>
            </article>

        <section className='container-carrusel'>
    
            {mappedRetosHome}
         
 
    </section> 
    
    <button className="button-card">Mas Información</button>
</article >
)
}

export default RetosHome;