// const user = new Object()  -- singleton object


const user = {} //non- singleton 
user.id = "123abc"
user.name = "Sam"
user.isLoggedIn = false

console.log(user); 

const regularUser = {
    email : "damon@gmail.com",
    fullname: {
        firstName: "Damon",
        lastName: "Salvatore"
    },
    address: "MystillFalls"

}

console.log(regularUser.fullname)
console.log(regularUser.fullname.lastName)


// merging two objects

const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}
console.log(obj3) // gives same prob as array


const obj4 = Object.assign(obj1, obj2)
console.log(obj4) // merges all the value



const obj5 =  {7: "j", 8:"k"}
// const merged = Object.assign(obj1, obj2, obj5)
// console.log(merged)


const merged = {...obj1, ...obj2, ...obj5}
console.log(merged) // spread operator



creating an array consisting multiple objects
const series = [
    {
        id: "123",
        password: "133abs"
    },
    {
        id: "128",
        password: "133abs"
    },
    {
        id: "123",
        password: "133abs"
    },
    {
        id: "123",
        password: "133abs"
    }
]
console.log(series[1].id)
console.log(series[0].id)

console.log(user)

console.log(Object.keys(user))

const values = Object.values(user)
console.log(values)

const entries = Object.entries(user)
console.log(entries)

// to check if object has the property
console.log(user.hasOwnProperty('isLoggedIn'))



/* ********* Destructring ********** */

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "xyz"
}

// console.log(course.courseInstructor)

// de-structuring 
const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor : instructor} = course
console.log(instructor)


// Api intro 


// { 
//     "name" :"user",
//     "course": "javascript",
//     "price": 999
// }

// [
//     {},
//     {},
//     {}
// ]