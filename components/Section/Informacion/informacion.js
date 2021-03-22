import React from 'react';
import Slider from "./slider";

const Informacion = () => {
    return ( 
        <section>
            <div className="contenedor">
                <div>
                    <div>
                        <h2>!Bienvenido (A) a casa!</h2>
                        <p>Centro universitario de valladolid es una escuela privad de nivel superior
                            que ofrece diversas carreras en un lapso de tiempo de 3 años, cubriendo estos
                            por cuatrimestre que se conforman de 12 semanas intensas de estudio y una ultima dedicada
                            a examenes que mostraran tu nivel de aprendizaje.
                        </p>
                    </div>
                    <Slider/>
                </div>
            </div>
        </section>
     );
}
 
export default Informacion;