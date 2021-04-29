import React from 'react';
import Header from "./Header";
import Footer from "../footer/footer";
import Head from "next/head";


const Layout = ( { children }) => {

    return ( 
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
                <title>Centro Universitario Vallodolid</title>
            </Head>

            <div className="pagina">
                <Header/>

                <main  className="contenido-principal">
                    { children }
                </main>

                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;