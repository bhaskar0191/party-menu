import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import {connectDB} from './config/DB.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import UserRouter from './routes/UserRouter.js';

dotenv.config()

const app = express();

app.use(cookieParser());

const allowedOrigins = [
  "https://leads-frontend-iota.vercel.app",  // your deployed frontend
  "http://localhost:5173",                // for local dev
];
app.use(cors({
    origin: allowedOrigins, 
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//app.listen(process.env.PORT, () =>{
    //console.log(`server connect at  ${process.env.PORT}`)
//})

app.get("/", (req, res) => {
    res.send("server is conncet")
})
connectDB()

app.use('/user', UserRouter);

export default app;