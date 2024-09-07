

function cheapestPrice(number){
    let minprice = number[0];
    for(const min of number){
        if(min<minprice){
            minprice=min;
        }
    }
    return minprice;
}

console.log(cheapestPrice([20000,50000,100000,12000,25000,9000,8000]));