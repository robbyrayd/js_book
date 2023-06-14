//#1
//Given the following code, how can you access the name of the person?
//let person = {
//  name:       'Bob',
//  occupation: 'web developer',
//  hobbies:    'painting',
//};
//> person.name
//or
//> person['name']

//#2
//Which of the following values are valid keys for an object?
//1 - N
//'1' - Y
//undefined - N
//'hello world' - Y
//true - N
//'true' - Y
//> All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings.

//#3
//Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. 
//The object should contain at least 3 elements. You should place your code between the braces in the let statement:
//let myArray = {
//  0: 'a',
//  1: 'b',
//  2: 'c',
//  length: 3
//}

//for (let i = 0; i < myArray.length; i += 1) {
//  console.log(myArray[i]);
//}

//#4
//Create an array from the keys of the object obj below, with all of the keys converted to uppercase. 
//Your implementation must not mutate obj.
//let obj = {
//  b: 2,
//  a: 1,
//  c: 3,
//};

//> let objKeys = Object.keys(obj);
//> let upperKeys = objKeys.map((key) => key.toUpperCase());
//> console.log(upperKeys); // => [ 'B', 'A', 'C' ]
//> console.log(obj); // => { b: 2, a: 1, c: 3 }

//> figure out how to iterate through the properties of obj. 
//> We showed two ways in this chapter: for/in with hasOwnProperty() and Object.keys(). 
//> The former involves a bit more work, so we use Object.keys() combined with map() 
//> to extract and uppercase the keys into an array.

//#5
//Create a new object named myObj that uses myProtoObj as its prototype.
//let myProtoObj = {
//  foo: 1,
//  bar: 2,
//};
//> let myObj = Object.create(myProtoObj)

//#6
//Which of the following values are primitive values? Which are objects? Which are neither?
//"foo" = primitive
//3.1415 = primitive
//[ 'a', 'b', 'c' ] = obj
//false = primitive
//foo = neither
//function bar() { return "bar"; } = obj
//undefined = primitive
//{ a: 1, b: 2 } = obj

//#7
//Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
//> myObj.qux = 3;

//let myProtoObj = {
//  foo: 1,
//  bar: 2,
//  qux: 3
//};

//snippet1
//let objKeys = Object.keys(myObj);
//objKeys.forEach(function(key) {
//  console.log(key);
//});

//snippet2
//for (let key in myObj) {
//  console.log(key);
//}

//Without running this code, can you determine whether these two snippets produce the same output? Why?

//** for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj
//snippet 2 logs:
//qux
//foo
//bar

//Snippet 1 iterates solely over myObj's "own" properties and logs:
//qux

//#8
//Create a function that creates and returns a copy of an object. The function should take two arguments: 
//the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

//The function should let you omit the array of keys argument when calling the function. 
//If you do omit the argument, the function should copy all of the existing keys from the object.

//let objToCopy = {
//  foo: 1,
//  bar: 2,
//  qux: 3,
//};

//let newObj = copyObj(objToCopy);
//console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

//let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
//console.log(newObj2);       // => { foo: 1, qux: 3 }

//let newObj3 = copyObj(objToCopy, [ 'bar' ]);
//console.log(newObj3);       // => { bar: 2 }

//Solution
//function copyObj(sourceObject, keys) {
//  let destinationObject = {};
//  if (keys) {
//    keys.forEach(function(key) {
//      destinationObject[key] = sourceObject[key];
//    });
//    return destinationObject;
//  } else {
//    return Object.assign(destinationObject, sourceObject);
//  }
//}

//#9
//What does the following program log to the console? Why?

//let foo = {
//  a: 'hello',
//  b: 'world',
//};

//let qux = 'hello';

//function bar(argument1, argument2) {
//  argument1.a = 'hi';
//  argument2 = 'hi';
//}

//bar(foo, qux);

//console.log(foo.a); = 'hi'
//console.log(qux); = 'hello'
//line 10 reassigns the argument2 variable, but it doesn't mutate the string represented by qux

//#10
//How many primitive values are there in the following expression? Identify them. 
//How many objects are there in the expression? Identify those objects.

//[1, 2, ["a", ["b", false]], null, {}]
//arrays are objects (4)
//primitive values = 1, 2, "a", "b", false, null

//#11
//Write some code to replace the value 6 in the following object with 606:
//let obj = {
//  foo: { a: "hello", b: "world" },
//  bar: ["example", "mem", null, { xyz: 6 }, 88],
//  qux: [4, 8, 12]
//};
//obj["bar"][3]["xyz"] = 606

//#12
//function foo(bar) {
//  console.log(bar, bar, bar);
//}

//foo("hello"); // should print "hello hello hello"
//bar("hi");    // should print "hi hi hi"

//let bar = foo
//> initializing a bar variable with a reference to the foo function.

//#13
//function foo(bar) {
//  console.log(bar());
//}

//foo(function() {return "Welcome"})   // Should print 'Welcome'
//foo(function() {return 3.1415})   // Should print 3.1415
//foo(function(); {return [1, 2, 3]})   // Should print [1, 2, 3]

//As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.
//> foo expects a function argument (as indicated by the call to bar on line 2), 
//we know we need to pass each invocation a function that returns the desired value

//#14
//Identify all of the variables, object property names, primitive values, 
//and objects shown in the following code (assume the code has not been executed). 
//Don't panic if you miss a few items - this exercise is more challenging than it looks.
//function hello(greeting, name) {
//  return greeting + ' ' + name;
//}

//function xyzzy() {
//  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
//}

//const howdy = hello('Hi', 'Grace');
//let foo = xyzzy();

//Variables: howdy, foo, greeting, name + hello, xyzzy [function names + parameters = variables]
//Obj prop names: a, b, c ,d + array indexes(0,1,2) for [3,4,5]
//primitive values:'hi', 'grace', 1, 2, '', 3, 4, 5 + object property names are usually strings, and strings are primitive values.
//objects: hello, xyzzy, {a:1..}, {}, [3,4,5], 

//#15
//Identify all of the variables, object property names, primitive values, and objects in the following code. 
//This problem is even more challenging than the previous one.
//function bar(arg1, arg2) {
//  let foo = 'Hello';
//  const qux = {
//    abc: [1, 2, 3, [4, 5, 6]],
//    def: null,
//    ghi: NaN,
//    jkl: foo,
//    mno: arg1,
//    pqr: arg2,
//  };

//  return qux;
//}

//let result = bar('Victor', 'Antonina');

//• Variables: bar, arg1, arg2, foo, qux, and result.
//• Property Names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, and 3. Don't forget that array indexes are property names.
//• Primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', and 'Antonina' are the most apparent primitive values. Since property names are strings in most cases, and strings are primitive values, we should also include 'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', and '3'.
//Objects: The bar function, the array [1, 2, 3, [4, 5, 6]], the array [4, 5, 6], and the object assigned to qux on line 3 are all objects.