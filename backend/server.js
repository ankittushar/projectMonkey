const http=require('http');
const Port=process.env.Port || 5000;
const app=require('./app');

const server=http.createServer(app);

server.listen(Port);
