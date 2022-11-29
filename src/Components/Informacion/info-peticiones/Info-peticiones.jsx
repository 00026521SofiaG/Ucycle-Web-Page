import React from "react";
import Header from "../../Header/Header";
import Imag_peticion from "../../../assets/images/agua.jpg"
import "./Info-peticiones.css";
import Footer from "../../Footer/Footer";

const Info_peticiones = () => {

    return (
        <section className="container-peticiones">
            <h1>Que el derecho al agua sea ley:</h1>

            <img src={Imag_peticion} alt="" className="container-img-peticiones" />

            <div className="parrafo">
                <p>
                    La situación con respecto a la distribución del agua por medio de la
                    institución gunabemental sigue estando en un mal servicio, pese a las
                    mejoras que ha presentadas en la planta potabilizadora las PAVAS, el sistema
                    anteriormente en deterioro no ha solucionado el problema del agua en San Salvador.
                    la situacion sigue estando fuera de control. {"\n"}

                    Los reportes de falta del servicio de agua potable, se viene dando de hace mucho y el gobierno ha gestionada ayuda internacional con una planta potabilizadora
                    en el lago de  Ilopango, sin embargo mientras que no comience su construcción, ANDA ha hecho varias gestiones, pero no suficientes por la cual hay un comunidades
                    que no reciben suministro de agua y deben estar almacenando agua en barriles. Esto trae otras problemáticas como la proliferación de Zancudos o de enfermedades
                    intestinales. etc.

                </p>

                <h3>
                    Demandamos:
                </h3>

                <ul>
                    <li> - Mantenimiento al desague hidrico. </li>
                    <li> - Que haya multas por botar basura </li>
                    <li> - Escuchar a la comunidades marginadas</li>

                </ul>
            </div>



            <form action="" className="container-peticion">

                <p>Exigimos a los gobernantes que el acceso al agua
                    potable sea un derecho que se garantice a todos los
                    salvadoreños y que este se distribuya equitativamente
                    en todos los sectores de la poblacion</p>

                <label> Progreso de firmas: </label>

                <div className="Containerr">
                    <div className="skill">
                        <div className='Padre'>
                            <div className='Barra'>
                                <span> 50% </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            <div className="post">

                <label for="POST-name"> Nombre completo</label>
                <input id="POST-name"type="text" name="nombre" />
                
                <label for="POST-name">Correo electronico</label>
                <input id="POST-name"type="text" name="correo" />

                <label for="POST-name">Documento Unico de Identidad </label>
                <input id="POST-name"type="text" name="dui" />

                <label for="POST-name">Número de telefono</label>
                <input id="POST-name"type="text" name="telefono" />


                <div>

                <input type="submit" className="btn-submit" value="Enviar" />

                <input type="reset" className="btn-submit" value="Borra" />

                </div>


                </div>

            </form>

            <div id="br">-</div>

            <>
            <Footer/>
            </>

            

        </section>
    );

};

export default Info_peticiones;