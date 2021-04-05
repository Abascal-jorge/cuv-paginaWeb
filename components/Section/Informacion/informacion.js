import React from 'react';
import Link from "next/link";
import { SectionInformacion } from "./estilosInformacion";
import Slider from "./slider";

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

                <article>
                    <h2>Noticias CUV</h2>
                    <div className="card-noticias">
                        <div className="card-noti-info">
                            <div className="info-img">
                                <img src="./cuv_foto.jpg"/>
                            </div>
                            <div className="info-noticia">
                                <h3>Noticia</h3>
                                <p className="descripcion-noti">Descipcion noticia corta</p>
                                <Link href="/">LEER MÁS</Link>
                            </div>
                            <div className="info-fecha">
                                <p >15 Febrero. 2021</p>
                            </div>
                        </div>
                        <div className="card-noti-info">
                            <div className="info-img">
                                <img src="./cuv_foto.jpg"/>
                            </div>
                            <div className="info-noticia">
                                <h3>Noticia</h3>
                                <p className="descripcion-noti">Descipcion noticia corta</p>
                                <Link href="/">LEER MÁS</Link>
                            </div>
                            <div className="info-fecha">
                                <p >15 Febrero. 2021</p>
                            </div>
                        </div>
                        <div className="card-noti-info">
                            <div className="info-img">
                                <img src="./cuv_foto.jpg"/>
                            </div>
                            <div className="info-noticia">
                                <h3>Noticia</h3>
                                <p className="descripcion-noti">Descipcion noticia corta</p>
                                <Link href="/">LEER MÁS</Link>
                            </div>
                            <div className="info-fecha">
                                <p >15 Febrero. 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-vermas">
                        <button>Ver Mas Noticias</button>
                    </div>
                </article>

                <div className="croquis">
                    <h2 className="title">Croquis universitario</h2>
                    <div className="imagen-croquis">
                        <img src="/croqui.jpg"/>
                    </div>
                </div>
            </div>
        </SectionInformacion>
     );
}
 
export default Informacion;