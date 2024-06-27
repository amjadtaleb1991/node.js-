const http= require('http');
const app=require('./app');
///creat server on localhost
const server=http.createServer(app.app);




////server listen to port 3000 to get client request
server.listen(3000,()=>{console.log('server runing')});