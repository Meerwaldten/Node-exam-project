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
    credentials: true,
    origin: true,
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
const io = new Server(server, {corsMiddleware});

/*
io.on("connection", (socket) => {
});
*/

db;




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));