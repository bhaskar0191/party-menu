import jwt from 'jsonwebtoken'
import dotenv, {config} from 'dotenv'

config()

const auth = async(req, res, next) => {
   const  tokenHeader = req.headers.authorization
   const  tokenCookie = req.cookies?.token

   const token = tokenHeader?.split(" ")[1] || tokenCookie

   if (!token){
    return res.status(401).json({message: "Access denied. No token provided."})
   }
   try {
    const docoded = await jwt.verify(token, process.env.JWT_SECRET )
    if (docoded.id || docoded.Id){
        res.user = docoded
        next()
    }else{
        return res.status(401).json({ message: 'Invalid token payload.' })
    }

   }catch(err){
    res.status(500).json({ message: 'Invalid or experied token .' })
   }
}
export default auth