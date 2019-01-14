import {combineReducers} from "redux"; // Esta funcion nos sirve para unir los diferentes reducers que se creen
import productsReducer from "./productsReducer"; // importamos nuestro primer reducer
import cartReducer from "./cartReducer"; 

export default combineReducers({
    products: productsReducer,
    cart:cartReducer
})