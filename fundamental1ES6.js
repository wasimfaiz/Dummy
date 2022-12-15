// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property 
// values to the second one.

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