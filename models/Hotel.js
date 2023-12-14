import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    type:{
        type: String,
        require:true
    },
    city:{
        type: String,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    distance:{
        type: String,
        require:true
    },
    photos:{
        type: [String],
       
    },
    titel:{
        type: String,
        require:true
    },
    rating:{
        type: Number,
        min:0,
        max:5,

    },
    rooms:{
        type: [String],
        
    },
    desc:{
        type: Number,
        require:true
    },
    fratured:{
        type: Boolean,
        default:false,
    },
   
});


export default mongoose.model("Hotel",HotelSchema)