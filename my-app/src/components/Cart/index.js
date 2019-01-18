import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Products from './Products';

// Actions
import {addToCart} from "../actions/cartActions";
import {removeFromProducts} from "../actions/productsActions";

const mapStateToProps = state =>{
    return{
            products: state.products // traemos el state de redux y retornamos el estado products que es uno de nuestros
                                     // reducers (productsReducer) y es el estado que usaremos en este componente
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