
// for of - can be used on any iterable 

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings = "Good morning!"

for(const elem of greetings){
    // console.log(elem);
}



// Maps - object, which holds key-value pair, ordered

const mpp = new Map()
mpp.set('IN', "India")
mpp.set('USA', "United states of america")
mpp.set('FR', "France")
mpp.set('IN', "India") // duplicates key are not allowed
mpp.set("I", "India") // duplicates values are allowed 

// console.log(mpp);

// printing -

for(const m of mpp){
    // console.log(m); // -> will printing diff arrays containing [key, value] 
}

// to segregate key & value

for(const [key, value] of mpp){
    // console.log(key, ':-', value);
    
}

// on OBJECTS - 

const myObject = {
    game1: 'spiderman',
    game2: 'captain America',
    game3: 'thor'
}

// for (const [key, value] of myObject) {
//     // console.log(key, ":-", value); // will give error as we cannot iterate objs with the help of forof loop
// }


//----------------------------------------------------------------------------------------------------------------------------------------------/


/* to iterate objects - FOR IN LOOP */

const langs = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in langs) {
    // console.log(key);
    // console.log(`${key} for ${langs[key]}`);
}

const example = ["hi", "ruby", "go", "cpp", "java"]

for(const key in example){
    // console.log(key); // printing keys(indicies)
    // console.log(example[key]);
}


//------------------------------------------------------------------------------------------------------------------/

/*   FOR EACH LOOP    */


// using array function 
example.forEach(lang => {
    // console.log(lang); 
});
// using arrow function 
example.forEach(function (val){
    // console.log(val);
    
})
// since it is a call back thus we remove the name from the functions used inside foreach
// we can also pass on any function which is already defined

// example - 

function printMe(item){
    // console.log(item);
}
example.forEach(printMe) // we will pass on refernce, not execute it here only


example.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        language: "javascript",
        extension: ".js"
    },
    {
        language: "java",
        extension: ".java"
    },
    {
        language: "cpp",
        extension: ".cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.extension);
    console.log(item.language);
    
})