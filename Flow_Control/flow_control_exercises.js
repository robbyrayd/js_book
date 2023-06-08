//#1
//What values do the following expressions evaluate to?
//false || (true && false); > false
//true || (1 + 2); > true
//(1 + 2) || true; > true >> 3
//true && (1 + 2); > true >> 3
//false && (1 + 2); > false
//(1 + 2) && true; > true
//(32 * 4) >= 129; > false
//false !== !true; > false
//true === 4; > false
//false === (847 === '847'); > true
//false === (847 == '847'); > false
//(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; > false 
//>> Put together, items 1-3 combine with || as (false || false || true), which is true.

//#2
//Write a function, evenOrOdd, that determines whether its argument is an even number. 
//If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. 
//For now, assume that the argument is always an integer.


//> function evenOrOdd (num) {
//  if (num % 2 === 0) {
//    console.log('even')
//  } else {
//    console.log('odd')
//  }
//}

//#3
//Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. 
//If it isn't, the function should issue an error message and return.
// function evenOrOdd (num) {
//  if (!Number.isInteger(num)) {
//    console.log ('Sorry, the value you passed is not an integer');
//    return;
//  }

//  if (num % 2 === 0) {
//    console.log('even')
//  } else {
//    console.log('odd')
//  }
//}

//evenOrOdd(3.14)

//#4
//What does the following code log to the console, and why?
//function barCodeScanner(serial) {
//  switch (serial) {
//    case '123':
//      console.log('Product1');
//    case '113':
//      console.log('Product2');
//    case '142':
//      console.log('Product3');
//    default:
//      console.log('Product not found!');
//  }
//}

//barCodeScanner('113');

//> Product 2
//> Product 3
//> Product not found!
//> the code will start executing commands once it identifies a match for passed in argument, 
//> without a break command, the function continues to run until completed.
//>> control falls through from the matching case '113'

//#5
//Refactor this statement to use an if statement instead.
//return foo() ? 'bar' : qux();
//> if (foo()) {
//  return 'bar';
//} else {
//  return qux();
//}

//#6
//What does this code output to the console?
//function isArrayEmpty(arr) {
//  if (arr) {
//    console.log('Not Empty');
//  } else {
//    console.log('Empty');
//  }
//}

//isArrayEmpty([]);
//>> The output is Not Empty since, while the array is empty -- 
//>> it has no elements and the length property is 0 -- it isn't falsy. 
//>> Thus, JavaScript executes the first branch of the if statement.

//#7
//Write a function that takes a string as an argument and returns an 
//all-caps version of the string when the string is longer than 10 characters. 
//Otherwise, it should return the original string. 
//Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

//function allCaps (str) {
//  if (str.length > 10) {
//    return str.toUpperCase()
//  } else {
//    return str
//  }
//}

//console.log(allCaps('hello world'))

//>> function capsLong(string) {
//  return ((string.length > 10) ? string.toUpperCase() : string);
//}

//#8
//Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), 
//greater than 100, or less than 0.
//function numberRange (num) {
//  if (num >= 0 && num <= 50) {
//    console.log (`${num} is between 0 and 50`)
//  } else if (num >= 51 && num <= 100) {
//    console.log (`${num} is between 51 and 100`)
//  } else if (num > 100) {
//    console.log (`${num} is greater than 100`)
//  } else if (num < 0) {
//    console.log (`${num} is less than 0`)
//  }
//}

//numberRange(25);
//numberRange(75);
//numberRange(125);
//numberRange(-25);

//>> function numberRange(number) {
//  if (number < 0) {
//    console.log(`${number} is less than 0`);
//  } else if (number <= 50) {
//    console.log(`${number} is between 0 and 50`);
//  } else if (number <= 100) {
//    console.log(`${number} is between 51 and 100`);
//  } else {
//    console.log(`${number} is greater than 100`);
//  }
//}

//#9
//Without running this code, what will it print?
//console.log(false ?? null); > false
//console.log(true ?? (1 + 2)); > 3 >> true
//console.log((1 + 2) ?? true); > 3
//console.log(null ?? false); > false
//console.log(undefined ?? (1 + 2)); > 3
//console.log((1 + 2) ?? null); > 3
//console.log(null ?? undefined); > undefined
//console.log(undefined ?? null); > undefined >> null

//Remember that ?? returns the second operand if the first operand is either null or undefined. 
//In all other situations, it returns the first operand.

//#10
//Without running this code, what will it print?
//function show(foo = undefined, bar = null) {
//  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
//}

//show(5, 7); > foo is 5, bar is 7
//show(0, 0); > foo is 3, bar is 42 >> foo is 0, bar is 0
//show(4); > foo is 4, bar is 42
//show(); > foo is 3, bar is 42