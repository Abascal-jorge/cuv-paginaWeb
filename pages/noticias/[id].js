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
    const { obtenerNoticiaSeleccionada } = useDatosContext;

    useEffect( async () => {
        await obtenerNoticiaSeleccionada(id);
    }, []);

    return ( 
        <Layout>
            <SectionNoticia className="contenedor">
                <h2>Centro Universitario de Valladolid - Realizan en el CUV Foro Día Internacional de la Mujer</h2>
                <div className="noticia">
                    <div className="img-noticia">
                        <img src="./nosotros"/>
                    </div>
                    <div className="datos-noticia">
                        <p>
                        En el Centro Universitario de Valladolid se realizó el 1er. Foro Educativo “Grandes Mujeres, Grandes Historias” en el marco de las actividades alusivas al Día Internacional de la Mujer, donde participaron alumnos de la Secundaria Deportiva CUV y del Bachillerato Tecnológico Francisco de Montejo, con el objetivo de propiciar espacios de reflexión sobre la importancia de la mujer como influyente histórico en el país, también se realizó la entrega de reconocimientos a los ganadores del concurso The Woman Flyer que se efectuó en días anteriores quedando en primer lugar las alumnas Pilar de Jesús Chicmul Pérez y Georgina Belén Perera Medina.
                        </p>
                        <p className="fecha">Fecha de la noticia</p>
                    </div>
                </div>
            </SectionNoticia>
        </Layout>
     );
}
 
export default Noticias;