// 1. Using console.log()

// the hello world program
console.log('Hello World');

// 2. Using alert()

// the hello world program
alert("Hello, World!");

// 3. Using document.write()

// the hello world program
document.write('Hello, World!');

// Example 1: Add Two Numbers

const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// Example 2: Add Two Numbers Entered by the User

// store input numbers
const num3 = parseInt(prompt('Enter the first number '));
const num4 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum1 = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Example: Square Root of a Number

// take the input from the user
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

// Example 2: Square Root of Different Data Types

const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);

// Example 1: Area When Base and Height is Known

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);

// Example 2: Area When All Sides are Known

// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);

// Example 1: Using a Temporary Variable
//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
