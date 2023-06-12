//#1
//In the following code, what are the final length values for array1, array2, array3, array4, and array5?
//let array1 = [1, 2, undefined, 4]; = 4

//let array2 = [1];
//array2.length = 5; = 5

//let array3 = [];
//array3[-1] = [1]; = 1
//> The length of array3 is 0. Index positions must be non-negative integers starting from 0
//> Negative and non-integer indexes don't get taken into account when determining an array's length.

//let array4 = [1, 2, 3, 4, 5];
//array4.length = 3; = 3
//> JavaScript truncates the array by removing the last two elements, leaving a total of 3 elements.

//let array5 = [];
//array5[100] = 3; = 101

//#2
//Log all of the even values from myArray to the console.
//let myArray = [1, 3, 6, 11, 4, 2,
//  4, 9, 17, 16, 0];
//   for (let i = 0; i< myArray.length; i++) {
//    if (myArray[i] % 2 === 0) {
//      console.log(myArray[i])
//    }
//  }

//  alternate solution (using forEach)
//  myArray.forEach(function(value) {
//    if (value % 2 === 0) {
//      console.log(value);
//    }
//  });

//#3
//Let's make the problem a little harder. In this problem, we're again interested in even numbers, 
//but this time the numbers are in nested arrays in a single outer array.

//let myArray = [
//  [1, 3, 6, 11],
//  [4, 2, 4],
//  [9, 17, 16, 0],
//];
//for (let i = 0; i < myArray.length; i++) {
//  for (j = 0; j < myArray[i].length; j++) {
//    if (myArray[i][j] % 2 === 0) {
//      console.log(myArray[i][j])
//    }
//  }
//}

//forEach method
//myArray.forEach(function(nestedArray) {
//  nestedArray.forEach(function(value) {
//    if (value % 2 === 0) {
//      console.log(value);
//    }
//  });
//});

//#4
//We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array 
//that contains one element for each element in the original array. If the element is an even value, then the 
//corresponding element in the new array should contain the string 'even'; otherwise, 
//the element in the new array should contain 'odd'.

//let myArray = [
//  1, 3, 6, 11,
//  4, 2, 4, 9,
//  17, 16, 0,
//];

////let newArray = []
////for (let i = 0; i < myArray.length; i++) {
////  if (myArray[i] % 2 === 0) {
////    newArray.push('even')
////  } else {
////    newArray.push('odd')
////  }
////}

//let newArray = myArray.map(function(value) {
//  if (value % 2 === 0) {
//    return 'even';
//  } else {
//    return 'odd';
//  }
//});

//console.log(newArray)

//#5
//Write a findIntegers function that takes an array argument and returns an array that contains 
//only the integers from the input array. Use the filter method in your function.
//let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

//let integers = findIntegers(things);
//console.log(integers); // => [1, 3, -4]
 
////Solution:
////function findIntegers (array) {
////  return array.filter(function (element) {
////    return Number.isInteger(element)
////  })
////}

//#6
//Use map and filter to first determine the lengths of all the elements 
//in an array of string values, then discard the even values (keep the odd values).

//let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]

//function oddLengths(strings) {
//  let lengths = strings.map((letters) => letters.length);
//  let oddLengths = lengths.filter((number) => number % 2 === 1);
//  return oddLengths
//}

//#7
//Use reduce to compute the sum of the squares of all of the numbers in an array:
//let array = [3, 5, 7];
//console.log(sumOfSquares(array)); // => 83

//function sumOfSquares(numbers) {
//  return numbers.reduce((accumulator, number) => {
//    return accumulator + number * number;
//  }, 0);
//}

//function sumOfSquares(numbers) {
//  return numbers.reduce(function(sum,number) {
//    return sum + number * number;
//  }, 0)
//}
//let array = [3, 5, 7];
//console.log(sumOfSquares(array));

//#8
//Write a function similar to the oddLengths function from Exercise 6, 
//but don't use map or filter. Instead, try to use the reduce method.
//let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]

//function oddLengths(strings) {
//  return strings.reduce(function(filteredNumbersArray, letters) {
//    let length = letters.length;
//    if (length % 2 === 1) {
//      filteredNumbersArray.push(length);
//    }
//    return filteredNumbersArray;
//  }, []);
//}
//let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); 

//#9
//Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
//let numbers1 = [1, 3, 5, 7, 9, 11];
//console.log(numbers1.includes(3)) = true
//let numbers2 = [];
//console.log(numbers2.includes(3)) = false
//let numbers3 = [2, 4, 6, 8];
//console.log(numbers3.includes(3)) = false

//#10
//Write some code to replace the value 6 in the following array with 606:
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606
console.log(arr)