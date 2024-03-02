// TypeError: sort is not a function in JavaScript

// EXAMPLE 1 - Only call the `sort()` method on valid arrays

const arr = ['d', 'c', 'a', 'b'];

// 👇️ ['a', 'b', 'c', 'd']
console.log(arr.sort());

// ------------------------------------------------------------------

// // EXAMPLE 2 - Accessing an array property on an object before calling sort()

// const obj = {
//   letters: ['d', 'b', 'c', 'a'],
// };

// const result = obj.letters.sort();
// console.log(result); // 👉️ [ 'a', 'b', 'c', 'd' ]

// // 👇️ { letters: [ 'a', 'b', 'c', 'd' ] }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if the value is an array before calling `sort()`

// const arr = null;

// const result = Array.isArray(arr) ? arr.sort() : [];

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using a simple `if` statement

// const arr = null;

// let result = [];

// if (Array.isArray(arr)) {
//   result = arr.sort();
// }

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert the value to an array before calling `sort()`

// const set = new Set(['c', 'b', 'a']);

// const result = Array.from(set).sort();
// console.log(result); // 👉️ ['a', 'b', 'c']
