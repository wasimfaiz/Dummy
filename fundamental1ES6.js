// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property 
// values to the second one.
// values to the 

// Use Object.keys() to get all the keys of the second object.
// Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

// Note: Use String.split('\n') to create a string for each row, then String.split(delimiter) to separate the values in each row. Omit the second argument, delimiter, to use a default delimiter of ,. Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

// Use Array.prototype.slice() and Array.prototype.indexOf('\n') to remove the first row (title row) if omitFirstRow is true.
// Use String.prototype.split('\n') to create a string for each row, then String.prototype.split(delimiter) to separate the values in each row.
// Omit the second argument, delimiter, to use a default delimiter of ,.
// Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csv_to_array('a,b\nc,d')); 
console.log(csv_to_array('a;b\nc;d', ';')); 
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));

// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

// Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
// Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
// Use Array.prototype.push() to re-populate it with only the pulled values.

const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return pulled;
};
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));


// Write a JavaScript program to get every nth element in a given array.

// Use Array.prototype.filter() to create a new array that contains every nth element of a given array.

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 1));
console.log(every_nth([1, 2, 3, 4, 5, 6], 2));
console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
console.log(every_nth([1, 2, 3, 4, 5, 6], 4));


// Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
console.log(xProd([1, 2], ['a', 'b']));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));

// Write a JavaScript program to convert a value to a safe integer.

const to_Safe_Integer = num =>
 Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
console.log(to_Safe_Integer('5.2'));
console.log(to_Safe_Integer('5.52'));
console.log(to_Safe_Integer(Infinity));

// Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1.

const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
console.log(tail([1, 2, 3])); 
console.log(tail([1]));

// Write a JavaScript program to get a random integer in the specified range.

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));
console.log(randomIntegerInRange(5, -5));
console.log(randomIntegerInRange(-2, -7));

// Write a JavaScript program to run a given array of promises in series.

const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

// Executes each promise sequentially, taking a total of 3 seconds to complete

runPromisesInSeries([() => delay(1000), () => delay(2000)]);

// Write a JavaScript program to get a random element from an array.

const sample = arr => arr[Math.floor(Math.random() * arr.length)];
console.log(sample([3, 7, 9, 11]));
