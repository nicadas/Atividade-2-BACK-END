const http = require('http');
const fs = require('fs');


const PORT = 8080;


const requestListener = (req, res) => {
   if (req.method === 'GET' && req.url === '/') {
       fs.readFile('index.html', (err, data) => {
           if (err) {
               res.writeHead(500, { 'Content-Type': 'text/html' });
               res.end('<h1>500 - Erro Interno do Servidor</h1>');
               return;
           }
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.end(data);
       });
   } else {
       fs.readFile('404.html', (err, data) => {
           if (err) {
               res.writeHead(500, { 'Content-Type': 'text/html' });
               res.end('<h1>500 - Erro Interno do Servidor</h1>');
               return;
           }
           res.writeHead(404, { 'Content-Type': 'text/html' });
           res.end(data);
       });
   }
};


const server = http.createServer(requestListener);


server.listen(PORT, () => {
   console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
