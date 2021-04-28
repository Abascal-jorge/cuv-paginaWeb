import React, { useEffect } from 'react';
import Link from 'next/link';
import { Navegacion } from "./estilosLayout";

const Header = () => {

    //Funcion agregando funccionalidad al boton menu movil
    const menuMovil = () => {
        const nav = document.querySelector("#nav-menu");
        const cerrar = document.querySelector(".items-nav i");
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

    useEffect( () => {
        window.onscroll = (  ) => {
            const header = document.querySelector("header");
            if( scrollY > 40 ){
                header.classList.add("scrollActive");
            }else{
                header.classList.remove("scrollActive");
            }
        }
    }, []);

    return ( 
        <Navegacion>
            <div className="items-nav contenedor">
                <div className="logo">
                    <Link href="/"><img src="./logo_cuv.png"/></Link>
                </div>
                <nav id="nav-menu">
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/nosotros">Nosotros</Link></li>
                        <li className="principal-leve">
                            <Link href="#">Oferta Educativa</Link>
                            <ul className="next-leve">
                                <li><Link href="/licenciatura">Licenciatura</Link></li>
                                
                            </ul>
                        </li>
                        <li><Link href="/departamentos">Departamentos Esatudiantiles</Link></li>
                        <li><Link href="/galeria">Galería</Link></li>
                        <li><Link href="/contactanos">Contacto</Link></li>
                    </ul>
                </nav>
                <i onClick={ menuMovil }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </i>
            </div>
        </Navegacion>
    );
}
 
export default Header;

/*
<li><Link href="/">Maestria</Link></li>
                                <li><Link href="/">Preparatoria</Link></li>
                                <li><Link href="/">Secundaria</Link></li>
*/