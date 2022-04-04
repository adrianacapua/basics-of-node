// setTimeout
// setTimeout(() => {
//   console.log('Waited 1 second');
// }, 1000);



// nested setTimeouts = callback hell
// setTimeout(() => {
//   console.log('3');
//   setTimeout(() => {
//     console.log('2');
//     setTimeout(() => {
//       console.log('1');
//     }, 1000);
//   }, 1000);
// }, 1000);

// error first callback
// const fs = require('fs');

// fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

// Promises
// const myPromise = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 2);
//   console.log(rand);
//   if (rand === 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// const myPromise = // query sa database

// console.log(myPromise);

// myPromise
//   .then(() => console.log('Success'))
//   .catch(() => console.log('Something went wrong'));

const fetch = require('node-fetch');
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

  // console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'));

// Async/Await
// const fetch = require('node-fetch');
// const fetchPokemon = async (id) => {
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchPokemon(2);