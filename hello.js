const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
// 정적 파일을 서비스 하는 법 (0427)
app.use(express.static('public'));
// 미들웨어로 붙였다. => 외부에서의 요청은 이 미들웨어를 거치게 됨 ->  req의 body라는 객체를 만들어 줌.
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/form_receiver', (req, res) => {
  const title = req.query.title;
  const description = req.query.description;
  res.send(title + ', ' + description);
});

// post는 용량에 상관 없이 온전한 데이터를 전달할 때 사용한다
app.post('/form_receiver', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  res.send(title + ', ' + description);
});

app.get('/topic', (req, res) => {
  const topics = ['Javascript is ....', 'Nodejs is ...', 'Express is ...'];
  const output = `
  <a href="/topic?id=0">JavaScript</a></br>
  <a href="/topic?id=1">Nodejs</a></br>
  <a href="/topic?id=2">Express</a></br></br>
  ${topics[req.query.id]}
  `;
  // req의 쿼리로 들어온 id값을 반환해준다.
  res.send(output);
  // 복수의 값을 받고 싶은 경우
  // res.send(req.query.id + ',' + req.query.name);
});

app.get('/topic/:id', (req, res) => {
  const topics = ['Javascript is ....', 'Nodejs is ...', 'Express is ...'];
  // 위의 콜론 다음에 쓴 문자열을 아래, req.param 뒤에 따라오는 문자열을 써준다
  const output = `
  <a href="/topic/0">JavaScript</a></br>
  <a href="/topic/1">Nodejs</a></br>
  <a href="/topic/2">Express</a></br></br>
  ${topics[req.params.id]}
  `;
  // req의 쿼리로 들어온 id값을 반환해준다.
  res.send(output);
});

app.get('/topic/:id/:mode', (req, res) => {
  res.send(req.params.id + ',' + req.params.mode);
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
