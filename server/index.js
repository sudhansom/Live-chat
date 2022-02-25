const express = require("express");
const http = require("http");
const cors = require("cors");
// import express from "express";
// import http from "http";
// import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("SERVER RUNNING...");
});
