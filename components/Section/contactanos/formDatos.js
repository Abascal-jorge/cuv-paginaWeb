import React from 'react';
import { FormContactanos } from "./estilosContactanos";

const FormDatos = () => {

    const licenciaturas = ["Crimonología y Criminalistica", "Derecho", "Diseño Publicitario", "Ciencias de la comunicacion",
    "arquitectura", "Sistemas Computacionales", "Educacion prescolar", "Ciencias de la educacion", "Contaduria Pública y Finanzas",
    "Administracion de empresas", "Mercadotecnia", "Administracion de empresas turisticas"];

    return ( 
        <FormContactanos>
            <form>
                <div className="inputs">
                    <label>Nombre: </label>
                    <input type="text" placeholder="Nombre Completo"/>
                </div>
                <div className="inputs">
                    <label>Asunto: </label>
                    <input type="text" placeholder="Titulo Asunto"/>
                </div>
                <div className="inputs">
                    <label>Correo: </label>
                    <input type="email" placeholder="Correo Usuario"/>
                </div>
                <div className="inputs">
                    <label>Telefono: </label>
                    <input type="text" placeholder="Telefono usuario"/>
                </div>
                <div className="inputs">
                    <label>Área de Interes</label>
                    <select>
                        <option>-- Licenciaturas --</option>
                        {licenciaturas.map( ( lic ) => (
                            <option
                                key = { lic }
                            >
                                {lic}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="inputs">
                    <label>Comentario: </label>
                    <textarea cols="50" rows="10"></textarea>
                </div>
                <input type="submit" value="Enviar informacion"/>
            </form>
            <div className="terminos">
                <h3>Terminos y condiciones</h3>
                <p>Por este medio recibiremos tus datos personales que agregas
                en el formulario, estos se utilizaran unicamente para comunicarnos 
                contigo para él tramite de revisión o solicitud de algún servicio.</p>
                <div>
                    <div className="info-contacto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        <p>Calle 49 No. 142-A Col. San Francisco Vallodolid, Yucatán</p>
                    </div>
                    <div className="info-contacto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p>cuv98@yahoo.com.mx</p>
                    </div>
                    <div className="info-contacto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <p>01 (985) 856 21 79</p>
                    </div>
                </div>
            </div>
        </FormContactanos>
     );
}
 
export default FormDatos;