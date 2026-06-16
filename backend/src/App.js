import express from 'express'
import cors from 'cors';
import nodemon from 'nodemon'
import cookieParser from 'cookie-parser'
import {connectDB} from './config/DB.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import UserRouter from './routes/UserRouter.js';

dotenv.config()

const app = express();

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(process.env.PORT, () =>{
    console.log(`server connect at  ${process.env.PORT}`)
})

connectDB()

app.use('/user', UserRouter);