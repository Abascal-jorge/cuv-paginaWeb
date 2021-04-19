import React from 'react';
import '../styles/globals.css';
import UseDatosState from "../context/useDatosState";

const MyApp = ( { Component, pageProps } ) => {
  return ( 
    <UseDatosState>
        <Component {...pageProps}/>
    </UseDatosState>
  );
}
 
export default MyApp
