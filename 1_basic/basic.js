console.log("hello bro")

function sayHello(){
     console.log("Hello")
}

sayHello()

//Syntax of NodeJs is same as JS
//we treat every file in node js as a seperate module
//we can export and import modules from one file to another
//global is a module of node js
//js has a wondow object
//node has a global object

console.log(global)

gaven = {
    name:'gaven',
    age: 20,
    birth : function(){
        return 2023 - this.age
    }
}

console.log(gaven.name)
console.log(gaven.age)
console.log(gaven.birth())

//no files affect each other
//All are seperated so they are called modules
//variables defined in one file wont affect another
//so to use one module in another file we have to export it