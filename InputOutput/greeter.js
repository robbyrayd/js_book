//let rlSync = require('readline-sync');
//let name = rlSync.question("What is your first name?\n");
//let lastName = rlSync.question("What is your last name?\n");
//console.log(`Hello, ${name} ${lastName}!`);


function getName(prompt){
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}
let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);