import React from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterPie = styled.footer`
    background-color: rgba(18, 35, 143);
    color: white;

    .sociales-footer{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pie-info{
        border-top: 4px solid rgba(143, 18, 35);
        padding: 10px;
        text-align: center;
    }

    svg{
        font-size: 30px;
        cursor: pointer;
    }
`;


const Footer = () => {

    return ( 
        <FooterPie>
            <div  className="contenedor">
                <div className="sociales-footer">
                    <div>
                        <p>Centro Universitario de valladolid, Calle 49 No. 142-A Col. San Francisco</p>
                        <p>Valladolid, Yucatan, mexico</p>
                        <span>Clave SEP: 31PSU0034W</span>
                    </div>
                    <div>
                        <Link href="https://www.facebook.com/cuvcampus"><FacebookIcon/></Link>
                        <Link href="/"><TwitterIcon/></Link>
                        <Link href="/"><WhatsAppIcon/></Link>
                        <Link href="/"><InstagramIcon/></Link>
                    </div>
                </div>
                <p className="pie-info">&#xa9; Centro universitario de valladolid 2021 CUV</p>
            </div>
        </FooterPie>
     );
}
 
export default Footer;