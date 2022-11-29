import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import PageCards from "../Components/PageCards/PageCard";
import Container from "../Components/Homepage/Container/Container";

import Login from '../Components/Login/Login';
import NoticePage from "../Components/Notice/NoticePage";
import LoginOut from '../Components/Login/LoginOut/LoginOut';
import { Navigate, Route, Routes } from 'react-router-dom';
import {Profile} from '../Components/Login/Profile/Profile';
import Info_voluntariado from "../Components/Informacion/info-voluntariado/Info-voluntariado";
import Info_peticiones from "../Components/Informacion/info-peticiones/Info-peticiones";
import Status from "../Components/Login/Profile/Status/Status";
import ItemListContainer from "../Components/Login/Profile/Status/ItemList/ItemListContainer";

import Voluntariado from "../Components/Voluntariado/VoluntariadoPage";


const AppRouter = () => {

   return (
    <>
    
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginOut" element={<LoginOut />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Container" element ={<Container/>} />
        <Route path="/NoticePage" element ={<NoticePage/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Retos" element={<PageCards />} />
        <Route path ="/Voluntariado" element ={<Voluntariado/>} />
        <Route path="/Info-voluntariado" element= {<Info_voluntariado />} />
        <Route path="/Info-peticiones" element={<Info_peticiones />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/ItemListContainer" element={<ItemListContainer />} />


    </Routes>
    
    </>

   );

};


export default AppRouter