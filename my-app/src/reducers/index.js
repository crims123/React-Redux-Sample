import {combineReducers} from "redux"; // Esta funcion nos sirve para unir los diferentes reducers que se creen
import productsReducer from "./productsReducer"; // importamos nuestro primer reducer
import cartReducer from "./cartReducer"; 


const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer
   });

export default rootReducer;

/*
Una vez que hemos creado los reducers  necesitamos crear un archivo index.js,
donde vamos a importar todos nuestros reductores y combinarlos en una
rootReducer

*/ 