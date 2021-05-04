import styled from "@emotion/styled";

export const Navegacion = styled.header`
    position: fixed;
    width: 100%;
    background-color: rgba(252, 238, 206, .7);
    z-index: 10;
    
    .items-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        .logo{
            z-index: 10;
            width: 100px;
            height: 100px;
            padding: 10px;
            img{
                cursor: pointer; 
            }
        }

        nav{
            transition: all .2s ease-in-out;
        }

        nav ul{
            padding: 0;
            margin: 0;
        }

        nav ul li{
            list-style: none;
            display: inline-block;
        }

        nav ul li a{
            color: rgba(14, 47, 111);
            display: block;
            padding: 10px;
            font-weight: bold;
        }

        i{
            width: 30px;
            height: 30px;
            display: block;
            margin-right: 10px;
            z-index: 10;
            display: none;
        }

        /* Estilos para el nuevo menu complemento */

        .principal-leve{
            position: relative;

            &:hover ul{
                display: block;
            }
        }

        .next-leve{
            display: none;
            width: 100%; 
            position: absolute;
            background-color: burlywood;
            text-align: center;
            li{ 
                display: inline;
                a{
                    &:hover{
                        background-color: red;
                    }
                }
            }
        }

        @media( max-width: 990px){
            nav{
                position: absolute;
                top: -800%;
                font-size: 14px;
            }

            .principal-leve{
                &:hover{
                    margin-bottom: 40px;
                }
            }

            i.active{
                color: white;
            }

            nav{
                width: 100%;
            }

            nav.active{
                text-align: center;
                width: 100%;
                height: 100vh;
                margin: 0 -20px;
                background-color: black;
                color: white;
                padding-top: 80px;
                top: 0px;
            } 

            nav ul li{
                display: block;
            }

            i{
                display: block;
            }
        }

    }
`;

export const BannerPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./cuv_foto.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 80vh;

    .contenedor div{
        color: rgba(14, 47, 111);
        letter-spacing: 1px;
        border-radius: 16px;
        padding: 15px;
        background-color: rgba(191, 125, 47, .6);
        p{
            font-weight: 700;
            font-size: 25px;
        }
    }

    .contenedor div button{
        color: white;
        outline: none;
        appearance: none;
        padding: 10px;
        border: 2px solid crimson;
        background-color: crimson;
        letter-spacing: 1px;
        font-weight: 400;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        &:hover{
            background: none;
            font-weight: 700;
            color: rgba(14, 47, 111);
        }
    }
    
    @media( max-width: 990px){
        .contenedor div{
            p{
                font-weight: 700;
                font-size: 16px;
            }
        }

        .contenedor div button{
            font-size: 14px;
            &:hover{
                background: none;
                font-weight: 700;
                color: rgba(14, 47, 111);
            }
        }
    }

    @media( max-width: 440px){
        .contenedor div{
            margin-top: 70px;
        }
    }
`;

