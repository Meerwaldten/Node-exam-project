import express from "express";
import dotenv from "dotenv/config";
import userRouter from "./routes/userRouter.js";
import session from "express-session";
import db from "./database/connection.js";
import connectMongoDBSession from 'connect-mongodb-session';
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());

const corsMiddleware = cors({
    origin: true,
    credentials: true,
    methods: "*"
})

app.use(corsMiddleware);

const MongoDBStore = connectMongoDBSession(session);

const sessionStore = new MongoDBStore({
    uri: process.env.DATABASE_SESSION_URL,
    collection: "sessions", 
})

sessionStore.on('error', function (error) {
    console.log('Session store error:', error);
});

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false},
    store: sessionStore,
});

app.use(sessionMiddleware);

app.use(express.json());

app.use(userRouter);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_PORT,
        credentials: true,
        methods: ["GET", "POST"],
    },
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

const latestSuggestions = [];
const latestAdminSuggestions = [];

latestSuggestions.length = 0;
latestAdminSuggestions.length = 0;


io.on("connection", (socket) => {
    console.log("Socket connected");

    socket.emit("initial suggestions", latestSuggestions);

    socket.on("character suggestion", (data) => {
        latestSuggestions.push(data);
        console.log(latestSuggestions);

        if(latestSuggestions.length > 5) {
            latestSuggestions.shift();
          }
        io.emit("user suggested a character", data)
    })


    socket.emit("initial admin suggestions", latestAdminSuggestions);

    socket.on("suggestion to admin", (data) =>{
        latestAdminSuggestions.push(data)
        console.log(latestAdminSuggestions)
        console.log(data.text);
        console.log(data.username);
        io.emit("admin received suggestion", data)
    })
});

db;

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port: ", PORT));