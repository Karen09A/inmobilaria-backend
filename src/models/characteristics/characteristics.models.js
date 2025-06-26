import { model, Schema } from "mongoose";

const characteristicSchema = new Schema ({
    name:{
        type :String ,
        required : [true,'El nombre es obligatorio'],
        trim :true
    },
    description:{
        type :String ,
        required : [true,'La descripcion es obligatoria'],
        trim: true
    },
    image:{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    }
},{
    timestamps : true
})

export const Characteristic = model ('Characteristic',characteristicSchema)