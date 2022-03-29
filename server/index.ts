import { Application } from "express";
import dotenv from 'dotenv';
dotenv.config()
import  express from 'express';
import cors from 'cors'
const app: Application = express();
import router  from './router/index'
import sequelize from "./db";

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))
app.use('/api',router)

const start = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`server launch in ${process.env.PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

start();
