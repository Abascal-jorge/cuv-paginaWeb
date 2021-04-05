import React from 'react';
import { BannerPrincipal } from "./estilosLayout";

const Banner = () => {
    return (  
        <BannerPrincipal className="banner">
            <div className="contenedor">
                <div>
                    <p>
                        Ven y conoce nuestras instalaciones, de igual manera puedes reservar
                        o agendar una cita para conocer nuestras instalaciones.
                    </p>
                    <button>Conocenos mas</button>
                </div>
            </div>
        </BannerPrincipal>
    );
}
 
export default Banner;