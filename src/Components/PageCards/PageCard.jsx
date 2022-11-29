import React from "react";
import Header from "../Header/Header";
import Information from "./Information/Information";
import Footer from "../Footer/Footer";
import Card from "./CardsTwo/CardSection";
import RetosS from "./RetosSingle/RetosS";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import RetoServices from "../../Services/RetosServices";


const RetosData = [
    {
        "_id": "637f8f28075fbe08e442c74b",
        "titulo_r": "Toma una ducha de 5 minutos",
        "descripcion_r": "Toma una ducha en tu hogar y ahorremos el agua juntos",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/1426/1426396.png",
        "complete": false,
        "fecha_r" : "13/07/2022",
        "__v": 0
    }, 
    {
        "_id":  "637fc3f0383714ef1a7654fc",
        "titulo_r": "¡Vamos a andar en bicicleta!",
        "descripcion_r": "Utiliza tu bicicleta para hacer un recorrido que frecuentes (Tiempo: 30 minutos)",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/3187/3187666.png",
        "complete": false,
        "fecha_r": "01/11/2022",
        "__v": 0
      },
      {
        "_id":"6382506b3f3ed97516232aac",
        "titulo_r": "Utiliza una botella de reciclaje",
        "descripcion_r": "Reutiliza aquellas botellas que tienes por ahi",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/8118/8118961.png",
        "complete": false,
        "fecha_r": "15/11/2022",
        "__v": 0
      },
      {
        "_id":"6382506b3f3ed97516232aac",
        "titulo_r": "Participa en un voluntariado",
        "descripcion_r": "Excoge en nuestra sección de voluntariado ¡Es hora de ayudar!",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/3045/3045363.png",
        "complete": false,
        "fecha_r": "17/11/2022",
        "__v": 0 
      },
      {
        "_id":"6382506b3f3ed97516232aac",
        "titulo_r": "Firma una de nuestras peticiones",
        "descripcion_r": "Ayudanos a mejorar y dar seguimiento a las problematicas dentro de nuestro país.",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/3098/3098851.png",
        "complete": false,
        "fecha_r": "10/11/2022",
        "__v": 0 
      },
      {
        "_id":"6382506b3f3ed97516232aac",
        "titulo_r": "Ve a correr a nuestro polideportivo UCA",
        "descripcion_r": "Visitanos en el polideportivo y corre como maximo 20 min",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/4357/4357645.png",
        "complete": false,
        "fecha_r": "17/11/2022",
        "__v": 0 
      },
      {
        "_id":"6382506b3f3ed97516232aac",
        "titulo_r": "Regala un libro que no utilices",
        "descripcion_r": "!Compartir un libro que ya no necesites, alguien más lo apreciara¡",
        "imagen_r": "https://cdn-icons-png.flaticon.com/512/2436/2436636.png",
        "complete": false,
        "fecha_r": "17/11/2022",
        "__v": 0 
      }
]



const Retos = () =>{
  const{getRetos} = RetoServices
  const [trial, setTrial] = useState([]);

  useEffect(() => {
      const fetchData = async () =>{
        const data = await getRetos();
        setTrial(data);
      }
      fetchData()
      
  },[]);

    return(
        <>
        <Information/>
        <RetosS retos={trial}/>
        <Footer/>
        </>

    );
}

export default Retos;