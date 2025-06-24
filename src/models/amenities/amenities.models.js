import {model ,Schema} from 'mongoose'


const amenitiesSchema = new Schema ({

    name :{
        type:String,
        required : true,
        trim : true 
    },
    description:{
        type :String,
        required:true,
        trim : true
    },
    image :{
        type :Schema.Types.ObjectId,
        ref : 'Multimedia'
    }  
},{
    timestamps:true // cuando se creo y actualizo algo
})

export const Amenities = model ('Amenities',amenitiesSchema)