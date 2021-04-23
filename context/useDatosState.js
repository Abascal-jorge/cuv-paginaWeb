import React, { useReducer } from "react";
import useDatosContext from "./useDatosContext";
import useDatosReducer from "./useDatosReducer";
import axios from 'axios';
import { OBTENER_UNIVERSIDADES,
         OBTENER_NOTICIAS,
         NOTICIA_SELECCIONADA } from "../type";


const UseDatosState = ( { children } ) => {

    const initialState = {
        licenciaturas: null,
        noticias: null,
        galeria: null,
        noticiaActual: null
    }

    const [ state, distpatch ] = useReducer( useDatosReducer, initialState );
    
    /* Obtener todas las licenciaturas*/
    const obtenerLicenciatura = async ( ) => {
        try {
            const url = `${ process.env.backendURL }/licenciaturas`;
            const res = await axios( url );
            distpatch({
                type: OBTENER_UNIVERSIDADES,
                payload: res.data.licenciaturas
            });
        } catch (error) {
            console.log(error);   
        }
    }
    
    /*Obtener todas las noticias */
    const obtenerNoticias = async () => {
        try {
            const url = `${process.env.backendURL}/noticia`;
            const res = await axios( url );
            distpatch({
                type: OBTENER_NOTICIAS,
                payload: res.data.noticias
            });
        } catch (error) {
            console.log(error);
        }
    }

    /**Obtener las notcia seleccionada para la pagina dinamica */
    const obtenerNoticiaSeleccionada = async id => {
        try {
            const url = `${process.env.backendURL}/noticia`;
            const res = await axios.get( `${url}/${id}` );
            
            console.log(res.data.noticia);

            distpatch({
                type: NOTICIA_SELECCIONADA,
                payload: res.data.noticia
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (   

        <useDatosContext.Provider
            value= {
                {
                    //Funciones y variables a compartir 
                    licenciaturas: state.licenciaturas,
                    noticias: state.noticias,
                    noticiaActual: state.noticiaActual,
                    obtenerLicenciatura,
                    obtenerNoticias,  
                    obtenerNoticiaSeleccionada  
               }
            }
        >
            { children }
        </useDatosContext.Provider>

    );

}
 
export default UseDatosState;