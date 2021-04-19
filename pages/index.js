import React, { useContext, useEffect } from 'react';
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Layout from "../components/Layout/layout";
import Banner from "../components/Layout/Banner";
import Informacion from "../components/Section/Informacion/informacion";
import UseDatosContext from "../context/useDatosContext";


export default function Home() {

  const useDatosContext = useContext( UseDatosContext );
  const { obtenerNoticias } = useDatosContext;
  /*
  window.onscroll = (  ) => {
        const header = document.querySelector("header");
        if( scrollY > 100 ){
            header.classList.add("scrollActive");
        }else{
            header.classList.remove("scrollActive");
        }
    }

  */

  useEffect( () => {
    //obtenerLicenciatura();
    obtenerNoticias();
  }, [] );
    

  return (
    <>
      <Head>
        <title>Centro Universitario Vallodolid</title>
      </Head>
      <Layout>
        <Banner/>
        <Informacion/>
      </Layout>
    </>
  )
}
