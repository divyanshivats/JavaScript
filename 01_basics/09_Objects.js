// singleton - created by constructor 


// Object.create() // constructor method


//objetct literals 

const user = {
    name : "JavaScript" ,
    age: 12,
    "location" : "delhi",
    email: "xyz123@google.com",
    isLoggedIn: false,
    lastLogginDays: ["monday", "tuesday"]

}

console.log(user.email);
console.log(user.lastLogginDays);

console.log(user["location"]);


// craeting a symbol and adding it into the key of a object

// const mySum = Symbol("key1")

// const user2 = {
//     name: "pqr",
//     mySum : "mykey1" // but here it is not being used a s symbol 
// }

// console.log(user2["mySum"]);
// console.log(typeof user2.mySum); // string, thus it is not being used a s symbol

// to use it as Symbol
// const mySum = Symbol("key1");

// const user3 = {
//     name: "pqr",
//     [mySum]: "mykey2"
// };

// console.log(user3[mySum]); // Output: "mykey2"



user.email = "xyz23@gmail.com"
console.log(user.email);


// to freeze a object 
// Object.freeze(user)
// user.email = "pqr12@gmail.com"
// console.log(user.email);
// console.log(user);


user.greeting = function(){
    console.log("hello js user");
    
}

user.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());