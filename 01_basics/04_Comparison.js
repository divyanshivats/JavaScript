
console.log(2 >1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1); // js itself convert "2"/ "02" into integer

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // comparison converts null into a number treating it as 0 
// that is why (3) null >=0 is true and null > 0 is false


// undefined will gice false for every comparison

// == checks for value but === also checks for value and datatype
// calles as "strict check"
console.log("2" ==2); // true
console.log("2" === 2); // false




