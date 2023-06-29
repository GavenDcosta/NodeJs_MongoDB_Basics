function add(a, b){
    console.log(a+b)
}

function sub(a, b){
    console.log(a-b)
}

function mul(a, b){
    console.log(a*b)
}

function div(a, b){
    console.log(a/b)
}

//we have to export this module if we want to use it in other files
//we need to pass a Key along with the name

module.exports = {
    addition : add, 
    substraction : sub,
    multiply : mul,
    division : div
}