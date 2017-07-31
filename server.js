'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');
const fetch = require('node-fetch');

const enrichResultsResponse = require('./helpers').enrichResultsResponse;

const PORT = process.env.PORT || 3001;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (data) => {
    const wsFrameData = JSON.parse(data);
    // console.log('incoming data: ', wsFrameData);

    if(typeof wsFrameData.img !== 'undefined') {
      const base64Img = wsFrameData.img;
      fetch('http://localhost:3000/classify', {
        method: 'POST',
        body: JSON.stringify({
          img: base64Img
        })
      })
        .then((res) => res.json())
        .then((jsonResults) => {
          console.log('got results from classifier server: ', JSON.stringify(jsonResults, null, 2));
          const enrichedResults = enrichResultsResponse(jsonResults);
          ws.send(JSON.stringify(enrichedResults));
        })
    }
    // console.log('incoming data: ', JSON.stringify(data.data, null, 2));
  })
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({ts: new Date().toTimeString(), test: 'hello'}));
  });
}, 10000);
