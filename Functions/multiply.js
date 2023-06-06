//function multiply(prompt){
//  let rlSync = require('readline-sync');
//  let number = rlSync.question(prompt);
//  return number;
//}
//let firstNumber = multiply('First number to multiply? ');
//let secondNumber = multiply('Second number to multiply? ');
//console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);


//LS Solution
function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let first = getNumber('Enter the first number: ');
let second = getNumber('Enter the second number: ');
console.log(`${first} * ${second} = ${multiply(first, second)}`);