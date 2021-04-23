import { OBTENER_UNIVERSIDADES,
         OBTENER_NOTICIAS,
         NOTICIA_SELECCIONADA } from "../type";

const UseDatosReducer = ( state, action ) => {
    
    switch ( action.type ) {
        case OBTENER_UNIVERSIDADES:
            return {
                ...state,
                licenciaturas: action.payload
            }
        case OBTENER_NOTICIAS:
            return{
                ...state,
                noticias: action.payload
            }
        case NOTICIA_SELECCIONADA:
            return{
                ...state,
                noticiaActual: action.payload
            }
        default:
            break;
    }

}
 
export default UseDatosReducer;