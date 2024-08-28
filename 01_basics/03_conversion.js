let score = 33
console.log(typeof score); // o/p - will be in lowercase (number)


score = "44"
let valueInNumber = Number(score)
console.log(typeof score); 


let x = "33abc"
x = Number(x)
console.log(typeof x); // although the conersion will be done - o/p - (number)
console.log(x); // but it will give NaN (Not A Number) as abc is a string which cant be converted into a number

let y = null
y = Number(y)
console.log(typeof y); // number
console.log(y); // null => 0

let z = undefined
z = Number(z)
console.log(z) // undefined => Nan
console.log(typeof z); // number



let isLoggedIn = 1

BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);


let str = ""
s = Boolean(str)
console.log(s); // false


let st = "js"
stt = Boolean(st)
console.log(stt); // true


let sum = 23
snum = String(sum)
console.log(snum);
console.log(typeof snum);










