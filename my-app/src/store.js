import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'; // importamos los reducers

const initialState = {}; // creamos el estado inicial

const middleware = [thunk]; // creamos el middleware

// cremos el store que recibe como parametros los reducers , el estado inicial y potencializador o middleware
const store = createStore(rootReducer,initialState, compose(applyMiddleware(...middleware), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store; // Exportamos por defecto el store