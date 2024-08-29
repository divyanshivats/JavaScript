// Dates

// let mydate = new Date()
// console.log(mydate);

// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(typeof mydate); // object

// let myCreatedDate = new Date(2023,0,23) // yyyy/mm/dd
// let myCreatedDate2 = new Date(2024, 8, 29, 5, 44)
// console.log(myCreatedDate2.toLocaleString());

// console.log(myCreatedDate.toDateString());




let mytime = Date.now()
console.log(mytime);

let mydate = new Date("2024-08-29")
console.log(mydate.getTime());

//to get into seconds 
console.log(Math.floor(Date.now()/1000));


