import { model, Schema } from "mongoose";

const characteristicsSchema = new Schema ({
    name :{
        type :String ,
        required: true,
        trim :true
    },
    description :{
        type :String ,
        trim: true
    },
     image :{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    }  
},{
    timestamps : true
})

export const Characteristics = model ('Characteristics',characteristicsSchema)