
const mountProducts = (products)=>{
    return({
        type:"MOUNT_PRODUCTS",
        payload: products
    })
}

export {mountProducts};