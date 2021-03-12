#!/usr/bin/env node
// ** can run this file globally
// ** chmod +x ./index.js (allows running as trusted script)
// ** ./index.js
// ** ws ok for small apps; socket.io for all browsers
import { Server } from "ws";
import { log, info } from "clear-logs";

// ** Site is on 5000
const PORT = 3000;

let messages = [];

// ** ws Server Native websockets connect until disconnected
const runSimpleSocket = () => {
  info("starting up");
  const webSocketServer = new Server({ port: PORT });

  webSocketServer.on("connection", (socket) => {
    // ** socket sent message to socket server

    socket.on("message", (message) => {
      log(message);
      messages.push(message);
      // ** array of every connected socket client
      webSocketServer.clients.forEach((client) => client.send(message));
    });

    socket.on("close", () => {
      info("Web socket closed");
    });

    socket.send(`Welcome to CyberChat`);
    log(`Web socket connected on port ${PORT}`);

    // ** populate new browsers with existing messages
    if (messages.length) {
      socket.send("Chat is currently in session");
      messages.forEach((message) => socket.send(message));
    }
  });

  console.log("Chat server waiting for connections");
};

runSimpleSocket();
