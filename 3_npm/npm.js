//npmjs.com => can access various packages 
//npm -v
//npm init
//ls
//package.json helps us to keep a track of our project


//figlet package
const figlet = require('figlet')

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });