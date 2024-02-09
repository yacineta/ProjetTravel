import express from "express";
import Room from "../models/Room.js";

import { createRoom,
     deleteRoom,
     getRoom,
     getRooms, 
     updatedRoom,
     updatedRoomAvailbility ,
     } from "../controlles/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
router.post("/",verifyAdmin,createRoom)


router.put("/:id",verifyAdmin, updatedRoom);
router.put("availabity/:id", updatedRoomAvailbility );

 


router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);



router.get("/:id", getRoom);
router.get("/", getRooms);



export default router