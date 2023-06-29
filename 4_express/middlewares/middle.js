//custom middlewares

function myMiddleware(req,res,next){
    console.log('I am custom middleware')
    next()      //always use next() method in middlewares
}

module.exports = myMiddleware
