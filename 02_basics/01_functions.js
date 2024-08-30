// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(10,20)


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// result = addTwoNumbers(10,20)
// console.log(result) // undefined - because we are not returing any value but istead  printing console

// function addTwoNumbers(number1, number2){
//     return number1+number2
// }

// result = addTwoNumbers(10,20)
// console.log(result)


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username!")
        return
    }
    return `${username} just logged in!!`
}

// loggedIn = loginUserMessage("damon")
loggedIn = loginUserMessage()
console.log(loggedIn)



// Rest operator - 

// function calculatePrice(...num1){

//     return num1

// }
// console.log(calculatePrice(200,3000,233))


// function calculatePrice(val1, val2, ...num1){

//     return num1

// }
// console.log(calculatePrice(200,3000,233))


const user = {
    username: "javas",
    price: 123
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price 
        is ${anyobject.price}`)
}

handleObject(user)

// a function which accepts a array and returns its first indexed value

const arr = [100,200,300,400]

function returnValue(getArray){
    console.log(getArray[1])
}
returnValue(arr)