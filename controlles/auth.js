import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { creatError } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";

export const register = async (req,res,next)=>{
   try{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User ({
        username: req.body. username,
        email: req.body.email,
        password: hash,
       
    });
    await newUser.save()
    res.status(200).send("User has benn created")

   }catch(err){
    next(err)
   }
};

export const login = async (req,res,next)=>{
    try{
        const  user = await User.findOne({username:erq.body.username})
        if(!user) return next(creatError(404, "User not Found !"))
        const isPaswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPaswordCorrect) return next(creatError(400, "wronnge Password and UserName"));

        const token = Jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.Jwt);
        const {password ,isAdmin, ...otherDetails} = user._doc;
     res.cookie("acces_token", token,{
        httpOnly : true,
     }).status(200).json({...otherDetails});
    }catch(err){
     next(err);
    }
 };