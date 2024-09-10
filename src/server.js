const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(`request.url=${request.url}`);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(`Hello 430! - ${new Date().toISOString()}`);
  response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running at 127.0.0.1:${port}`);
});