import React from "react";
import './Status.css';
import { useState } from "react";
import { useEffect } from "react";




export const Status = ({initial, stock, onAdd}) => {

    

    const [status, setStatus] = useState(initial);

    // variables que utilizaremos mas adelante con la API de AUT0.
    let horas = status * 0.25;
    let cupon = status * 1;


    const incrementar = () => {
        setStatus(status + 1);
    }

    const decrementar = () => {
        setStatus(status - 1);
    }

    const borrar = () => {
        setStatus(status-status);
    };

    // para que se recalgue medio se modifique initial.

    useEffect(() => {
        setStatus(parseInt(initial));
    }, [initial]) 

    // trabajo logico, se debe almacenar en la API

    return (

        <section className="status-container">

         <div className="sistema-de-compras">

            <h2 className="equivalencias"> Sistema de equivalencias:</h2>

            <div className="ingreso-valores">

            <label className="cant">Ingresa la cantidad de monedas:</label><span> {status} </span>

            <button className="mas" onClick={incrementar} disabled= {status >= stock}> Más </button>

            <button className="menos" onClick={decrementar} disabled= {status <= 0}> Menos </button>


            <div className="api">

                <button className="compra" disabled= {stock <= 0} onClick={ () => onAdd(status)}> push </button>

            </div>

            </div>

            {/* -------------Agregando conversores: ---------------- */}

            <div className="h-sociales">

                 
                 <label className="horas-sociales">Las horas sociales obtenidas serán: </label>
                 <span> 
                        {(status * 0.25)} horas
                 </span>   
            

            </div>

            <div className="cupones-status">
                <label className="cupones-a"> Saldo disponible para cupones: </label>
                <span> 
                    
                    {status } cupon

                     </span>
            </div>

            <div className="api">
                <button className="borrar" onClick={borrar}> clean </button>
            </div>

           


        </div>

        </section>
    )


};

export default Status;