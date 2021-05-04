import React from 'react';
import { BannerPrincipal } from "./estilosLayout";
import { useRouter } from "next/router"

const Banner = () => {

    const Router = useRouter();

    return (  
        <BannerPrincipal className="banner">
            <div className="contenedor">
                <div>
                    <p>
                        Ven y conoce nuestras instalaciones, de igual manera puedes reservar
                        o agendar una cita para conocer nuestras instalaciones.
                    </p>
                    <button onClick= { () => Router.push("/nosotros") } >Conocenos mas</button>
                </div>
            </div>
        </BannerPrincipal>
    );
}
 
export default Banner;