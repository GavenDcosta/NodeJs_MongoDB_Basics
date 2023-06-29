function mySecondMiddleware(req,res,next){
    console.log('I am second middleware')
    next()      
}

module.exports = mySecondMiddleware