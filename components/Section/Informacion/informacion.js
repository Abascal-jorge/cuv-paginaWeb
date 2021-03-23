import React from 'react';
import styled from "@emotion/styled";
import Slider from "./slider";

const SectionInformacion = styled.section`
    .informacion-section .column{
        width: calc(50% - 10px);
    }
`;

const Informacion = () => {
    return ( 
        <SectionInformacion>
            <div className="contenedor">
                <div className="informacion-section">
                    <div className="column">
                        <h2>!Bienvenido (A) a casa!</h2>
                        <p>Centro universitario de valladolid es una escuela privad de nivel superior
                            que ofrece diversas carreras en un lapso de tiempo de 3 años, cubriendo estos
                            por cuatrimestre que se conforman de 12 semanas intensas de estudio y una ultima dedicada
                            a examenes que mostraran tu nivel de aprendizaje.
                        </p>
                    </div>
                    <Slider/>
                </div>
            </div>
        </SectionInformacion>
     );
}
 
export default Informacion;