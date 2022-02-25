const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

// import express from "express";
// import http from "http";
// import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, () => {
  cors: {
    origin: "http://localhost:3000";
    methods: ["GET", "POST"];
  }
});
io.on("connect", (socket) => {
  console.log("socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING...");
});
