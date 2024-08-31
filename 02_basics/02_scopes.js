function one(){
    const username = "javascript"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // it will give error as it is out of scope
    
    two()
}
one() 
// if we call only one while commenting out the two()  it will not print anything 
// as function one consists of zero console stmt



console.log(add(5)); // 6

function add(num){
    return num+1
}

console.log(add(5)); //6



// console.log(addTwo(5)); // error


const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)); //7
