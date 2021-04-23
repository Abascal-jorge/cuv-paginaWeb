import React, { useContext, useEffect } from 'react';
import Layout from "../../components/Layout/layout";
import { useRouter } from "next/router";
import UseDatosContext from "../../context/useDatosContext";
import styled from "@emotion/styled";

const SectionNoticia = styled.section`
    margin-top: 150px;

    .noticia{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .img-noticia{
        width: 45%;
        text-align: center;
        img{
            margin: 0 auto;
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .datos-noticia{

        width: 55%;

        p{
            padding: 10px;
            text-align: justify;
        }

        .fecha{
            text-align: right;
            color: crimson;
        }
    }


`;

const Noticias = () => {

    const router = useRouter();

    const { query: { id } } = router;
    const useDatosContext = useContext( UseDatosContext );
    const { obtenerNoticiaSeleccionada, noticiaActual } = useDatosContext;

    useEffect( async () => {
        await obtenerNoticiaSeleccionada(id);
    }, []);
    
    return ( 
        <Layout>
            <SectionNoticia className="contenedor">
                {noticiaActual && 
                    <>
                        <h2> { noticiaActual.titulo } </h2>
                        <div className="noticia">
                                <div className="img-noticia">
                                    <img src={noticiaActual.imagen0}/>
                                </div>
                                <div className="datos-noticia">
                                    <p>
                                        { noticiaActual.noticia }
                                    </p>
                                    <p className="fecha"> { noticiaActual.fecha }</p>
                                </div>
                        </div>
                    </>
                }
            </SectionNoticia>
        </Layout>
     );
}
 
export default Noticias;