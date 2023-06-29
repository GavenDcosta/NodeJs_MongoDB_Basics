const mongoose = require('mongoose')

const Joi = require('joi')  //a npm package used for data validation 


const categorySchema = new mongoose.Schema({
    name : {type : String, required : true, minlength : 3, maxlength : 30},
})

const Category = new mongoose.model('Category', categorySchema)


//Joi
function validateData(category){
    const schema = {
        name : Joi.string().min(3).required()
    }

    return Joi.validate(category, schema)
}


exports.Category = Category
exports.categorySchema = categorySchema   //using one model inside another
exports.validate = validateData