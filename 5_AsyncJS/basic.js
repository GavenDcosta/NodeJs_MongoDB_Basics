const fs = require('fs')

console.log('first line')

//synchronous js

let data = fs.readFileSync('text.txt')
console.log('File 1 Data -> '+ data)
console.log('last line')


//asynchronous js

fs.readFile('text.txt', cb1)  //cb1 is a callback function

function cb1(err, data){
    if(err){
        console.log(err)
    }

    console.log('File Data 1 -> '+ data)
    fs.readFile('f2.txt', cb2)   //serial execution of async code
}


function cb2(err, data){
    if(err){
        console.log(err)
    }

    console.log('File Data 2 -> '+ data)
   
}


console.log('Last line')