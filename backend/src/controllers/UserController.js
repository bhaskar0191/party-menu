import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../modules/UserModule.js';

// register 

const register = async (req, res) => {
   try {
    const {name, email, password } = req.body

    if (!name || !email || !password){
       return res.status(400).json({message : "name, password, email are requeried"})
    }
    if (await User.findOne({email})){
        return res.status(400).json({message: "this email is already existed"})
    }
    const hashedpassword =  await bcrypt.hash(password, 10)
    const newUser = await User.create({
        name,
        email,
        password: hashedpassword
    })
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'}) 
    res.cookies = ('token', token, {
        httpOnly : true,
        secure: process.env.NODE_ENV === 'production',
        sameSite : process.env.NODE_ENV === 'production' ? 'None' :'strict',
        maxAge: 36000000
    })
    res.status(201).json({
        success: true,
        token,
        message: "User Successfully register. "
    })
    
   }catch(err){
    console.error(err);
    res.status(500).json({message: "server error"})
   }
}

//login Uswer 

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        if (!email || !password){
            return res.status(400).json({message: "email, password are required"})
        }
        const user = await User.findOne({email})
        if (!user){
             res.status(400).json({message: "email is not Valied"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json({message: 'password is not Valied'})
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
            maxAge: 3600000
        });
        res.status(200).json({
            success: true,
            token,
            user,
            message: "User is Successfully Login"
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

//User LogOut 

const logout = async(req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None': 'strict'
        })
        res.status(200).json({message: "User is successfully Logout"})
    }catch(err){
        res.status(500).json({message: "server error", err})
    }
}

// get User by Id 

const getUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        if (!user){
           return res.status(400).json({message: "User Not Found"})
        } 
        res.status(200).json({
            success:true,
            user   
        })
    }catch(err){
      res.status(500).json({message: "serverError", err})
    };  
}

// passqordUpdate 
const passwordUpdate = async(req, res) => {
    try {
        const {email, newPassword} = req.body;
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json({message: "User Not Found "})
        }
        if (email !==user.email){
            return res.status(403).json({message: "Unauthorized to Update this email"}) 
        }
        if (!newPassword){
            res.status(400).json({message: "newpassword is required"})
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10)

        res.status(200).json({
            success: true,
            message: "password Update successfully"
        })

    }catch(err){
        console.log( "server erore", err)
        res.status(500).json({
            message: "server erroe"
        })
    }
}

export {
    register,
    login,
    logout,
    passwordUpdate,
    getUser
}