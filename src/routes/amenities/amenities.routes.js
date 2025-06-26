import express from 'express'

import { Amenity } from '../../useCases/index.js'

const router = express.Router()

// POST / amenities

router.post('/',async (request, response , next)=>{
    try{
        const amenity = await Amenity.createAmenity(request.body)
        response.status(201).json({
            success : true,
            message:'Amenidad created sucessfully',
            data : amenity
        })
    }catch(error){
        next(error)
    }
})

//GET

router.get('/',async (request, response , next)=>{
    try{
        const amenities = await Amenity.getAllAmenity()
        response.status(200).json({
            success : true,
            message:'Amenities retrieved sucessfully',
            data : amenities
        })
    }catch(error){
        next(error)
    }
})

//GET amenities/:id

router.get('/:identifer',async (request, response , next)=>{
    try{
        const {identifer} = request.params
        const amenity = await Amenity.getAmenityByIdOrSlug(identifer)
        response.status(200).json({
            success : true,
            message:'Amenidad encontrada correctamente',
            data : amenity
        })
    }catch(error){
        next(error)
    }
})

//PATCH Amenities/:id

router.patch('/:identifer',async (request, response , next)=>{
    try{
        const {identifer} = request.params
        const body = request.body
        const amenity = await Amenity.updateAmenity(identifer,body)
        response.status(202).json({
            success : true,
            message:'Amenidad actualizada correctamente',
            data : amenity
        })
    }catch(error){
        next(error)
    }
})

//DELATE  Amenitys/:id

router.delete('/:identifer',async (request, response , next)=>{
    try{
        const {identifer} = request.params
        const amenity = await Amenity.delateAmenity(identifer)
        response.status(200).json({
            success : true,
            message:'Propiedad borrada correctamente',
            data : amenity
        })
    }catch(error){
        next(error)
    }
})

export default router