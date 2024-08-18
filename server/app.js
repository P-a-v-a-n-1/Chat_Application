
const express = require("express");
const {Server} = require("socket.io");
const {createServer} = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// import { Server } from 'socket.io';
// import {createServer} from 'http';
// import cors from 'cors';
const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
}));

// const port = 3000;

const userRoutes = require("./routes/User");

// import database from "./config/database.js"
const database = require("./config/database");
require("dotenv").config();

//database connect
database.connect();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

const server =  createServer(app);
const io = new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

io.on('connection', (socket)=>{
    console.log("user connected", socket.id);

    socket.on('message', ({room ,message})=>{
        console.log({message, room});
        io.to(room).emit('recieve-message', message);
    })
 
    socket.on('disconnect', ()=>{
        console.log("user disconnected", socket.id);
    });
})

app.use("/api/v1/auth", userRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
