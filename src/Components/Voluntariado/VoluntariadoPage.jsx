import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Voluntariado from './VoluntariadoCard/CardVoluntariado/SectionVoluntariado';
import Peticiones from './Peticiones/PeticionesCard/SectionPeticiones';
import VoluntariadoServices from '../../Services/VoluntariadoServices';
import PeticionServices from '../../Services/PeticionServices';

const VoluntariadoPage = () => {

    const {getVoluntariado} = VoluntariadoServices
    const [voluntariado, setVoluntariado] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await getVoluntariado();
            setVoluntariado(data);
        }
        fetchData()
    },[]);

    const {getPeticion} = PeticionServices
    const [peticion, setPeticion] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await getPeticion();
            setPeticion(data);
        }
        fetchData()
    },[]);


  return (
    <>
    <Voluntariado voluntariados={voluntariado} />
    <Peticiones peticiones={peticion} />
    <Footer/>
    </>
  )
}

export default VoluntariadoPage