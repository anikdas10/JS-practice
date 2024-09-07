

const mobiles = [
  {name:'samsung',price:20000,camera:'12mp',color:'black'},
  {name:'xiomi',price:18000,camera:'12mp',color:'black'},
  {name:'oppo',price:30000,camera:'12mp',color:'black'},
  {name:'iphone',price:120000,camera:'12mp',color:'black'},
  {name:'walton',price:15000,camera:'12mp',color:'black'},
  {name:'HTC',price:31000,camera:'12mp',color:'black'}

]


function getcheapestObjects(phones){

    let max = phones[0]
    for(const phone of phones){
        if(phone.price >max.price){
            max = phone;
        }
    }
    return max;
}

const flagship = getcheapestObjects(mobiles);
console.log('the flagship phone is: ',flagship);