'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;

let clients = [];

const server = express()
.use(bodyParser.json())
  .use((req, res) => {
    console.log(req.body);
    console.log(req.head);
    console.log(req.header);
    // //console.log(res);
    //
    //clients.forEach((client) => {
      // client.emit('aaa',request.body);
  //     console.log('client OK 1----');
    //   client.compress(false).emit('uncompressed', req);
  //     console.log('client OK 2----');
     //});
    io.emit('aaa', 'test');
    res.status(200).send('ok');
    }
  )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  //socket.on('aaa', () => console.log('Client disconnected'));
  //console.log(socket);
  //clients.push(socket);
  ///socket.emit('aaa', 'test');

  //socket.send('OK.........');
  //socket.broadcast.emit('broadcast', 'hello friends!');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
