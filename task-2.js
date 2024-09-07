// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];




function smallestName(numbers){
    let small = numbers[0];
    for(const number of numbers){
        if(number.length<small.length){
            small = number;
        }
        }
       return small; 
    }


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed',];
console.log(smallestName(heights2));