const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1>');
});

app.get('/login', (req, res) => {
  console.log('<h1>Login please</h1>');
});

app.listen(3000, () => {
  console.log('Connected 3000 port!');
});
