
import httpStatus from "http-status"
import { User } from "../modules/users.model.js"
import bcrypt , {hash} from "bcrypt"
import { json } from "express"
import crypto from "crypto"

const login = async (req , res)=> {
     const {username , password } = req.body 

     if(!username || !password){
         return res.status(400),json({message : "Please provide correct Info "})
     }
     console.log("datas are recived")
     try{
         const user = await User.findOne({username})
         if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message : "User not found! "})
         }
         console.log("data is present")

         const isValid =  await bcrypt.compare(password , user.password) ;
         console.log("datas are compared" , isValid)
         if(isValid){
             let token = crypto.randomBytes(20).toString("hex")

             user.token = token ; // update the User data with Token field 
             await user.save() ; // then save the data to the database 
             return res.status(httpStatus.OK).json({token : token })

         } 
         console.log("datas are valid ")
     }catch(e){
         return res.status(500).json({message : `something went wrong ${e}`})
     }
}

const register = async ( req , res)=> {
     
    const {name , username , password } = req.body;

    try{
         const exist = await User.findOne({username})
         if(exist){
             return res.status(httpStatus.FOUND).json({message: "User already exists Please Log in "})
         }


         const hashPass = await bcrypt.hash(password , 10);
         const newUser = new User({
             name : name , 
             username : username ,
             password : hashPass
         })

         await newUser.save();

         res.status(httpStatus.CREATED).json( { message : "userRegesterd"});

    }catch(err){

          res.json({message : "something went wrong ",err})
    }
}

export {login , register} 