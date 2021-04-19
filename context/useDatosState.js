import React, { useReducer } from "react";
import useDatosContext from "./useDatosContext";
import useDatosReducer from "./useDatosReducer";
import axios from 'axios';
import { OBTENER_UNIVERSIDADES,
    OBTENER_NOTICIAS } from "../type";


const UseDatosState = ( { children } ) => {

    const initialState = {
        universidades: null,
        noticias: null,
        galeria: null
    }

    const [ state, distpatch ] = useReducer( useDatosReducer, initialState );
    
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
    
    const obtenerNoticias = async () => {

        try {

            const url = `${process.env.backendURL}/noticia`;

            const res = await axios( url );

            console.log(res);

            distpatch({
                type: OBTENER_NOTICIAS,
                payload: res.data.noticias
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
                    universidades: state.licenciaturas,
                    noticias: state.noticias,
                    obtenerLicenciatura,
                    obtenerNoticias
                }
            }
        >
            { children }
        </useDatosContext.Provider>

    );

}
 
export default UseDatosState;