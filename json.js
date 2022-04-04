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

// object to JSON string
const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// JSON string to Object
const todoObj = JSON.parse(todoJSON);
console.log(todoObj);