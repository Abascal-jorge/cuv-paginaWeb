import React from 'react';
import styled from "@emotion/styled";

export const ContenidoPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        flex: 1;
        padding: 5px;
        img{
            width: 100%;
            object-fit: cover;
        }
    }

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

export const CardSetion = styled.div`

    h2{
        margin-top: 40px;
        padding-top: 10px;
        border-top: 2px solid #eee;
    }

    .card-licenciaturas{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-content: center;
        align-items: center;
        column-gap: 10px;
        row-gap: 10px;
    }

    .card{
        height: 450px;
        border: 1px solid #eee;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        .card-img{
            img{
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
        }

        .card-info{
            padding: 10px;
            text-align: center;
            h3{
               
            }
            a{
                color: blue;
                font-weight: 700;
            }
        }
    }
`;

export const InfoUniversidad = styled.div`
    .pregunta{
        padding: 10px 0;
        color: blue;
    }

    p{
        text-align: justify;
    }
`;