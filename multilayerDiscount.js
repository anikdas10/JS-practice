

function layerDiscountedTotal(quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;
    if(quantity<=100){
        const total = quantity*first100price;
        return total;
    }
    else if(quantity<=200){
        const first100total = first100price*100;
        const remainingQuantity = quantity-100;
        const remainingQuantityPrice = remainingQuantity*second100price;
        const total = first100total + remainingQuantityPrice;
        return total;
    }
    else{
        const first100total = first100price*100;
        const second100total = second100price*100;
        const remainingQuantity = quantity -200;
        const remainingQuantityPrice = remainingQuantity*above200price;
        const total = first100total + second100total + remainingQuantityPrice;
        return total;

    }
}

const total = layerDiscountedTotal(205);
console.log(total)