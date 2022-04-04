const fs = require('fs');
const path = require('path');

// create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//   if (err) throw err;
//   console.log('File written to...');
// })

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
