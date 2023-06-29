const mongoose = require('mongoose')

//Connection

mongoose.connect('mongodb://127.0.0.1/testDatabase')    //you can use any name here ..it will automatically create a DB in mongodb compass
.then(() => console.log('Connection is successful'))
.catch((err) => console.error('Couldnt connect to mondodb', err))


//Schema

//inbuilt data validators
//minlength
//maxlength
//enum

const courseSchema = new mongoose.Schema({
    name : {type:String, required:true, minlength:5, maxlength:200},
    tags: {type : Array, validate : {   //custom validators
        validator : function(tags){
            return tags.length > 1
        }
    }},
    category:{
        type:String,
        required:true,
        enum : ['DSA', 'Web', 'Mobile', 'Data Science']  //user can enter only one of these 4 values
    },
    creator : {type:String, required:true},
    publishedDate : {type:Date, default:Date.now},
    isPublished : {type:Boolean, required:true},
    rating : {type:Number, required : function(){return this.isPublished}}
})


//Model

const Course = mongoose.model('Course' , courseSchema)


//Create Document

async function createcourse(){
    const course = new Course({
        name : 'React',
        tags : ['express', 'mongodb'],
        category:'Web',
        creator : 'Sanji',
        isPublished : true,
        rating : 4
    })
    
    try{
        const result = await course.save()  //method to save the data
        console.log(result)

        //can use another method
        //course.validate()
    }catch(err){
        //console.error(err.message)
        for(field in err.errors){    //error validators
            console.log(err.errors[field])
        }
    }
}

createcourse()


//query for documents 


//Comparison Operators
// eq (equal)
// gt (greater than)
// gte (greater than and equal to)
// lt (less than)
// lte (less than and equal to)

// in
// not in 

//Logical Operators
// or
// and


async function getCourses(){

    const courses = await Course.find({creator : 'Gaven'})
    const course = await  Course.find({creator : 'Luffy'}).select({name:1,publishedDate:1})
    console.log(courses)
    console.log(course)


    //comparision operators

    // const rating = await Course.find({rating : 4.5})
    const gte = await Course.find({rating : {$gte : 4}})
    console.log(gte)
    const lte = await Course.find({rating : {$lte : 4}})
    console.log(lte)


    //in , not in 

    const rate = await Course.find({rating : {$in : [3, 4.2]}})
    console.log(rate)


    //Logical operators
    
    const oroptr = await Course.find({rating : {$in : [3, 4.2, 4.5]}})
    .or([{creator : 'Gaven'}, {rating : 2}])    //will use logical or among these 2 entries

    console.log(oroptr)

    const andoptr = await Course.find({rating : {$in : [3, 4.2, 4.5]}})
    .and([{creator : 'Gaven'}, {rating : 2}])   //will use logical and among these 2 entries

    console.log(andoptr)

}

// getCourses()



//Update existing document

async function updateCourse(id){
    let course = await Course.findById(id)
    if(!course) return

    course.name = 'Mongo'
    course.creator = 'Naruto'

    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

//updateCourse('648fee593c81072173646602')


//Deleting a document

async function deleteCourse(id){
    let course = await Course.findByIdAndRemove(id)

    console.log(course)
}

// deleteCourse('648fee8f80dc96c5e55b5af3')