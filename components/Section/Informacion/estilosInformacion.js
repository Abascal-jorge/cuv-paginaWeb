import styled from "@emotion/styled";

export const SectionInformacion = styled.section`
    .informacion-section .column{
        width: calc(50% - 10px);
        padding: 10px;
    }

    .text-title{
        letter-spacing: 1px;
        padding: 10px;
    }

    .text-description{
        letter-spacing: 1px;
        padding: 10px 15px 10px 10px;
        text-align: justify;
    }

    /*Parte css croquis img*/
    .croquis .imagen-croquis img{
        width: 100%;
        object-fit: cover;
    }

    /* Parte de css para las tarjetas de noticias */
    article{
        margin-top: 20px;
        padding: 10px;
    }

    article .button-vermas{
        text-align: center;
    }

    article .button-vermas button{
        border: 1px solid #222;
        outline: none;
        appearance: blue;
        background: none;
        border-radius: 16px;
        padding: 10px 20px;
        margin-top: 20px;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        &:hover{
            background-color: #eee;
        }
    }

    /* Media en general */

    @media( max-width: 990px){
        .informacion-section .column{
            width: 100%;
        }

        .text-description{
            font-size: 14px;
        }
    }
`;

export const CardNoticias = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 20px;

    .info-img img{
        width: 100%;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }

    .card-noti-info{
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        border: 1px solid #eee;
        width: calc(33.33% - 10px);
        -webkit-box-shadow: 5px 5px 15px -8px #000000; 
        box-shadow: 5px 5px 15px -8px #000000;
    }

    .info-noticia{
        flex: 1;
        padding: 20px;
        a{
            color: blue;
            letter-spacing: 1px;
        }
    }

    .info-fecha{
        background-color: #eee;
        border-top: 1px solid #eee;
        padding: 0px 20px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        p{
            margin: 0;
            padding: 10px 0;
        }
    }

    @media(max-width: 990px) {
        .info-noticia{
            h3{
                font-size: 16px;
            }
            p{
                font-size: 14px;
            }
            a{
                font-size: 14px;
            }
        }

        .info-fecha{
            p{
                font-size: 14px;
            }
        }
    }

    @media(max-width: 768px){
        .card-noti-info{
            width: calc(50% - 10px);
         }
    }

    @media(max-width: 550px){
        .card-noti-info{
            width: 100%;
        }
    }
`;
