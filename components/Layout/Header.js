import React from 'react';
import Link from 'next/link'
import styled from "@emotion/styled";

const Navegacion = styled.header`
    letter-spacing: 1px;
    position: fixed;
    width: 100%;
    background-color: rgba(252, 238, 206, .7);
    
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

        @media( max-width: 960px){
            /*.logo.active p{
                color: white;
            }*/

            nav{
                position: absolute;
                top: -800%;
            }

            i.active{
                color: white;
            }

            nav.active{
                text-align: center;
                width: 100%;
                height: 60vh;
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

const Header = () => {

    //Funcion agregando funccionalidad al boton menu movil
    const menuMovil = () => {
        const nav = document.querySelector("#nav-menu");
        const cerrar = document.querySelector(".items-nav i");
        console.log(cerrar);
        const logo = document.querySelector(".logo");
        if( nav.classList.contains("active") ){
            nav.classList.remove("active");
            cerrar.classList.remove("active");
            logo.classList.remove("active");
        }else{
            nav.classList.add("active");
            cerrar.classList.add("active");
            logo.classList.add("active");
        }
    }

    /*
    window.onscroll = (  ) => {
        const header = document.querySelector("header");
        if( scrollY > 100 ){
            header.classList.add("scrollActive");
        }else{
            header.classList.remove("scrollActive");
        }
    }*/

    return ( 
        <Navegacion>
            <div className="items-nav contenedor">
                <div className="logo">
                    <img src="./logo_cuv.png"/>
                </div>
                <nav id="nav-menu">
                    <ul>
                        <li><Link href="#">Inicio</Link></li>
                        <li><Link href="#">Nosotros</Link></li>
                        <li><Link href="#">Oferta Educativa</Link></li>
                        <li><Link href="#">Departamentos Esatudiantiles</Link></li>
                        <li><Link href="#">Galería</Link></li>
                        <li><Link href="#">Contacto</Link></li>
                    </ul>
                </nav>
                <i onClick={ menuMovil }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </i>
            </div>
        </Navegacion>
    );
}
 
export default Header;