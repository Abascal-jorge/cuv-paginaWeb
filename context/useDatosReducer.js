import { OBTENER_UNIVERSIDADES,
    OBTENER_NOTICIAS } from "../type";

const UseDatosReducer = ( state, action ) => {
    
    switch ( action.type ) {
        case OBTENER_UNIVERSIDADES:
            return {
                ...state,
                universidades: action.payload
            }
        case OBTENER_NOTICIAS:
            return{
                ...state,
                noticias: action.payload
            }
        default:
            break;
    }

}
 
export default UseDatosReducer;