import {connect} from "react-redux";
import {removeFromCart} from "../../actions/cartActions";
import {addToProducts} from "../../actions/productsActions";
import Cart from "./Cart";

const mapStateToProps = state =>{
    return(
        {
            cart: state.cart
        }
    )
  }
  
  const mapDispatchToProps = dispatch =>{
    return {
      deleteProduct(product){
        dispatch(removeFromCart(product)); 
        dispatch(addToProducts(product)); 
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps) (Cart);