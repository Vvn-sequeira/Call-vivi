import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";
import { connectTosocket } from './controllers/socketManager.js';

import userRoutes from "./routes/users.routes.js"

import cors from "cors";
const app = express() ;
app.use(cors({
    origin: process.env.FRONTEND_LINK,
    credentials: true,
}));
app.use(express.json({limit : "40kb"}))
app.use(express.urlencoded({limit: "40kb" , extended : true}));


const Port = process.env.Port || 8000
const Mongo_URL = process.env.MONGO_URL ;


const server = createServer(app);
const io = connectTosocket(server) // Socket io server

app.use("/api/v1/user", userRoutes);

app.get("/Home", (req , res)=> {
     return res.json({"hello": "world"})
});

 const start = async ()=> {
    const connectionDB = await mongoose.connect(Mongo_URL);
    console.log("connected to dataBase");
    server.listen(Port , ()=> {
        console.log("Listening on Port 8000")
    })
 }
 start(); 