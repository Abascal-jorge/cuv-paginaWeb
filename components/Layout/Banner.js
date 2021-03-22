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
    //margin-top: -6%;

    .contenedor div{
        color: rgba(14, 47, 111);
        letter-spacing: 1px;
        font-weight: bold;
        border-radius: 16px;
        padding: 15px;
        background-color: rgba(191, 125, 47, .6);
    }

    .contenedor div button{
        color: white;
        outline: none;
        appearance: none;
        padding: 10px;
        border: 2px solid crimson;
        background-color: crimson;
        letter-spacing: 1px;
        font-weight: bold;
        &:hover{
            background: none;
            color: rgba(14, 47, 111);
        }
    }
    
`;

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