import React from 'react';
import Header from "./Header";
import Footer from "../footer/footer";


const Layout = ( { children }) => {
    return ( 
        <>
            <div className="pagina">
                <Header/>

                <main  className="contenido-principal">
                    { children }
                </main>

                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;