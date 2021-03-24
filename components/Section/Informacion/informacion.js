import React from 'react';
import styled from "@emotion/styled";
import Slider from "./slider";

const SectionInformacion = styled.section`
    .informacion-section .column{
        width: calc(50% - 10px);
        padding: 10px;
    }

    .text-title{
        letter-spacing: 1px;
        padding: 10px;
    }

    .text-description{
        letter-spacing: 1px;
        padding: 10px 15px 10px 10px;
        text-align: justify;
    }

    @media( max-width: 950px){
        .informacion-section .column{
            width: 100%;
        }
    }
`;

const Informacion = () => {
    return ( 
        <SectionInformacion>
            <div className="contenedor">
                <div className="informacion-section">
                    <div className="column">
                        <h2 className="text-title">!Bienvenido (A) a casa!</h2>
                        <p className="text-description">Centro universitario de valladolid es una escuela privad de nivel superior
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