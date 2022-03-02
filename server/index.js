const express = require("express");
const http = require("http");
const cors = require("cors");
const router = require("./router");
const { Server } = require("socket.io");

// import express from "express";
// import http from "http";
// import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", //"https://stoic-swirles-e06721.netlify.app/",
    methods: ["GET", "POST"],
  },
});
io.on("connect", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with id ${socket.id} joined room ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log("SERVER RUNNING...");
});
