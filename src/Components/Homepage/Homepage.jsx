import React from "react";
import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Container from "./Container/Container";
import Card from "./Cards/Cards";
import Footer from "../Footer/Footer";
import NoticeServices from "../../Services/NoticeServices";
import RetoHomepageServices from "../../Services/RetoHomepageServices"
import OneReto from "./RetoOne/OneReto"

import Article from "./Notice/NoticeCards";

const principal = () =>{
    const {getRetos} = RetoHomepageServices
        const [trial, setTrial] = useState([]);
      
        useEffect(() => {
            const fetchData = async () =>{
              const data = await getRetos();
              setTrial(data);
            }
            fetchData()
            
        },[]);

    const {getNotice} = NoticeServices
    const [article, setArticle] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await getNotice();
            setArticle(data);
        }
        fetchData()
    },[]);


    return (

        <div>
            <>

            <Container/>
            <Article article={article} />
            <OneReto retos={trial} />
            <Footer/>


            </>
        </div>
    );
}

export default principal;