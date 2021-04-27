const express = require('express');

const app = express();
// 정적 파일을 서비스 하는 법 (0427)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.get('/route', (req, res) => {
  res.send('Hello Router, <img src="/wraith.png">');
});

app.get('/login', (req, res) => {
  console.log('<h1>Login please</h1>');
});

app.listen(3000, () => {
  console.log('Connected 3000 port!');
});
