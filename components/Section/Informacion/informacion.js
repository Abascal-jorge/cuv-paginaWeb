import React, { useContext }  from 'react';
import Link from "next/link";
import { SectionInformacion, CardNoticias } from "./estilosInformacion";
import Slider from "./slider";
import UseDatosContext from "../../../context/useDatosContext";
import { useRouter } from 'next/router';

const Informacion = () => {

    const router = useRouter();

    const usedatoscontext = useContext(UseDatosContext);
    const { noticias } = usedatoscontext;

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
                    <CardNoticias>
                        { noticias && noticias.map( info => (
                            <div 
                                className="card-noti-info"
                                key={ info._id }
                            >
                                <div className="info-img">
                                    <img src={info.imagen0}/>
                                </div>
                                <div className="info-noticia">
                                    <h3>{info.titulo}</h3>
                                    <p className="descripcion-noti">{info.descripcion}</p>
                                    <Link href={`/noticias/${info._id}`}>LEER MÁS</Link>
                                </div>
                                <div className="info-fecha">
                                    <p >{info.fecha.split("T")[0]}</p>
                                </div>
                            </div>
                        ))
                        }   
                    </CardNoticias>
                    <div className="button-vermas">
                        <button onClick={ () => router.push("/cuvnoticia") } >Mas noticias</button>
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