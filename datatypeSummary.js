// Primitive - 7 types 
// Non- primitive/ reference-type


/* ****** PRIMITIVE **********

1 => String
2 => Number
3 => Boolean
4 => null
5 => undefined
6 => Symbol - to mkae value unique
7 => BigInt - large values and scientific values

*/



/* ****** Refernce Type (Non primitve)  ********

=> Arrays
=> Objects
=> functions

*/

// javascript is dynamically typed


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const  bigNumber = 34235512515424234n
const x = null

const heros = ["captainAmerica", "spiderman", "batman"]

let myObj = {
    name : "Shaktimaan",
    age : undefined,
}
const myfunction = function(){
    console.log("hello, JavaScript!");
    
}

console.log(typeof bigNumber);
console.log(typeof myfunction);
console.log(typeof heros); // array returns object
console.log(typeof x); // object



