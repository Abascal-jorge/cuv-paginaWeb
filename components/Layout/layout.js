import React from 'react';
import Header from "./Header";


const Layout = ( { children }) => {
    return ( 
        <>
            <div className="pagina">
                <Header/>

                <main  className="contenido-principal">
                    { children }
                </main>

                <footer className="footer">
                    <p>JORGE ABASCAL LOPEZ</p>
                </footer>
            </div>
        </>
     );
}
 
export default Layout;