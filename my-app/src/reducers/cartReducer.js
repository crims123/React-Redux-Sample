import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/types";

export default function (state = [], action){
   
    switch(action.type){
        case ADD_TO_CART:
        return  state.concat(action.payload); // concatenar es sumar

        case REMOVE_FROM_CART:
        return state.filter(item=>{
            return item.id !== action.payload.id;
        })

        default: return state;
    }
}

