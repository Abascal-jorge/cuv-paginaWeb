import React, { useEffect, useContext} from 'react';
import Layout from "../components/Layout/layout";
import Link from "next/link";
import UseDatosContext from '../context/useDatosContext';
import { ContenidoPrincipal, CardSetion, InfoUniversidad } from "../components/Section/estilosLicenciatura"; 
import WOW from 'wowjs';

const Licenciatura = () => {

    const usedatoscontext = useContext( UseDatosContext );
    const { licenciaturas, obtenerLicenciatura } = usedatoscontext;
    let areas = [];

    useEffect(async () => {
        if( !licenciaturas ){
            await obtenerLicenciatura();
        }
    }, [ licenciaturas ]);

    const llenandoAreas = () => {
        if( licenciaturas){
            areas = licenciaturas.reduce( ( acc, valor ) => {
                if( !acc.includes(valor.area) ){
                    acc.push(valor.area);
                }
                return acc;
            },[]);
        }
        console.log(areas);
    }

    return ( 
        <Layout>    
            <section className="secciones contenedor">
                <h2>Licenciaturas en el CUV</h2>
                <ContenidoPrincipal>
                    <div>
                        <img src="./cuv_foto.jpg"/>
                    </div>
                    <div>
                        <h3>Oferta Educativa</h3>
                        <p>El Centro Universitario Valladolid ofrece un total de 22 Licenciaturas de 7 áreas: 
                        Investigación y Ciencias Jurídicas, Diseño y Comunicación, Ingeniería y Tecnologías, Educación, Economía y Administración, Turismo y Salud.
                        Es una de las mejores opciones de Licenciatura en la Ciudad de Valladolid.</p>
                    </div>
                </ContenidoPrincipal>
                <InfoUniversidad>
                        <p className="pregunta">¿Cómo es posible que en tan solo tres años se pueda concluir el programa de Licenciatura?</p>
                        <p>
                        El año escolar está dividido en tres cuatrimestres: de Septiembre a Diciembre, de Enero a Abril, 
                        y de Mayo a Agosto. Cada cuatrimestre consta de 14 semanas de clase y una de exámenes finales. 
                        De esta forma el estudiante podrá concluir su carrera en 3 años optimizando el empleo del tiempo de 
                        formación sin reducir la carga académica y sin menoscabo alguno a la calidad educativa.
                        </p>

                        <p className="pregunta">¿Esto significa que el estudiante no tiene vacaciones en este periodo?</p>
                        <p>                            
                        El plan de estudios contempla un corto periodo de vacaciones dentro de su candelario al término de cada cuatrimestre.
                        </p>

                        <div>
                            <p className="pregunta">Requisitos de inscripcion</p>
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
                </InfoUniversidad>
                    { licenciaturas &&
                        llenandoAreas(),
                        areas.map( ( area ) => (
                            <CardSetion>
                                <h2>{area}</h2>
                                <div className="card-licenciaturas">
                                    { 
                                        licenciaturas.map( ( lic ) => lic.area === area && (
                                                <div className="card wow slideInLeft " data-wow-duration="2s" data-wow-delay="5s">
                                                    <div className="card-img">
                                                        <img src={lic.imagen}/>
                                                    </div>
                                                    <div className="card-info">
                                                        <h3>{`Licenciatura en ${lic.licenciatura}`}</h3>
                                                        <Link href="/">Leer mas...</Link>
                                                    </div>
                                                </div>
                                        )) 
                                    }
                                </div>
                            </CardSetion>
                        ))
    
                    }
            </section>
        </Layout>
     );
}
 
export default Licenciatura;