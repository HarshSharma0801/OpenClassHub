import express from 'express'
import User from '../Modals/User.js';
import jwt from 'jsonwebtoken';
import AuthenticateToken from '../Middleware/AuthenticateToken.js'

const Auth = express();

const accessKey = process.env.JWT_ACCESS;


Auth.post('/signup' , async(req,res)=>{

      const {username , email , password} = req.body;
    try {
        const ExistingUser = await User.findOne({email:email});
        if(ExistingUser){
            res.status(200).json({valid:false});
        }
        else{
       
           
          const user =  await User.create({
                username:username,
                email:email,
                password:password
            })
            const ExistingUser = {
                _id:user._id,
                username:username,
                email:email,
                password:password
            }
            const accessToken = jwt.sign({ExistingUser}, accessKey, { expiresIn: "2d" });

            
            res.status(200).json({ access:accessToken, valid:true , info:ExistingUser});

        }

     
        
    } catch (error) {
        console.log(error)
    }
} )



Auth.post('/login' ,async(req,res)=>{


    const { username, password } = req.body;

  
  try {
    const ExistingUser = await User.findOne({ password: password , username:username });

    if (!ExistingUser) {
      res.status(200).json({ valid: false });
    } else {
      const accessToken = jwt.sign({ ExistingUser }, accessKey, {expiresIn: "2d", });
      res.status(200).json({ access: accessToken, valid: true, PersonInfo: ExistingUser });
    }
  }

        
    

        
     catch (error) {
        console.log(error)
    }



})


Auth.get('/Token' , AuthenticateToken , async(req,res)=>{
    
    const user = req.user ;
    try {
       res.status(200).json({valid:true , Userdata:user.ExistingUser});
    } catch (error) {
        console.log(error)
    }


} )


export default Auth

