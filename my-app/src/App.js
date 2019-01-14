import React, { Component } from 'react';
import './App.css';
import Products from "./components/Products";
import Cart from "./components/Cart";
import {connect} from "react-redux"; // importamos el connect 
import {mountProducts} from "./actions/productsActions"; // importamos las acciones

class App extends Component {
  componentDidMount(){
    const products = [
        {id:0, image:"http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png", price:200},
        {id:1, image:"http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png", price:100}
    ]
    this.props.products(products)
  }
    render() {
    return (
      <div className="container">
        <div className="row"> 
          <div className="col-lg-7 col-xl-7 col-md-6 col-xs-12">
            <Products/>
          </div>
          <div className="col-lg-5 col-xl-5 col-md-6 col-xs-12">
            <Cart/>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps =dispatch=>{
  return{
    products(products) {
    dispatch(mountProducts(products))
    }
  }
}
export default connect(null, mapDispatchToProps) (App);
// exportamos nustro componente con la funcion connect que recibe dos parametros mapStateToProps y mapDispatchToProps
