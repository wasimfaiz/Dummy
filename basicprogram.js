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
const areasValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areasValue}`
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
let aa = prompt('Enter the first variable: ');
let bb = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = aa;
aa = bb;
bb = temp;

console.log(`The value of a after swapping: ${aa}`);
console.log(`The value of b after swapping: ${bb}`);

// Example: Roots of a Quadratic Equation

// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

//Example 1: Kilometers to Miles

// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

//Example: Celsius to Fahrenheit


// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// Example 1: Using if...else

// program to check if the number is even or odd
// take input from the user
let num = prompt("Enter a number: ");

//check if the number is even
if(num % 2 == 0) {
    console.log("The number is even.");
}

// Example: Check Prime Number
// if the number is odd
else {
    console.log("The number is odd.");
}

// Example 2: Using Ternary Operator

// program to check if the number is even or odd
// take input from the user
const numm = prompt("Enter a number: ");

// ternary operator
const res = (numm % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${res}.`);

// Example: Check Prime Number

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

// Example: Print Prime Numbers

// program to print prime numbers between the two numbers