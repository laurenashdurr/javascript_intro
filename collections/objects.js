// Objects

// console.log(typeof console); // returns object 

/* 
syntax:
    {
        k1: v1,
        k2: v2
    }

keys can be in "" but don't have to be if they are valid var names,
i.e they don't start with a "number" or have invalid chars, or has spaces
*/

let obj1 = {
    name: "Lauren"
}

let obj2 = {
    name: "Steven"
}
// There are two ways to get things out of objects "Dot" notation and 
// "square bracket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: ["Amy", "Josh"]
}

console.log(car.miles);
console.log(car["miles"]);
console.log(car.owners[0]); // Objects can hold more than just primitive types 


let person = {
    fName: "Lauren",
    lName: "Durr",
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fullName());
console.log(person.greet("Hello"));

// This demo shows we can add new keys through assignment 
let buildersObj = {} // An empty obj
console.log(buildersObj);
buildersObj.name = "Lauren"
buildersObj["age"] = 26
buildersObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(buildersObj);
console.log(buildersObj.greet("Hello"));


// A look ahead STACKS and QUEUES 
// Stacks are LIFO (Last in first out)
// Queues are FIFO (First in first out)

// A look ahead at "Classes", special type of way to build an object 
class dog{
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
}

let fido = new dog('lab', 25);
console.log(fido.breed);