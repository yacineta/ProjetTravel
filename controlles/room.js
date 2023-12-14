import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"




export const createRoom = async (req,res,next) =>{
    const HotelId = req.prams.HotelI;
    const newRoom = new Room(req.body)
    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(HotelId,
                {$push : {rooms: savedRoom._id}});
        }catch(err){
             next(err);
        }
        res.status(200).json(savedRoom);
       
    }catch(err){
        next(err);
    }

};


export const updatedRoom = async (req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
            );
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    }
}
export const updatedRoomAvailbility = async (req,res,next)=>{
    try{
        await Room.updateOne({"roomNumbers._id":res.prams.id},
        {
            $push:{
                "roomNumbers.$.unavailableDates": req.body.dates
            },


        }
        );
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    }
}


export const deleteRoom = async (req,res,next)=>{
    const HotelId = req.prams.HotelI;
    
    try{
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(HotelId,
                {$pull : {rooms: req.params.id}});
        }catch(err){
             next(err);
        }
       res.status(200).json("Hoel has been deleted");
   }catch(err){
       next(err);
   }
}

export const getRoom = async (req,res,next)=>{
    try{
    const Room = 
       await Room.findById(req.params.id);
       res.status(200).json(Room);
   }catch(err){
      next(err);
   }
}

export const getRooms = async (req,res,next)=>{
    
    try{
        const Rooms = 
        await Rooms.find();
        res.status(200).json(Rooms);

    }catch(err){
        next(err)
    }
}
