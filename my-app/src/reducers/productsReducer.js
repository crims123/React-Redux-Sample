import {MOUNT_PRODUCTS} from "../actions/types";

// Creamos nuestro reducer para productos que debe recibir un estado inicial y una accion

export default function (state = [], action){
   
    switch(action.type){
        case MOUNT_PRODUCTS:
        return state = action.payload;

        default: return state;
    }
}

