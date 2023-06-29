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


module.exports = {
    addition : add, 
    substraction : sub,
    multiply : mul,
    division : div
}