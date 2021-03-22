import React from 'react';
import styled from "@emotion/styled";

const BannerPrincipal = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./cuv_foto.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 80vh;

    div{
        color: white;
        border-radius: 16px;
        padding: 15px;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const Banner = () => {
    return (  
        <BannerPrincipal className="banner">
            <div>
                <p>
                    Ven y conoce nuestras instalaciones, de igual manera puedes reservar
                    o agendar una cita para conocer nuestras instalaciones.
                </p>
                <button>Conocenos mas</button>
            </div>
        </BannerPrincipal>
    );
}
 
export default Banner;