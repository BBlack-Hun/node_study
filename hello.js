const express = require('express');

const app = express();
// 정적 파일을 서비스 하는 법 (0427)
app.use(express.static('public'));

app.get('/topic', (req, res) => {
  // req의 쿼리로 들어온 id값을 반환해준다.
  //   res.send(`${req.query.id}`);
  // 복수의 값을 받고 싶은 경우
  res.send(req.query.id + ',' + req.query.name);
});

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.get('/dynamic', (req, res) => {
  let lis = '';
  for (var i = 0; i < 5; i++) {
    lis = lis + `<li>coding</li>`;
  }
  let time = Date();
  const output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello, Dynamic!!</h1>
        ${lis}
        ${time}
    </body>
    </html>`;
  res.send(output);
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
