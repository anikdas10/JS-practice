

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 -num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}


function calculetor(a, b, operation){
    if(operation === 'add'){
        return add(a,b);
    }
    else if(operation === 'subtract'){
        return subtract(a,b);
    }
    else if(operation === 'multiply'){
        return multiply(a,b);
    }
    else if(operation === 'divide'){
        return divide(a,b);
    }
    else{
        return "Only 'add' 'subtract' , 'multiply' , 'divide' operation is allowed";
    }
}

const result = calculetor(5,7,'multiply');
console.log(result);
