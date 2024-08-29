 // arrays
 /* 
 => non primitive
 => Resizable
 => can obtain mix of different data types
=> zero based indexing
=> always creates shallow copy - is a copy whose prop share the sam erefernces as those of the source 

*/


const myArr = [1,3,6.5, true]
console.log(myArr);

const myheros = ["hello", "goodeve", "goodnight"]

const ar = new Array(1,2,3,4)
console.log(ar) 

// .length property 
console.log(arr.length)

arr.push(7)
console.log(arr);

arr.pop()
console.log(arr);


arr.unshift(0)
arr.unshift(9) // adds elem at start 

console.log(arr);


arr.shift() // removes elem from start
console.log(arr);


console.log(arr.includes(9));
console.log(arr.indexOf(6));


const newArr = arr.join() // converts array into string
console.log(arr);
console.log(newArr);

console.log(typeof arr);
console.log(typeof newArr);


console.log("A", arr);
const n1 = arr.slice(1,3) // 3 is exclusive 
console.log(n1);
console.log("B", arr); // means org array remains unchanged


console.log("A", arr);
const n2 = arr.splice(1,3) // 3 is inclusive
console.log(n2);
console.log("B", arr); // but org array is changed in splice 




const marvel =["thor", "ironman", "spiderman"]
const dc = ["batman", "flash", "superman"]

marvel.push(dc) // it doesnot merge two arrays rather it will push the 2nd array into the 1st array 
console.log(marvel);

// to access elem from dc of marvel array
console.log(marvel[3][2]); //superman

marvel.concat(dc) // it is not printing merged array 
console.log(marvel); // printing the same marvel array

const heros = marvel.concat(dc)
console.log(heros);


// spread operator - ...
const all = [...marvel, ...dc]
const arr = ["x-man", "thanos"]
const al = [...marvel, ...dc, ...arr]
console.log(al);


// flat a array 

const arr1 = [1,2,3,[4,5,6], [7, [6,7[4,5]]]]
// const arr2 = arr1.flat(Infinity)
const arr3 = arr1.flat(Infinity)
console.log(arr3);

// check if array
console.log(Array.isArray('hello'));



// create array

console.log(Array.from("coding"));
console.log(Array.from({name: "code"})); //intresting 

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));




