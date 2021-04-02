// While loop

/*
legend:
    keyword = while
    1 = some eval or expression that is true or false

<keyword>(<1>){
    // Do something
}
} */

let i = 0;
while(i <= 10){
    console.log(i)
    i++
}
for(let x = 0; x <= 10; x++){
    for(let y = 0; y <= 10; y++) {
        console.log(x, y);
    }
}

while(true){
    console.log('Help this loop is always true');
    break; // What does this do? 
}

let names = ['Justin', 'Adam', 'Kate', 'Jim', 'Amy']
for (let name in names){
    let curName = names[name]
    console.log(curName);
    if (curName == 'Kate') break; 
}

// Break / Continue 

// let counter = 0;
// while(counter <= 20){
//     counter ++
//     if (counter % 2 === 0){
//         continue // ? what is this 
//     }
//     console.log(counter)
//     break;
// }

let tmp = 100
while(tmp >= 0){
    console.log(tmp)
    tmp -= 5
}