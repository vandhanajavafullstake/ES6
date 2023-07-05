let state= {
    msg:"GM",
    product:{
        id:101,
        Price:45000,
        name:"iphone 12"
    }
}
console.log(state.product.name)
let { product } =state
let { name } = product
console.log(name)