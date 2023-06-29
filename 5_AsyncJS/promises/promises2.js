//Chaining of Promise

function placeOrder(drink){
    return new Promise(function(resolve,reject){
         if(drink == 'coffee'){
            resolve('Order for coffee received')
         }
         else{
            reject('Other orders Rejected')
         }
    })
}

function processOrder(order){
     return new Promise(function(resolve){
        console.log('Order is being procesed')
        resolve(`${order} and is served`)
     })
}


placeOrder('coffee').then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced) 
    return orderIsProcessed
}).then(function(processOrder){
    console.log(processOrder)
}).catch((err) => console.log(err))



//Async Await -> keywords

async function serveOrder(){
   try{
      let orderPlaced = await placeOrder('tea')
      console.log(orderPlaced)
      let processedOrder = await processOrder(orderPlaced)
      console.log(processedOrder)
   }catch(err){
      console.log(err)
   }
}
  
serveOrder()