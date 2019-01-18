import {MOUNT_PRODUCTS, REMOVE_FROM_PRODUCTS,ADD_TO_PRODUCTS} from "../actions/types";

const mountProducts = (products)=>{
    return({
        type:MOUNT_PRODUCTS,
        payload: products
    })
}

const removeFromProducts = (product)=>{
    return({
        type:REMOVE_FROM_PRODUCTS,
        payload: product
    })
}

const addToProducts = (product)=>{
    return({
        type:ADD_TO_PRODUCTS,
        payload: product
    })
}


export {mountProducts, removeFromProducts, addToProducts};