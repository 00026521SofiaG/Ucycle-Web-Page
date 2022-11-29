import React from "react";
import Header from "../../Header/Header";
import "./Info-voluntarido.css"
import Footer from "../../Footer/Footer";
import Imagen from "../../../assets/images/tortugas.jpg"

const Info_voluntariado = () => {

    return (

        <section className="container">

            {/*aca se va actualizar con la API*/}

            <div className="voluntariado-cubo">

            <div className="container-imagen">
            <h1> Liberacion de tortugas y limpieza de playa el Tamarindo </h1> 

                <img src= {Imagen} alt=" IMAGEN NO ENCONTRADA" />
                <label> Actividad propuesta por: CONSEJO ESTUDIANTIL. </label>
            </div>

            


            <form action="" className="container-voluntariado">

                <p> El consejo estudiantil busca a estudiantes activos que tenga responsabilidad ambiental 
                    y que deseen aportar un granito de arena para el cuidado de las playas de nuestro pais 
                    y a su vez el cuidado de la fauna marina. </p>

                <ul>
                    <li>Precio: <label> $25 dolares </label> </li>
                    <li>Ganancia: <label> 25 Horas sociales y 3 niveles en UCYCLE. </label></li>
                    <li>Fecha:<label> 25 de Octubre de 2022.(5:30AM - 4:00OM) </label></li>
                    <li>Cupo: <label> 20 personas </label></li>
                    <label> Estatus: ACTIVO</label>
                </ul>
                
                <label for="POST-name"> Correo de contacto: </label> 
                <input id="POST-name" type="text"  name="Correo" />

                <label for="POST-name"> Carrera: </label> 
                <input id="POST-name" type="text" name="Carrera" />

                <label for="POST-name"> Teléfono: </label> 
                <input id="POST-name" type="text" name="Telefono" />

                <label for="POST-name"> Nombre completo: </label> 
                <input id="POST-name" type="text" name="Nombre" />

                <div className="botones-form">

                <input type="submit" className="btn-submit" value="Enviar" />

                <input type="reset" className="btn-submit" value="Borra" />

                </div>

        </form>

        </div>


        <>
        <Footer />
        </>




        </section >

    );

}

export default Info_voluntariado;