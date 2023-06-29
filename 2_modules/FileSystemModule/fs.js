const fs = require('fs')


//Files


//Reading a File
let fileContent = fs.readFileSync('f1.txt')
console.log('data of file 1 -> ', fileContent)  //will return output in buffer format
console.log('data of file 1 -> ' + fileContent) //will return output in string format


//Writing a File
fs.writeFileSync('f2.txt' , 'This is the updated data')   //will replace the old contents with this
console.log('File has been written')


//Append a file 
fs.appendFileSync('f3.txt' , 'This is the added data')  //wont affect the old content....will add new content to the file
console.log('Data successfully added')


//Deleting a File
fs.unlinkSync('f4.txt')  //will delete a file
console.log('File has been deleted')


//if you try to write in a deleted file then it will create a new file with this name and write content in it
fs.writeFileSync('f4.txt' , 'This is the newly created file')   
console.log('File has been written')





//Directories


///Create a directory
fs.mkdirSync('myDirectory')  //Will create a new directory/folder


//Check the content inside of a directory
let folderPath = 'C:\\Users\\gaven\\OneDrive\\Desktop\\NodeJs\\modules\\FileSystemModule\\myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log('Folder Content' + folderContent) //will return content in string format
console.log('Folder Content' , folderContent) //will return content in array format


//Check whether a directory/file exists or not
//will return a boolean
let doesExist = fs.existsSync('myDirectory')   
console.log(doesExist)

let exist = fs.existsSync('f4.txt')   
console.log(exist)

let doesntExist = fs.existsSync('newDirectory')   
console.log(doesntExist)


//remove/delete a directory
fs.rmdirSync('newDir')    //will delete a directory/folder