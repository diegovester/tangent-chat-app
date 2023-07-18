// reference: https://socket.io/get-started/chat
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 4

// We define a route handler / that gets called when we hit our website home.
app.get('/', (req, res) => {
    // We call res.sendFile with the absolute path to our index.html file.
    res.sendFile(__dirname + '/index.html');
  });

// We make the http server listen on port 3000.
server.listen(3000, () => {
    console.log('listening on *:3000');
});