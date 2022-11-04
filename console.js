// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

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

console.log(a + b); 

console.log(a - b); 

console.log(a * b); 

console.log(a / b); 

console.log(a + b + c); 



