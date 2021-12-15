const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>Hello, Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello Gyeongjae</p>');
})
    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대개 중입니다.');
});
server.on('error', (error) => {
    console.log(error);
});