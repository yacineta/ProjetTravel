import express from "express";
import Hotel from "../models/Hotel.js";
import { creatError } from "../utils/error.js";
import {countByCity,countByType, createHotel, deleteHotel, getHotel, getHotels, updatedHotel,getHotelRooms}   from "../controlles/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// 
router.post("/",verifyAdmin, createHotel );
// 
router.put("/:id",verifyAdmin, updatedHotel);




router.delete("/find/:id",verifyAdmin,deleteHotel);

router.get("/:id", getHotel);

router.get("/", getHotels);

router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);


export default router