import React, { Component } from 'react';
import {connect} from "react-redux"; // importamos el connect quien va a conectar nuestro componente con redux
import {addToCart} from "../../actions/cartActions";
import {removeFromProducts} from "../../actions/productsActions";

class Products extends Component {

  render() {
    return (
      <div className="products">
        {this.props.products.map((product)=>(
            <div className="container">
              <center>
                <img className="products__image" src= {product.image}></img>
                <h1 className="products__title">Price: {product.price}</h1>
                <button onClick={()=>this.props.addCart(product)} className="products__button">Add to Cart</button>
              </center>
            </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return{
            products: state.products // traemos el state de redux y retornamos el estado products que es el
                                    // que usaremos en este componente
        }
    
}
const mapDispatchToProps = dispatch =>{
  return(
      {
        addCart(product){
          dispatch(addToCart(product))
          dispatch(removeFromProducts(product))
        }
      }
  )
}
export default connect(mapStateToProps,mapDispatchToProps) (Products);
