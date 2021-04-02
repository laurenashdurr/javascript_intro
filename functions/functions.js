// name(data) => data out
// f(x) = x * x // sqare function

/* 
Way one:
<keyword> <yourName>(<what i need to work>){
    // what I do
    return <something> // what I want to give back
}
*/

// Two ways to write a function in js
function sqr(x){
    return x * x; // 5 * 5
}
console.log(sqr(5));

let aSqr = (x) => {
    return x * x; // explict return
}

let bMult = (x, y) => x * y;
let cSqr = x => x * x; // implicit return

function greet(){ // This needs no parameters to work
    console.log('Hello World')
}
greet();

function betterGreet(fName){ // This is a one argument function
    console.log("Hello " + fName);
}
betterGreet('Lauren'); // Passes in one argument 

let createFullName = (fName, lName) => `${fName} ${lName}`;
let fullName = createFullName("Lauren", "Durr");
console.log(fullName)
