import {model ,Schema} from 'mongoose'


const amenitySchema = new Schema ({

    name:{
        type:String,
        required : [true,'El nombre es obligatorio'],
        trim : true 
    },
    description:{
        type :String,
        required : [true,'La descripcion es obligatoria'],
        trim : true
    },
    image:{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    }
},{
    timestamps:true // cuando se creo y actualizo algo
})

export const Amenity = model ('Amenity',amenitySchema)