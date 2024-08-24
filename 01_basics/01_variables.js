const accountId = 1324  // constant - we cannot change once assinged 
let accountEmail = "xyz123@google.com" // modern tutorials use let keyword
var accountPassword = "1234" // old  - due to scope problem
accountCity = "jaipur"
let accountState;

// accountId = 22  - it will give error as we are changing the const keyword assignment

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

accountEmail = "pqr@gmail.com"
accountCity = "NYC"
accountPassword = "321"

console.log(accountEmail);

// to print all together - will give a table
console.table([accountId, accountEmail, accountId, accountCity, accountState])

