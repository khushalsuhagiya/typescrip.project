import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import admin from "./routes/admin/indext.routes";
import user from "./routes/user/indext.routes";

dotenv.config({
    path: './.env'
})

const server = express()
const port :number|any|undefined = Number(process.env.PORT);
// const dbUrl: string | undefined = process.env.MONGO_DB_URL;
// const dbName: string | undefined = process.env.MONGODB_NAME;

server.use(morgan('dev'));
server.use(express.json());


server.use("/api/u1",user);
server.use("/api/A1",admin);

mongoose.connect(`${process.env.MONGO_DB_URL}`)
.then(()=>{console.log("DB conncted....")})
.catch((error)=>{console.log("DB failed to connect",error)})

server.listen(port,()=>console.log(`server conncted localhost:${port}`))