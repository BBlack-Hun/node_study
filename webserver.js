const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  })
  // 응답이 들어왔을때 실행하는 코드
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
