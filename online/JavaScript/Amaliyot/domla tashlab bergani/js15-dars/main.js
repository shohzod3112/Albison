
let obj = {
    name:'Zokir',
    surname:'Murotov',
}
let obj2 = {
    name:'Zokir',
    surname:'Murotov',
    address:{
        city:{
            cityName:"Tashkent",
            street:"Iftihor 1"
        }
    }
}


// console.log(obj2?.address?.town?.cityName);


// console.log('ishlayapti!!!💣');
const {surname} = obj2;


const {address:{city:{cityName}}} = obj2;





// console.log(cityName);


const {name} = obj2;


// let arr = [1,2,3,4,5,6,7];

// const [a,,,,,,b] = arr;

// console.log(b);


// let obj3 = Object.assign({}, obj);

// let obj3 = {...obj};




// obj.name = 'Kimdir';

// obj.name = 'kimdir';

// console.log('obj',obj);
// console.log('obj3',obj3);

// ===================||Map||====================

let myMap = new Map();


// set
myMap.set(true, 'Zokirjon');

// get

console.log(myMap.get(true));

// has
// console.log(myMap.has('zokir'));

// size
// console.log(myMap.size);

// clear



// delete

console.clear();

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

  recipeMap.set(200,'bodring');

  console.log(recipeMap.values());
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }

//   farqiyoq(recipeMap);

  //


  function reverseMap(map) {
    const resultMap = new Map();

    for (const key of map.keys()) {
        resultMap.set(map.get(key), key);
    }
    return resultMap;
}

console.log(reverseMap(recipeMap));

