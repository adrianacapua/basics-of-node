// Using contructor
const nums = new Array(1,2,3,4,5);
// console.log(nums);

// Square brackets
const fruits = ['apples', 10, true, (1+4)];
// console.log(fruits);

// Manipulate it
fruits[3] = 'grapes';
fruits.push('mangos');
// console.log(fruits);

// unshift
fruits.unshift('strawberries');
// console.log(fruits);

// Find values
console.log(fruits.indexOf('apples'));
console.log(fruits.includes('grapes'));