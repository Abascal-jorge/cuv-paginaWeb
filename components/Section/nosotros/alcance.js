import React from 'react';
import styled from "@emotion/styled";

const ContenidoMision = styled.div`
    .info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        div{
            width: calc(50% - 20px);
            padding: 20px;
            img{
                width: 100%;
                border-radius: 16px;
            }
        }

        p{
            text-align: justify;
        }
        
        .left{
            order: -1;
        }

        @media (max-width: 950px){
            div{
                width: 100%;
                padding: 20px;
                img{
                    width: 400px;
                    height: 400px;
                    object-fit: cover;
                }
            }
            .imagen-nosotros{
                text-align: center;
            }
            .left{
                order: 2;
            }
        }
        @media (max-width: 550px){
            div{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

const Alcance = () => {
    return ( 
        <article>
            <h2 className="title">Mision y vision</h2>
            <ContenidoMision className="contenido-mision">
                <div className="info">
                    <div className="imagen-nosotros">
                        <img src="/nosotros.jpg"/>
                    </div>
                    <div className="info-nosotros">
                        <h3>Mision</h3>
                        <p>
                            Somos una institución educativa que ofrece servicios de calidad mediante métodos
                            educativos de vanguardia y con fomento a la generación de nuevos conocimientos 
                            a través de la investigación, difusión, extensión y vinculación; con procesos de 
                            gestión certificados y planes de estudio acreditados por organismos reconocidos; 
                            formando profesionistas con una solidad preparación científica, humanista y tecnológica, 
                            con desarrollo sustentable regional y nacional; que brinda una infraestructura física y 
                            tecnológica acorde al modelo educativo vigente y con programas complementarios eficientes 
                            que satisfacen la incorporación efectiva de sus egresados al mercado laboral.
                        </p>
                    </div>
                </div>
                <div className="info">
                    <div className="imagen-nosotros right">
                        <img src="/nosotros.jpg"/>
                    </div>
                    <div className="info-nosotros left">
                        <h3>Vision</h3>
                        <p>
                            Somos una institución educativa que ofrece servicios de calidad mediante métodos
                            educativos de vanguardia y con fomento a la generación de nuevos conocimientos 
                            a través de la investigación, difusión, extensión y vinculación; con procesos de 
                            gestión certificados y planes de estudio acreditados por organismos reconocidos; 
                            formando profesionistas con una solidad preparación científica, humanista y tecnológica, 
                            con desarrollo sustentable regional y nacional; que brinda una infraestructura física y 
                            tecnológica acorde al modelo educativo vigente y con programas complementarios eficientes 
                            que satisfacen la incorporación efectiva de sus egresados al mercado laboral.
                        </p>
                    </div>
                </div>
            </ContenidoMision>
        </article>
     );
}
 
export default Alcance;