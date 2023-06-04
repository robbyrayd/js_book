let rlSync = require('readline-sync');
let name = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");
console.log(`Hello, ${name} ${lastName}!`);