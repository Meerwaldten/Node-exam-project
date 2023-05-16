import express from "express";
import dotenv from "dotenv/config";
const app = express();

app.use(express.json());

import session from "express-session";

import cors from "cors";

app.use(cors({
    credentials: true,
    origin: true
}));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        credentials: true,
        origin: "*",
        methods: "*"
    }
});

io.on("connection", (socket) => {

});


import db from "./database/connection.js";
db;

import userRouter from "./routes/userRouter.js";
app.use(session({
    secret: "keyboard cat" || process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));


app.use(userRouter);

/*
app.get("/", (req, res) => {
    res.send({ message: "It's alive."});
});

app.post("/register", (req, res) => {
    req.session.username = req.body.username;
    res.send({ data: req.body.username });
});
*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));