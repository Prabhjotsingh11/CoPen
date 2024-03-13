const express = require('express');
const { createServer } = require('http');
const { Server } = require("socket.io");
const connect = require('./db/connect');
const notFound = require('./middleware/not-Found');
const errorHandler = require('./middleware/error-Handler');
const app = express();
const server = createServer(app);
const io = new Server(server);
require('express-async-errors');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('./public'));


io.on('connection', (socket) => {
    console.log("user joined");
    socket.on('change', (msg) => {
        socket.broadcast.emit('change', msg);
    })
})

app.use(notFound);
app.use(errorHandler);

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});