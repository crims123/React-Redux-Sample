import React, { Component } from 'react';
import {connect} from "react-redux";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        {this.props.cart.length ===0 ? 
          <h3 className="cart__title">EL carrito esta Vacio</h3> : 
          <div>
            {this.props.cart.map(product =>
                  <tr key={product.id}>
                    <td><img className="cart__image" src={product.image}></img> </td>
                    <td className="text-right"><button className="btn btn-danger">$ {product.price}</button></td>
                  </tr>
            )}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return(
      {
          cart: state.cart
      }
  )
}
export default connect(mapStateToProps,null) (Cart);
