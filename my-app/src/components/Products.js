import React, { Component } from 'react';
import {connect} from "react-redux"; // importamos el connect 
import {addToCart} from "../actions/cartActions";

class Products extends Component {


  render() {
    return (
      <div className="products">
        {this.props.products.map((product, index)=>(
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
    return(
        {
            products: state.products
        }
    )
}
const mapDispatchToProps = dispatch =>{
  return(
      {
        addCart(product){
          dispatch(addToCart(product))
        }
      }
  )
}
export default connect(mapStateToProps,mapDispatchToProps) (Products);
