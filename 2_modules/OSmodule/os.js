//used to give information about the system

const os = require('os')

console.log(os.arch())  //returns the architecture

console.log(os.platform()) //returns the platform

console.log(os.networkInterfaces()) //returns an object containing the info of out network

console.log(os.cpus()) //will return all info about the CPU your working on

console.log(os.totalmem()) //returns the total memory

console.log(os.freemem()) //returns the free memory


//Application : used to check the system compatibility of the user when we want to download something that requires particular requirements
//if user is downloading something from our website then we can use this module to check if his device satisfies all the requirements
