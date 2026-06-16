import mongoose from 'mongoose'

const UserSchema =  new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true 
    },
    password: {
        type: String,
        require: true
    },
    creatAt: {
       type: Date,
       default: Date.now
    }
})

// hide password 
UserSchema.set("toJSON", {
    transform: (doc, ret) =>{
        delete ret.password
        return ret
    }
})

const User = mongoose.model("User", UserSchema);
export  default  User