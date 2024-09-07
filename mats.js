const disha = 56;
const salman = 75;
if(disha>salman){
    console.log('Disha will get the strowberry');
}
else{
    console.log('salman will get the strowberry');
}


// inside a function


function getmax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(getmax(45,65));