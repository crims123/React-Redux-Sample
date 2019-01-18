import {MOUNT_PRODUCTS, REMOVE_FROM_PRODUCTS,ADD_TO_PRODUCTS} from "../actions/types";

// Creamos nuestro reducer para productos que debe recibir un estado inicial y una accion
// ES INMUTABLE 

export default function (state = [], action){
   
    switch(action.type){
        case MOUNT_PRODUCTS:
        return state = action.payload;

        case REMOVE_FROM_PRODUCTS:
        return state.filter(item =>{
            return item.id !== action.payload.id
        })

        case ADD_TO_PRODUCTS:
        return state.concat(action.payload)

        default: return state;
    }
}

