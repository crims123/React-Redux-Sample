import {connect} from "react-redux"; // importamos el connect quien va a conectar nuestro componente con redux
import {addToCart} from "../../actions/cartActions";
import {removeFromProducts} from "../../actions/productsActions";
import Products from "./Products";

const mapStateToProps = state =>{
    console.log(state)
    return{
            products: state.products // traemos el state de redux y retornamos el estado products que es el
                                    // que usaremos en este componente
        }
    
}
const mapDispatchToProps = dispatch =>{
  return(
      {
        addProduct(product){
          dispatch(addToCart(product))
          dispatch(removeFromProducts(product))
        }
      }
  )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
   )(Products);