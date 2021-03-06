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
        
        flex-wrap: wrap;
    }

    .img-noticia{
        padding: 10px;
        width: 45%;
        text-align: center;
        img{
            margin: 0 auto;
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .datos-noticia{
        width: 55%;
        p{
            margin: 0;
            padding: 0 10px 10px 20px;
            text-align: justify;
        }

        .fecha{
            text-align: right;
            color: crimson;
        }
    }

    .info-extra{
        padding: 10px;
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
        justify-content: center;
        column-gap: 10px;
        row-gap: 10px;
        div{
            p{
                text-transform: capitalize;
                text-align: center;
            }
            img{
                object-fit: cover;
                width: 100%;
            }
        }
    }

    @media( max-width: 768px){
        .noticia{
            flex-direction: column;
        }
        .datos-noticia{
            width: 100%;
            p{
                padding: 10px;
            }
        }
        .img-noticia{
            width: 100%;
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
                                    <img src={noticiaActual.imagen0}  alt= { noticiaActual.tituloimagen0}/>
                                </div>
                                <div className="datos-noticia">
                                    <p>
                                        { noticiaActual.noticia }
                                    </p>
                                    <p className="fecha"> { `Fecha Publicaci??n: ${noticiaActual.fecha.split("T")[0]}` }</p>
                                </div>
                        </div>
                        <div className="info-extra">
                            <div>
                                <img src={ noticiaActual.imagen1 } />
                                <p> { noticiaActual.tituloimagen1 } </p>
                            </div>
                            <div>
                                <img src={ noticiaActual.imagen2 } />
                                <p> { noticiaActual.tituloimagen2 } </p>
                            </div>
                            <div>
                                <img src={ noticiaActual.imagen3 } />
                                <p> { noticiaActual.tituloimagen3 } </p>
                            </div>
                        </div>
                    </>
                }
            </SectionNoticia>
        </Layout>
     );
}
 
export default Noticias;