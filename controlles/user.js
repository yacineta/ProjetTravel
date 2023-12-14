
import User from "../models/User.js";



// 
// 
export const updatedUser = async (req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
            );
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req,res,next)=>{
    
    try{
        await Users.findByIdAndDelete(req.params.id);
       res.status(200).json("Users has been deleted");

   }catch(err){
       next(err);
   }
}

export const getUser = async (req,res,next)=>{
    try{
    const user = 
       await user.findById(req.params.id);
       res.status(200).json(user);
   }catch(err){
      next(err);
   }
}

export const getUsers = async (req,res,next)=>{
    
    try{
        const users = 
        await Users.find();
        res.status(200).json(users);

    }catch(err){
        next(err)
    }
}
