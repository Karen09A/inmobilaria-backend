import express from 'express'
import { createEstate, getAllEstates, getEstateByIdOrSlug, updateEstate ,delateEstate } from '../../useCases/estates/estate.useCases.js'

const router = express.Router()

// POST / estates

router.post('/',async (request, response , next)=>{
    try{
        const body = request.body
        const estate = await createEstate(body)
        response.status(201).json({
            success : true,
            message:'Property created sucessfully',
            data : estate
        })
    }catch(error){
        next(error)
    }
})

//GET

router.get('/',async (request, response , next)=>{
    try{
        const estates = await getAllEstates()
        response.status(200).json({
            success : true,
            message:'Properties retrieved sucessfully',
            data : estates
        })
    }catch(error){
        next(error)
    }
})

//GET/estates/:id

router.get('/:identifer',async (request, response , next)=>{
    try{
        const {identifer} = request.params
        const estate = await getEstateByIdOrSlug(identifer)
        response.status(200).json({
            success : true,
            message:'Propiedad encontrada correctamente',
            data : estate
        })
    }catch(error){
        next(error)
    }
})

//PATCH/estates/:id

router.patch('/:identifer',async (request, response , next)=>{
    try{
        const {identifer} = request.params
        const body = request.body
        const estate = await updateEstate(identifer,body)
        response.status(202).json({
            success : true,
            message:'Propiedad actualizada correctamente',
            data : estate
        })
    }catch(error){
        next(error)
    }
})

//DELATE /estates/:id

router.delete('/:identifer',async (request, response , next)=>{
    try{
        const {identifer} = request.params
        const estate = await delateEstate(identifer)
        response.status(200).json({
            success : true,
            message:'Propiedad borrada correctamente',
            data : estate
        })
    }catch(error){
        next(error)
    }
})

export default router