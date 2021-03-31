let str_num = 100
let x = 5
let y = 5.0
let z = Number('5')
let r = Number('test')
let conv_numb = Number(str_num) // Creates a number from the string 

console.table([x, y, z, r])
console.table({x, y, z, r, conv_numb})

/* 
Number:
Add +
Sub -
Multi *
Div /
Math.floor(<div>) -> chopped off at whole number
Exp **


MOD % <- Div and give back the remeainder
*/

console.log(8 ** 2)
console.log(12 % 5)

console.log(5 / 2)
console.log(Math.floor(5,2))
