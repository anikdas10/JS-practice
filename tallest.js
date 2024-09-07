// max number in an array

function maxnumber(hights){
   let maxNumber = hights[0];
    for(const hight of hights ){
        if(hight>maxNumber){
            maxNumber=hight;
        }
    }
    return maxNumber
}

const max = maxnumber([65,67,72,74,61,59]);
console.log(max)