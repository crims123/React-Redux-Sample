import React, { Component } from 'react';

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
                    <td className="text-right"><button onClick={()=>this.props.deleteProduct(product)} className="btn btn-danger">Delete </button></td>
                  </tr>
            )}
          </div>
        }
      </div>
    );
  }
}


export default Cart;
