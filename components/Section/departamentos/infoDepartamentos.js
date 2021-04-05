import React from 'react';
import { BannerPrincipal, Beneficios } from "./estilosDepartamentos";

const InfoDepartamentos = () => {
    return ( 
        <section className="secciones departamentos">
            <h2 className="title">Departamentos Estudiantiles</h2>
            <div className="contenedor">
                <BannerPrincipal>
                    <div className="imagen-article">
                        <img src="./departamentos/4.png"/>
                    </div>
                    <p>
                        Buscando la mejor comodidad para nuestros estudiantes universitarios, 
                        contamos con área de departamentos. En los departamentos estudiantiles 
                        del Centro Universitario de Valladolid vivirás la mejor experiencia de 
                        bienestar, convivencia y seguridad.
                        Todos los departamentos están diseñados especialmente para tu comodidad y 
                        para satisfacer tus diferentes necesidades como joven universitario, además
                        de tener como complemento diversos servicios, con la finalidad de que se 
                        tenga una experiencia integral en un solo lugar, en donde no tendrás la 
                        necesidad de salir de las instalaciones.
                    </p>
                </BannerPrincipal>
                <Beneficios className="beneficios">
                    <h2>Los Departamentos Incluyen</h2>
                    <div className="info-beneficios">
                        <div className="info-area">
                            <h3>Picina exclusiva</h3>
                            <p> 
                                Todos los departamentos están diseñados especialmente para tu comodidad y 
                                para satisfacer tus diferentes necesidades como joven universitario, además
                                de tener como complemento diversos servicios, con la finalidad de que se 
                                tenga una experiencia integral en un solo lugar, en donde no tendrás la 
                                necesidad de salir de las instalaciones.
                            </p>
                        </div>
                        <div className="img-beneficio">
                            <img src="./departamentos/3.png"/>
                        </div>
                    </div>
                    <div className="info-beneficios">
                        <div className="info-area">
                            <h3>Gymnasio exclusivo</h3>
                            <p> 
                                Todos los departamentos están diseñados especialmente para tu comodidad y 
                                para satisfacer tus diferentes necesidades como joven universitario, además
                                de tener como complemento diversos servicios, con la finalidad de que se 
                                tenga una experiencia integral en un solo lugar, en donde no tendrás la 
                                necesidad de salir de las instalaciones.
                            </p>
                        </div>
                        <div className="img-beneficio left">
                            <img src="./departamentos/2.png"/>
                        </div>
                    </div>
                    <div className="info-beneficios">
                        <div className="info-area">
                            <h3>Domo Estudiantial</h3>
                            <p> 
                                Todos los departamentos están diseñados especialmente para tu comodidad y 
                                para satisfacer tus diferentes necesidades como joven universitario, además
                                de tener como complemento diversos servicios, con la finalidad de que se 
                                tenga una experiencia integral en un solo lugar, en donde no tendrás la 
                                necesidad de salir de las instalaciones.
                            </p>
                        </div>
                        <div className="img-beneficio">
                            <img src="./departamentos/5.jpg"/>
                        </div>
                    </div>
                    <div className="info-beneficios">
                        <div className="info-area">
                            <h3>Sala de entretenimiento</h3>
                            <p> 
                                Todos los departamentos están diseñados especialmente para tu comodidad y 
                                para satisfacer tus diferentes necesidades como joven universitario, además
                                de tener como complemento diversos servicios, con la finalidad de que se 
                                tenga una experiencia integral en un solo lugar, en donde no tendrás la 
                                necesidad de salir de las instalaciones.
                            </p>
                        </div>
                        <div className="img-beneficio left">
                            <img src="./departamentos/7.png"/>
                        </div>
                    </div>
                </Beneficios>
            </div>
        </section>
     );
}
 
export default InfoDepartamentos;