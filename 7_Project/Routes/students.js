const express = require('express')
const router = express.Router()
const {Student, validate} = require('../models/studentsModel')


// const mongoose = require('mongoose')

//when we use router replace app with router

// const Joi = require('joi')  //a npm package used for data validation 


// const studentSchema = new mongoose.Schema({
//     name : {type : String, required : true, minlength : 3, maxlength : 30},
//     isEnrolled : {
//         type : Boolean,
//         default : false
//     },
//     Phone : {
//         type : String,
//         minlength : 10,
//         maxlength : 25
//     }
// })

// const Student = new mongoose.model('Student', studentSchema)


router.get('/api/students', async (req,res) => {
    let students = await Student.find()
    res.send(students)
})


router.post('/api/students', async (req,res) => {
    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const student = new Student({
        name : req.body.name,
        isEnrolled : req.body.isEnrolled,
        Phone : req.body.Phone
    })
    await student.save()
    res.send(student)
})


router.put('/api/students/:id', async (req,res) => {
    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const student = await Student.findByIdAndUpdate(req.params.id, {name : req.body.name, Phone : req.body.Phone, isEnrolled : req.body.isEnrolled}, {new : true})

    if(!student) return res.status(404).send('The student with the given id was not found')
    

    await student.save()
    res.send(student)
})


router.delete('/api/students/:id', async (req,res) => {
   const student = await Student.findByIdAndRemove(req.params.id)
   if(!student) return res.status(404).send('The student with the given id was not found')

    res.send(student)
})


router.get('/api/students/:id', async (req,res) => {
    const student = await Student.findById(req.params.id)
    if(!student) return res.status(404).send('The genre with the given id was not found')
    res.send(student)
})


//Joi
// function validateData(student){
//     const schema = {
//         name : Joi.string().min(3).max(50).required(),
//         Phone : Joi.string().min(10).max(50).required(),
//         isEnrolled : Joi.boolean()
//     }

//     return Joi.validate(student, schema)
// }


module.exports = router