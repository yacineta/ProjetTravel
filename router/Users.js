import express from "express";
import { deleteUser, getUser, getUsers, updatedUser } from "../controlles/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello uset,You are logged in")
// });
// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello uset,You are logged in and you can delete your account")
// });

// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin,You are logged in and you can delete all account")
// });
    
router.put("/:id",verifyUser, updatedUser);




router.delete("/:id",verifyUser,deleteUser);

router.get("/:id",verifyUser, getUser);

router.get("/", verifyUser,getUsers);

export default router