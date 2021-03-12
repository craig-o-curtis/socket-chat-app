# Websocket Chat App

Simple app using browser client and web sockets.

## Scripts

- `npx serve ./client` to run client on port 5000
- `npm run start` to run socket server on port 3000

## Info

- Connects to `ws://localhost:3000/`
- Uses own protocol with `ws`
- Each tab opens a new socket connection

## Packages

- ws
- clear-logs
