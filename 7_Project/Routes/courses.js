const express = require('express')
const router = express.Router()
const {Course, validate} = require('../models/courseModel')
const {Category} = require('../models/categoriesModel')

router.get('/api/courses', async (req,res) => {
    let courses = await Course.find()
    res.send(courses)
})


router.post('/api/courses', async (req,res) => {
    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findById(req.body.categoryId)
    if (!category) return res.status(400).send('Invalid ID')

    const course = new Course({
        title : req.body.title,
        category : {
            _id : category._id,
            name : category.name
        },
        creator : req.body.creator,
        rating : req.body.rating
    })
    await course.save()
    res.send(course)
})


router.put('/api/courses/:id', async (req,res) => {
    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findById(req.body.categoryId)
    if (!category) return res.status(400).send('Invalid ID')

    const course = await Course.findByIdAndUpdate(req.params.id, {
        title : req.body.title,
        category : {
            _id : category._id,
            name : category.name
        },
        creator : req.body.creator,
        rating : req.body.rating

    }, {new : true})

    if(!course) return res.status(404).send('The Course with the given id was not found')
    

    await Course.save()
    res.send(course)
})


router.delete('/api/courses/:id', async (req,res) => {
   const course = await Course.findByIdAndRemove(req.params.id)
   if(!course) return res.status(404).send('The Course with the given id was not found')

    res.send(course)
})


router.get('/api/courses/:id', async (req,res) => {
    const course = await Course.findById(req.params.id)
    if(!course) return res.status(404).send('The genre with the given id was not found')
    res.send(course)
})



module.exports = router