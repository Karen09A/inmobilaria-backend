import { model , Schema } from "mongoose";

const multimediaSchema = new Schema ({
    type: { // Duda no es palabra reservada ?
        type :String,
        trim : true
    },
    url :{
        type : String,
        trim : true
    },
    key :{
        type: String,
        trim : true
    },
    name: {
        type :String,
        trim: true
    },
    description :{
        type : String,
        trim: true
    }
},{
    timestamps:true // cuando se creo y actualizo algo
})

export const Multimedia = model ('Multimedia', multimediaSchema)