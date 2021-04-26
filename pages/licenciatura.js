import React from 'react';
import Layout from "../components/Layout/layout";
import styled from "@emotion/styled";

const ContenidoPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        flex: 1;
        padding: 5px;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
`;

const Licenciatura = () => {
    return ( 
        <Layout>    
            <section className="secciones contenedor">
                <h2>Licenciaturas en el CUV</h2>
                <ContenidoPrincipal>
                    <div>
                        <img src="./cuv_foto.jpg"/>
                    </div>
                    <div>
                        <p>El Centro Universitario Valladolid ofrece un total de 22 Licenciaturas de 7 áreas: 
                        Investigación y Ciencias Jurídicas, Diseño y Comunicación, Ingeniería y Tecnologías, Educación, Economía y Administración, Turismo y Salud.
                        Es una de las mejores opciones de Licenciatura en la Ciudad de Valladolid.</p>
                    </div>
                </ContenidoPrincipal>
                <div>
                        <p>¿Cómo es posible que en tan solo tres años se pueda concluir el programa de Licenciatura?</p>
                        <p>
                        El año escolar está dividido en tres cuatrimestres: de Septiembre a Diciembre, de Enero a Abril, 
                        y de Mayo a Agosto. Cada cuatrimestre consta de 14 semanas de clase y una de exámenes finales. 
                        De esta forma el estudiante podrá concluir su carrera en 3 años optimizando el empleo del tiempo de 
                        formación sin reducir la carga académica y sin menoscabo alguno a la calidad educativa.
                        </p>

                        <p>¿Esto significa que el estudiante no tiene vacaciones en este periodo?</p>
                        <p>                            
                        El plan de estudios contempla un corto periodo de vacaciones dentro de su candelario al término de cada cuatrimestre.
                        </p>

                        <div>
                            <p>Requisitos de inscripcion</p>
                            <ul>
                                <li>LLenar solicitud de inscripción</li>
                                <li>Certificado o constancia de Preparatoria (Original y 2 copias)</li>
                                <li>Acta de nacimiento (Original y 2 copias)</li>
                                <li>Comprobante de domicilio luz, agua o teléfono (Original y 2 copias)</li>
                                <li>CURP (2 copias)</li>
                                <li>6 fotografías infantiles b/n (No instantáneas)</li>
                                <li>Cubrir cuota de inscripción</li>
                            </ul>
                        </div>
                </div>
                <div>
                    <h3>Salud</h3>
                    <div>

                    </div>
                </div>
            </section>
        </Layout>
     );
}
 
export default Licenciatura;