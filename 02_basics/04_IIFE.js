// Immediately Invoked Function Expressions IIFE
// sometimes global scope creates pollution to remove it we use IIFE

// function coffee(){
//     console.log('DB CONNECTED');
    
// }
// coffee()


// to execute it immediately 
(function coffee(){
    console.log('DB CONNECTED');
    
})(); // if we wont add this ; it will give error for the execution of next IIFE 
// this () - is used to execute the functiojn immediately


// by arrow function 

( () => {
    console.log('DB Connected two');
    
} )();


// No - Name IIFE
( (name) => {
    console.log(`DB Connected three ${name}`);
    
} )('javascript');



// Named IIFE 

(function chai(){
    console.log(`named IIFE`);
    
}) ()