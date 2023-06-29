const express = require('express')
const app = express()
const myMiddlewareFunction = require('./middlewares/middle')
const mySecondMiddlewareFunction = require('./middlewares/middle2')
const morgan = require('morgan')

//middlewares
app.use(express.json())   //app.use allows us to use middlewares

//custom middlewares
//always use seperate folder to store your middlewares

app.use(myMiddlewareFunction)

app.use(mySecondMiddlewareFunction)

// app.use(function(req,res,next){
//     console.log('I am second middleware')
//     next()      
// })


//Third party middlewares
//expressjs.com

app.use(morgan())   //Will return info about our request
//output example ==>  ::1 - - [Fri, 16 Jun 2023 05:32:23 GMT] "GET /courses HTTP/1.1" 200 78 "-" "PostmanRuntime/7.32.3"

app.use(morgan('tiny'))
//output example ==> GET /courses 200 78 - 2.615 ms



//get, post, put, delete

//get => read existing data
//post => create new data
//put => update existing data
//delete => delete existing data

//get

app.get('/', (req, res) => {
    res.send('Hello from home')
})

app.get('/about', (req, res) => {
    res.send('Hello from about')
})


const courses = [
    {id:1, name:'javascript'},
    {id:2, name:'Java'},
    {id:3, name:'Python'}
]

app.get('/courses', (req,res) => {
    res.send(courses)
})


//post

app.post('/courses', (req,res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course)
    res.send(course)
})


//put

app.put('/courses/:coursename', (req,res) => {
    let course = courses.find(course => course.name === req.params.coursename)  
    if(!course) res.status(404).send('Course your looking for does not exist')
    course.name = req.body.name
    res.send(course)
})


//delete

app.delete('/courses/:coursename', (req,res) => {
    let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)   //params = parameters passed in the url
    courses = UpdatedCourses
    res.send(courses)
})

app.delete('/courses/:coursename' , (req,res) => {
    let course = courses.find(course => course.id = parseInt(req.params.id))
    console.log(course)
    if(!course) res.status(404).send('Course your looking for does not exist')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})



//Route Parameters


app.get('/course/:id', (req,res) => {
//  res.send(req.params)
//  res.send(req.params.id)
    let course = courses.find(course => course.id === parseInt(req.params.id))  //req.params.id will return the id in the form of a string so we convert it into int
    res.send(course)                               
})

app.get('/courses/:coursename', (req,res) => {
    let course = courses.find(course => course.name === req.params.coursename)  
    if(!course) res.status(404).send('Course your looking for does not exist')
    res.send(course)
})



const port = process.env.PORT || 3000

app.listen(port , () => console.log(`port is running on ${port}`))