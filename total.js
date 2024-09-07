const products = [
    {name:'Shampoo', price: 700},
    {name:'chiruni', price: 500},
    {name:'shirt', price: 1000},
    {name:'pant', price: 1200}
]

function totalCost(products){
    let sum = 0;

    for(const product of products){
        sum = sum +product.price;

    }
    return sum;
}
const total =totalCost(products);
console.log('The total price you have to pay:',total,'tk');