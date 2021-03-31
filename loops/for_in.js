// For .. in Loop 
/*
legend:
    keyboard = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex... Array or Obj or String

<keyword>(<var> in <collection>){
    // Do something
}
*/

let person = {
    name: "Justin",
    age: 28
}
// A look ahead 
console.log(person.name)
console.log(person["name"])

for(let property in person){
    console.log(property)
    console.log(person[property]) // A good use of a for in loop
}

let randomNums = [1, 9, 30, 45, 32, 24]
for(let rand in randomNums) {
    console.log(rand)
    console.log(randomNums[rand])
}