// arrow function
// const addNums = (num1 = 1, num2 = 1) => {
//   const sum = num1 + num2;
//   console.log(sum);
// }
// addNums(2,4);

// short-hand if there is only 1 expression
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(2,4));

// shorthand if there is only 1 parameter
// const addNums = num1 => num1+5;
// console.log(addNums(5));

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

// todos.forEach(todo => console.log(todo));

console.log(todos.map(todo => todo.text));