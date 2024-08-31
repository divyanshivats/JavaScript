/* if(true conition){
    stmt
} */

if(true){
    console.log('hello JS');
    
}

if(2=="2"){
    console.log('executed');
}
if(2 === "2"){
    console.log(' not executed'); // it will executed if condition is true
}
else{
    console.log('your stmt is false');
}

/*const score = 1000
if(score < 2000) console.log('test'), console.log('test2'); */

userLoggedIn = true
debitCard = true
loggedInFromEmail = true
loggedInFromGoogle = true

if(userLoggedIn && debitCard){
    console.log('allow to buy course');
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log('logged in!');
    
}

////////////////////////// SWITCH CASE //////////////////////////////////////////
const month = 3
switch (month) {
    case 1:
        console.log('january');  
        break;
    case 2:
        console.log('FEB');  
        break;
    case 3:
        console.log('MARCH');  
        break; 
    case 4:
        console.log('APRIL');  
        break;

    default:
        console.log('DEFAULT CASE');      
        break;
}

// falsy values - false, 0, -0, BigInt 0n, null, undefined, "", NaN

// truthy values - "0", 'false', " ", [], {}, empty function -function(){}, 

// false == 0 => true
// false == '' => true
//0 == "" => true




// made only for null and undefined - nullish coalescing operator
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);
