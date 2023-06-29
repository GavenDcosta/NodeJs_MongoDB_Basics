//Producing a Promise

let myPromise = new Promise(function(resolve,reject){
    const a = 4
    const b = 3

    setTimeout(()=>{
        if(a==b){
            resolve('The values are Equal')
        }
        else{
            reject('The values are not equal')
        }
    },2000)
})

//Pending State
// console.log(myPromise)


//fulfilled -> then method

myPromise.then(function(result){
    console.log(result)
})

//rejected -> catch method

myPromise.catch(function(failedResult){
    console.log(failedResult)
})