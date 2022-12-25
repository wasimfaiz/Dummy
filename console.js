// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5,6 and 7.?

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

//Example: 1

const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);


// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

var a = 12;
var b = 12; 
var c = 12;

//Addition 
console.log(a + b); 

//Subtraction 
console.log(a - b); 

console.log(a * b); 

console.log(a / b); 

console.log(a + b + c); 



// addtiton

var a = 102;
var b = 320;

console.log(a + b);

// sub

var a = 101;
var b = 201;

console.log(a - b);

// multiply

var a =12;
var b = 22;

console.log(a*b);

// multiply

var a =22;
var b = 32;

console.log(a*b);

// divisions  

const a = 14;
const b = 2;
console.log(a/b);

//Write a JavaScript program to count the number of vowels in a given string.

function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));


//Example 1: Sum of Natural Numbers Using for Loop

// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
