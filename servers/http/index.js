const http = require('http');
// const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the HTTP Server</h1><p>This is the home page.</p>');
    return;
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1><p>This is the about page.</p>');
    return;
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contact Us</h1><p>This is the contact page.</p>');
    return;
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(
      '<h1>404 Not Found</h1><p>The requested resource was not found on this server.</p>',
    );
    return;
  }

  //   res.end('HJello');
});

// HTTP methods and status codes
// GET, POST, PUT, DELETE, PATCH, OPTIONS
// OPTIONS is used for CORS preflight requests, allowing the server to specify which HTTP methods and headers are allowed when accessing resources from a different origin.
// 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error

server.listen(8080, () => {
  console.log('HTTP server is running on port 8080');
});

// For HTTPS server, you would need to provide SSL certificates
// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
// };
