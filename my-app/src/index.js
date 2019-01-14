import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Importamos el store y lo enviamos a todos los componentes por medio de props
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
