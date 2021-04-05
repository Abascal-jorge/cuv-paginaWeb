import React from 'react';
import { DivMapa } from "./estilosContactanos";

const Ubicacion = () => {
    return ( 
        <DivMapa>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.738344980525!2d-88.19082758412944!3d20.68022150495901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f510ac05e073bab%3A0xccd73571f13d1b71!2sCentro%20Universitario%20de%20Valladolid!5e0!3m2!1ses-419!2smx!4v1616799154170!5m2!1ses-419!2smx"  loading="lazy"></iframe>
        </DivMapa>
     );
}
 
export default Ubicacion;