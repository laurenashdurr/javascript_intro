// Conditional Statements

/* Conditionals are used to execute a peice of code if a condition is true. They allow our code to make decisions
and carry out actions based on those decisions.
*/

// -If statements
// -Switches 
// -Ternaries

// If statments

let mathResult = 2 + 2 === 5;
console.log(mathResult);

if(mathResult) console.log('This equates to true');

// Block Body + Else

if(mathResult){
    console.log('This equates to true');
}else {
    console.log('This equates to false');
}

// Chaining if/else statements 
// else ifs allows us to provide a new condition to test if the conditions above are not met.

let tempF = 'random';

if(tempF > 95){
    console.log("It's hot!");
} else if(tempF > 50){
    console.log("It's warm!");
}else if(tempF > 32){
    console.log("It's chilly!");
}else if(tempF < 32){
    console.log("It's freezing!");
}else{
    console.log("I cannot provide the weather..");
}

// Testing multiple conditions 

// let myName = 'Lauren';
// let age = 26;

// if(myName === 'Lauren'){
//     console.log('Name Logged');
// } else if(age === 26){
//     console.log('Age Logged');
// }else if(myName === 'Lauren' && age ===26){
//     console.log('Name and Age Logged');
// }

let myName = 'Lauren';
let age = 26;

if(myName === 'Lauren' && age ===26){
    console.log('Name and Age Logged');
}else if(myName === 'Lauren'){
    console.log('Name Logged');
} else if(age === 26){
    console.log('Age Logged');
}

// Switches 
// Run a block of code based on different cases. 

tempF = 72;
switch(true){
    case tempF > 95:
        console.log("It's hot!");
        break;
    case tempF > 50:
        console.log("It's warm");
        break;
    case tempF > 32:
        console.log("it's chilly!");
        break;
     default:
         console.log("I cannot provide the weather");
}

let dog = "Lab";
let dogLower = dog.toLowerCase();

switch(dogLower){
    case 'husky':
        console.log("The husky jumped in the snow");
        break;
    case 'lab':
        console.log("The lab caught the ball!");
        break;
    case 'shepheard':
        console.log("The shepherd wagged it's tail");
        break;

}

let firstName = "Justin";

switch(firstName){
    case 'Justin':
    case 'Amit':
         console.log("They are an instructor")
         break;
    default: console.log("They are a student");
}

// Ternaries 
// Condition ? True : False 

let lightSwitch = false;

lightSwitch ? console.log('Lights are on') : console.log('Lights are off');

tempF = 31

tempF > 95 ? console.log("It's hot!") : 
tempF > 50 ? console.log("It's warm!") :
tempF <= 32 ? console.log("It's chilly!") :
console.log("I cannot provide the weather!");
// order matters. It will depend on what is read first

