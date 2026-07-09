import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export const  connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoos connect at ${conn.connection.host}
        `)
    }catch(err){
       console.log(err)
       process.exit(1)
    }

}
