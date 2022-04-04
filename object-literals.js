const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
NaN

// console.log(person.firstName, person.lastName);

// console.log(person.hobbies[1]);
console.log(person.address);

// console.log(person.address.dd);

const { firstName, lastName, age: yearsold } = person;
// console.log(firstName);
// console.log(lastName);
// console.log(yearsold);

person.email = 'john@gmail.com';
// console.log(person);

// console.log(person['firstName']);