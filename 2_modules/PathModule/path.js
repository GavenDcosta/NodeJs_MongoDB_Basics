const path = require('path')


//will return the name of the extension of the file
let ext = path.extname('C:\Users\gaven\OneDrive\Desktop\NodeJs\modules\PathModule\txt.txt')  
console.log(ext)

//will return the basename of the file
let baseName = path.basename('C:\\Users\\gaven\\OneDrive\\Desktop\\NodeJs\\modules\\PathModule\\txt.txt')  //in node js as a security measure make these slashes in the path as double slashes to get the correct output
console.log(baseName)

//will return the path of the file your working on
console.log(__filename)

//will return the directory name that contains the current file
console.log(__dirname)