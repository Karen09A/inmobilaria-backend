import { model, Schema } from "mongoose";

const bannersSchema = new Schema({
    title :{
        type: String,
        trim : true
    },
    text: {
        type : String,
        trim : true
    },
    link_cta:{
        type :String,
        trim: true
    },
     image :{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    }  
},{
    timestamps : true
})

export const Banners = model ('Banners',bannersSchema)