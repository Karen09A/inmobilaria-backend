import express from 'express'
//import { createEstate, getAllEstates, getEstateByIdOrSlug, updateEstate ,delateEstate } from '../../useCases/estates/estate.useCases.js'
import { Estate } from '../../useCases/index.js'
import { authenticate, authorize  } from '../../middleware/auth.js'

const router = express.Router()

// POST / estates

router.post('/', authenticate, authorize('admin'), async (request, response, next) => {
    try{
        const body = request.body
        const estate = await Estate.createEstate(body)
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
router.get('/', authenticate, authorize('admin', 'user'), async (request, response, next) => {
    try{
        console.log('User authenticated:',request.user)
        const estates = await Estate.getAllEstates()
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
        const estate = await Estate.getEstateByIdOrSlug(identifer)
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
        const estate = await Estate.updateEstate(identifer,body)
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
        const estate = await Estate.delateEstate(identifer)
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