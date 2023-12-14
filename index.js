import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./router/Auth.js";
import usersRoute from "./router/Users.js";
import hotelsRoute from "./router/Hotels.js";
import roomsRoute from "./router/rooms.js";
// import cookieParser from "cookie_Parser";
import cors from"cors";

const app = express()
dotenv.config()

const connect = async () =>{
    try {
    await mongoose.connect(process.env.MONGO);
    console.log("yassine Tech")
  } catch (error) {
    throw error
  }

};

mongoose.connection.on("disconncted", ()=>{
   console.log("mongoDB is disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB is connected")
 })

// app.get("/", (req,res) =>{
//     res.send("hello world !")
// })

//  faute //

// app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/Auth",authRoute);
app.use("/api/Users",usersRoute);
app.use("/api/Hotels",hotelsRoute);
app.use("/api/Rooms",roomsRoute);


app.use((err,req,res,next)=>{
    //  res.send("Hello from midllwer")
  const errorStatus = err.status  || 500 
  const errorMessage = err.message  || "Something went woreng !" 

   return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
   });
   
});



app.listen(3001, ()=>{
    connect()
    console.log("Server is running of port 3516")
})