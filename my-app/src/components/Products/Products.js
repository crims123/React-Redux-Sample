import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map((product)=>(
            <div className="container">
              <center>
                <img className="products__image" src= {product.image}></img>
                <h1 className="products__title">Price: {product.price}</h1>
                <button onClick={()=>this.props.addProduct(product)} className="products__button">Add to Cart</button>
              </center>
            </div>
        ))}
      </div>
    );
  }
}

export default Products;
