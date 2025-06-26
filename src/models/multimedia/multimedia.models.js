import { model , Schema } from "mongoose";

const multimediaSchema = new Schema ({
    type:{ // Duda no es palabra reservada ?
        type :String,
        required : [true,'El type es obligatorio'],
        trim : true
    },
    url:{
        type : String,
        trim : true
    },
    key:{
        type: String,
        trim : true
    },
    name: {
        type :String,
        required : [true,'El nombre es obligatorio'],
        trim: true
    },
    description:{
        type : String,
        required : [true,'La descripcion es obligatoria'],
        trim: true
    }
},{
    timestamps:true // cuando se creo y actualizo algo
})

export const Multimedia = model ('Multimedia', multimediaSchema)