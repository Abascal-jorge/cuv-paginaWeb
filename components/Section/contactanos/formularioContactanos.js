import React from 'react';
import Ubicacion from "./ubicacion";
import FormDatos from "./formDatos";

const FormularioContactanos = () => {
    return ( 
        <section className="secciones contactanos">
            <h2 className="title">Contactanos</h2>
            <div className="contenedor">
                <FormDatos/>
                <Ubicacion/>
            </div>
        </section>
     );
}
 
export default FormularioContactanos;