import {model ,Schema} from 'mongoose'


const amenitiesSchema = new Schema ({

    name :{
        type:String,
        required : true,
        trim : true 
    },
    description:{
        type :String,
        trim : true
    },
    image :{
        type :String,
        trim : true
    },
    estate: {
    type: Schema.Types.ObjectId,
    ref: 'Estate'
    }// preguntar es obligatorio referenciar este aqui o mejor na
},{
    timestamps:true // cuando se creo y actualizo algo
})

export const Amenities = model ('Amenities',amenitiesSchema)