
import { model, Schema} from 'mongoose'

const estateSchema = new Schema({

    name:{
        type: String,
        required : true,//[true,'The name of the estate ir required'], mandar mensajes
        trim: true //Esta propiedad borra espacios inicio y final
    },
    slug :{
        type :String,
        trime : true
    },
     description:{
        type: String,
        required : true,
        trim: true
    },
     price:{
        type: Number,
        required : true,
        min: 0
    },
     currency:{
        type: String,
        required : true,
        enum: ['USD','EUR','GBP','MXN'],
        default : 'USD'
    },
    type:{
        type: String,
        required : true,
        enum: ['house','apartment','land','commercial'],
        default : 'house'
    }, 
     location_map:{
        // ESPECIFICAR LA FORMA DE GUARDAR UBICACION
       latitude :{
        type: Number,
       },
        longitude :{
        type: Number,
       },
    },
    address:{
        type: String,
        trim: true
    },
    city:{
        type: String,
        trim: true
    },
    state:{
        type: String,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    postal_code:{
        type: String,
        trim: true
    },
    neightborhood:{
        type: String,
        trim: true
    },
    status:{
        type: String,
        enum: ['available','sold','rented','house'],
        default : 'house'
    }, 
    show_address:{
        type: Boolean,
        default:true
    }, 
    related_estates: [{
        type: Schema.Types.ObjectId,
        ref :'Estate'
    }],
    images:{
        type :Schema.Types.ObjectID,
        ref:'Multimedia'
    },
    image_cover: { 
        type :Schema.Types.ObjectId,
        ref:'Multimedia'
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category' // Reference to the Category model
    },
    amenities: {
        type: Schema.Types.ObjectId,
        ref: 'Amenity'
    }
},{
    timestamps:true // cuando se creo y actualizo algo
})
export const Estate = model ('Estate',estateSchema)