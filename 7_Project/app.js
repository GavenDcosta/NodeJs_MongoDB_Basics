const express = require('express')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())

//keep different folder for all the routes
const categories = require('./Routes/categories')
app.use(categories)
const students = require('./Routes/students')
app.use(students)
const courses = require('./Routes/courses')
app.use(courses)


// app.use('/api/categories', categories)
// app.use('/api/students', students)


mongoose.connect('mongodb://127.0.0.1/learningPlatform')  
.then(() => console.log('Connection is successful'))
.catch((err) => console.error('Couldnt connect to mondodb', err))



const port = process.env.PORT || 3000

app.listen(port , () => console.log(`port is running on ${port}`))