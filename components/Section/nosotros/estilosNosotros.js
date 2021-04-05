import styled from "@emotion/styled";

export const ContenidoMision = styled.div`
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

export const NosotrosDiv = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 40px;

    .column{
        width: calc(50% - 20px);
    }

    .info-nosotros{
        padding: 20px;
        p{
            text-align: justify;
        }
    }

    .imagen-nosotros{
        text-align: center;
        padding: 20px;
        img{
            width: 400px;
            height: 400px;
            object-fit: cover;
            border-radius: 16px;
        }
    }

    @media(max-width: 950px){
        .column{
            width: 100%;
        }
    }
    @media(max-width: 550px){
        .imagen-nosotros{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`;

export const Valores = styled.article`
    margin-top: 40px;

    p{
        letter-spacing: 1px;
        padding: 10px;
    }

    .card-items{
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        .card{
            background-color: rgba(252, 238, 206);
            width: 200px;
            height: 200px;
            margin: 10px;
            border-radius: 50%;
            border: 4px solid rgba(252, 238, 206);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            svg{
                width: 50px;
                color: red;
            }

            &:hover{
                background: rgba(252, 238, 206, .5);
            }
        }
    }
`;
