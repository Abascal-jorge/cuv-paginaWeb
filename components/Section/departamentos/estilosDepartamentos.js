import styled from "@emotion/styled";

export const BannerPrincipal = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .imagen-article{
        flex: 1;
        text-align: center;
        img{
            border-radius: 16px;
            object-fit: cover;
        }
    }
    p {
        flex: 1;
        text-align: justify;
    }

    @media(max-width: 760px){
        flex-direction: column;
        .imagen-article{
            img{
                width: 100%;
            }
        }
    }
`;

export const Beneficios = styled.div`
    padding: 20px;
    .info-beneficios{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }   

    .info-area{
        flex: 1;
        h3{

        }
        P{
            text-align: justify;

        }
    }

    .img-beneficio{
        flex: 1;
        text-align: center;
        img{
            border-radius: 16px;
            padding: 10px;
            object-fit: cover;
        }
    }

    .info-beneficios .left{
        order: -1;
    }

    @media(max-width: 760px){
        .info-beneficios{
            flex-direction: column;
        }   
        .info-beneficios .left{
            order: 2;
        }
        .img-beneficio{
            img{
                width: 100%;
                padding: 0;
            }
        }
    }
`;