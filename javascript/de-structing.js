// //ES5 --> from aray you get value inside varible 
// var list = [1, 2, 3]; // array 10 element;

// var a = list[0], b = list[2];

// //  let name = 'thbas';
// //  let hello = 'goodby';
// //  let name = 'thbs', hello = 'goodby';
// //  let name, hello;

// // var tmp = a; 
// // a = b; 
// // b = tmp;

// /**
//  * destructring of values into varibles
//  */

// let namesList

// var {a, b} = list;

//*array*//
let namesList=[10,20,'munit'];
let [first,second,third]=namesList; //array de-structing
console.log(first,second,third);

//short Es6 --object de-structing
let getMyInfo = () => {
    return {
        name: 'munit',
        age: 21,
        hoby: 'cricket'
    }
} 
var tmp = geMyInfo();
let { name, age, hoby } = getMyInfo(); //object 
console.log(name, age, hoby);

//nested object property de-structing
et cmpy = {
    name: 'thbs',
    noOfEmp: 1000,
    foundation: 'March 2022',
    address: {
        premant: {
            city: 'mum'
        },
        current: {
            city: 'bang',
            pin: 2020
        }
    }
};
//nested object property destructiing 
let {
    name,
    noOfEmp,
    foundation,
    address: { premant: { city } },
    address: { current: { pin } }
} = cmpy;

console.log(name,noOfEmp, foundation, city, pin);