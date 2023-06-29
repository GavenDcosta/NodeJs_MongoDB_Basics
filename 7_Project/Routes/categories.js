const express = require('express')
const router = express.Router()
const {Category, validate} = require('../models/categoriesModel')

// const mongoose = require('mongoose')


//when we use router replace app with router

// const Joi = require('joi')  //a npm package used for data validation 


//Use seperate files for the models and schema

// const categorySchema = new mongoose.Schema({
//     name : {type : String, required : true, minlength : 3, maxlength : 30},
// })

// const Category = new mongoose.model('Category', categorySchema)




router.get('/api/categories', async (req,res) => {
    let categories = await Category.find()
    res.send(categories)
})


router.post('/api/categories', async (req,res) => {
    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    // const category = {
    //     id: categories.length + 1,
    //     name: req.body.name
    // }
    // categories.push(category)

    const category = new Category({
        name : req.body.name
    })
    await category.save()
    res.send(category)
})


router.put('/api/categories/:id', async (req,res) => {
    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id, {name : req.body.name}, {new : true})

    if(!category) return res.status(404).send('The category with the given id was not found')
    

    await category.save()
    res.send(category)
})


router.delete('/api/categories/:id', async (req,res) => {
   const category = await Category.findByIdAndRemove(req.params.id)
   if(!category) return res.status(404).send('The category with the given id was not found')

    res.send(category)
})


router.get('/api/categories/:id', async (req,res) => {
    const category = await Category.findById(req.params.id)
    if(!category) return res.status(404).send('The genre with the given id was not found')
    res.send(category)
})


// Joi
// function validateData(category){
//     const schema = {
//         name : Joi.string().min(3).required()
//     }

//     return Joi.validate(category, schema)
// }


module.exports = router