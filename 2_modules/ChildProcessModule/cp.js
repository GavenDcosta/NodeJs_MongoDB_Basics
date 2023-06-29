//child process is a node module used to create sub processes within a script
//you can perform different tasks with your script by just using some methods

const cp = require('child_process')


//this method is used to use the commands of the command prompt
cp.execSync('calc')

cp.execSync('start chrome')

cp.execSync('start chrome https://www.youtube.com/')

console.log('output' + cp.execSync('node demo.js'))
