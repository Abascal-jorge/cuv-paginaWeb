import React from 'react';
import Link from "next/link";
import { FooterPie } from "./estilosFooter";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {

    return ( 
        <FooterPie>
            <div  className="contenedor">
                <div className="sociales-footer">
                    <div className="datos-universidad">
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