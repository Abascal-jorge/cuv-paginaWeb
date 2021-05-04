import React, { useContext, useEffect } from 'react';
//import styles from '../styles/Home.module.css'
import Layout from "../components/Layout/layout";
import Banner from "../components/Layout/Banner";
import Informacion from "../components/Section/Informacion/informacion";
import UseDatosContext from "../context/useDatosContext";


export default function Home() {

  const useDatosContext = useContext( UseDatosContext );
  const { obtenerNoticias } = useDatosContext;

  useEffect( () => {
    //obtenerLicenciatura();
    obtenerNoticias();
  }, [] );
    
  return (
    <>
      <Layout>
        <Banner/>
        <Informacion/>
      </Layout>
    </>
  )
}
