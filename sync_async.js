const fs = require('fs');

console.log(1);
//Sync
const data = fs.readFileSync('data.txt', { encoding: 'utf8' });

console.log(data);

console.log(2);

// ASync
fs.readFile('data.txt', { encoding: 'utf8' }, (err, data) => {
  console.log(data + 'ㄴㅑ아아');
});

console.log(3);
