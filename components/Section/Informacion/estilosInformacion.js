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

    .croquis .imagen-croquis img{
        width: 100%;
        object-fit: cover;
    }

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
        appearance: none;
        background: none;
        border-radius: 16px;
        padding: 10px 20px;
        margin-top: 20px;

        &:hover{
            background-color: #eee;
        }
    }

    article .info-img img{
        width: 100%;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }

    article .card-noticias{
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 20px;
    }

    article .card-noti-info{
        border-radius: 16px;
        border: 1px solid #eee;
        width: calc(33.33% - 10px);
        -webkit-box-shadow: 5px 5px 15px -8px #000000; 
        box-shadow: 5px 5px 15px -8px #000000;
    }

    .info-noticia{
        padding: 20px;
    }

    .info-fecha{
        background-color: #eee;
        margin-top: 40px;
        border-top: 1px solid #eee;
        padding: 0px 20px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        p{
            margin: 0;
            padding: 10px 0;
        }
    }

    @media(max-width: 768px){
        article .card-noti-info{
            width: calc(50% - 10px);
         }
    }

    @media(max-width: 550px){
        article .card-noti-info{
            width: 100%;
        }
    }

    @media( max-width: 950px){
        .informacion-section .column{
            width: 100%;
        }
    }
`;