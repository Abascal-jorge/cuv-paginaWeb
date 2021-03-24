import React from 'react';
import SobreNosotros from "./sobreNosotros";
import Alcance from "./alcance";

const Conocenos = () => {
    return ( 
        <section className="secciones">
            <h2 className="title">Sobre Nosotros</h2>
            <div className="contenedor">
                <SobreNosotros/>
                <Alcance/>
            </div>
        </section>
    );
}
 
export default Conocenos;