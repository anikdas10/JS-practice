const products = [
    {name:'Shampoo', price: 700,quantity:2},
    {name:'chiruni', price: 500,quantity:3},
    {name:'shirt', price: 1000 ,quantity:5},
    {name:'pant', price: 1200  ,quantity:1}
]


function cartTotal(products){

    let result = 0;
    for(const product of products){
        result = result + product.price*product.quantity
    }
    console.log(result);
}
cartTotal(products);