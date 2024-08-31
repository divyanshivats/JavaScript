// this - means current context.

// example - 

const user = {
    username: "stefan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`);
        // wo using this it shows username is not defined
        // console.log(this); // will print current object - user object 
         
        
    }
}
user.welcomeMessage()

// if we change the username 
user.username = "kai"
user.welcomeMessage() // kai will be treated as username 

console.log(this); //here it will give empty object as there is no object defind in global scope 

// in console, while printing this we will get a window 


function coffee(){

    console.log(this);
    let user = " coffebuddy"
    console.log(this.user); // this will be undefined 
    // as this works only for object not for functions
    
    
}
coffee()


const coffee = function(){
    let username = "coffeebuddy"
    console.log(this.username); // undefined 
    console.log(this); // will give a group of objects
    
    
}

coffee()

const coffee = () => {
    let username = "coffeebuddy"
    // console.log(this.username); // undefiined 
    console.log(this); // empty objecct 
    
    
}
coffee()

///////////////////////////////////////////////////////////////////////

/* ARROW FUNCTION */

// explicit return 

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4));


// implicit return 
const addTwo = (num1, num2) => ( num1+num2 )
console.log(addTwo(3,4));


// returning a object by arror function 

const obj = () => ({username: "javascript"}) // wo enclosing in paranthesis it wont work 
obj()
console.log(obj());




