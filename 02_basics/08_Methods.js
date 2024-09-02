/*      FILTER         */


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* forEach is used to execute a function on each element of an array. It doesn't return anything (i.e., it returns undefined). That's why ans is undefined. */
// const ans = myNums.forEach( (item) => item >4)
// // console.log("using foreach",ans); // it will give undefined


// /* filter creates a new array with all elements that pass the condition (i.e., the callback function returns true). In this case, all numbers greater than 4 are returned in the new array.
// */
// const ans2 = myNums.filter( (item) => item>4)
// // console.log("using filter", ans2);


// /* In this example, the filter function is using a block body (with {}). However, the num > 4 expression doesn't return anything because there is no return statement. Without the return, the function implicitly returns undefined, which is falsy. As a result, the filter returns an empty array */
// const ans3 = myNums.filter( (num) => {
//     num>4
// })
// // console.log("using filter with scope {}", ans3); // empty object 


// /* Here, the function correctly uses the return statement to return the result of the num > 4 condition. Therefore, it works as intended and returns [5, 6, 7, 8, 9]. */
// const ans4 = myNums.filter( (num) => {
//    return num>4;
// });
// // console.log(ans4);

// /* prints (new) array */
// const ans5 = myNums.filter( (num) => (num>4))
// // console.log(ans5);


// /* Summary - 
// => forEach doesn't return a value.
// => filter returns a new array with elements that pass the test implemented by the provided function.
// => When using {} in an arrow function, you must explicitly use return to return a value; otherwise, it returns undefined.
// */

// // if we want to perform same operation using foreach -

// const newNum =[]
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);




// const objectsArray = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 35 },
//     { id: 4, name: "Jeremey", age: 28 },
//     { id: 5, name: "Kai", age: 22 },
//     { id: 6, name: "Bonnie", age: 28 },
//     { id: 5, name: "Elena", age: 23 },
//     { id: 7, name: "Anna", age: 48 },
//     { id: 10, name: "Sybell", age: 76 }
//   ];
  
// //   console.log(objectsArray);
  
// const names = objectsArray.filter( (n) => (n.name.startsWith("A")))
// console.log(names);

// const ids = objectsArray.filter( (i) => (i.id > 2))
// console.log(ids);

// const ages = objectsArray.filter((age) => age.age >= 30)
// console.log(ages);

// const olders = objectsArray.filter( (old) => {
//     return old.age >=30
// })
// console.log(olders);

// const favs = objectsArray.filter( (old) => {
//     return old.age >=30 && old.name.startsWith("A");
// })
// console.log(favs);




/* ------------------------------------------------------------------------------------ */
/*       MAP  -
                ** everything works as filter  */ 

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = nums.map( (n) => n+10)
// console.log(newNums);

// console.log( nums.map( (n) => n+20));

// const chain = nums.map( (n) => n*10).map( (n) => n+1)
// console.log(chain);

// const chain2 = nums.map( (n) => n*10).filter( (n) => n>=30)
// console.log(chain2);

// const chain3 = nums.map( (n) => n*10).map((n) => n+2).filter( (n) => n>=30)
// console.log(chain3);





/* ----------------------------------------------------------------------------- */
/*   REDUCE   */


const x = [1, 2, 3]

const total = x.reduce(function (acc, currval){
    console.log(`accumulator : ${acc} and Cuurent Value : ${currval}` );
    return acc+currval
}, 0); // here 0 - refers to initial val

console.log(total);

const total2 = x.reduce(function (acc, currval){
    console.log(`accumulator : ${acc} and Cuurent Value : ${currval}` );
    return acc+currval
}, 2); // here 0 - refers to initial val

console.log(total2);

const total3 = x.reduce( (acc, currval) => acc+currval, 0)
console.log((total3));
