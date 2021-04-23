import React, { useContext, useEffect } from 'react';
import Layout from "../components/Layout/layout";
import Link from "next/link";
import UseDatosContext from "../context/useDatosContext";
import { CardNoticias } from "../components/Section/Informacion/estilosInformacion";

const CuvNoticia = () => {

    const useDatosContext = useContext( UseDatosContext );
    const { noticias, obtenerNoticias } = useDatosContext;

    useEffect( () => {
        //obtenerLicenciatura();
        obtenerNoticias();
    }, [] );

    return ( 
        <Layout>
            <section className="contenedor secciones">
                <h2>Noticias Cuv</h2>
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
            </section>
        </Layout>
     );
}
 
export default CuvNoticia;