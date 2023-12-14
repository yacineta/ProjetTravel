import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true,
        
    },
    price:{
        type: Number,
        require:true,
       
    },
    maxPeople:{
        type: Number,
        require:true,
       
    },
    desc:{
        type: String,
        require:true
    },
   
    roomNumbers:[{Number:Number,unavailaDates:{type: [Date]}}],
   
},{timestamps: true});

// [
//     {Number:101,unavailaDates:[01.05.2022,02.05.2022]}
//     {Number:102,unavailaDates:[]}
//     {Number:103,unavailaDates:[]}
//     {Number:104,unavailaDates:[]}
//     {Number:105,unavailaDates:[]}
   
// ]


export default mongoose.model("Room",RoomSchema)