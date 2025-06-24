import { model, Schema } from "mongoose";

const bannerSchema = new Schema({
    title:{
        type: String,
        required : [true,'El titulo es obligatorio'],
        trim : true
    },
    text:{
        type : String,
        required: [true, 'El texto es obligatorio'],
        trim : true
    },
    image:{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    },
    linkCta:{
        type :String,
        trim: true
    },
    estateId:{
        type :Schema.Types.ObjectId,
        ref : 'Estate',
        required: [true, 'El estateId es obligatorio'],
    },
     image :{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    }  
},{
    timestamps : true
})

export const Banner = model ('Banner',bannerSchema)