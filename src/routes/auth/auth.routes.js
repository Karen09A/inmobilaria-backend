import express from 'express'
import {register, login} from '../../useCases/auth/auth.useCases.js'
// import { authenticate, authorize  } from '../../middleware/auth.js'

const router = express.Router()

// POST /register
router.post('/register', async( request, response, next) => {
    try {
        const user = await register(request.body)
        response.status(200).json({
            success: true,
            message: 'Registro correcto',
            data: user
        })
    } catch (error) {
        next(error)
    }
})

// POST /login
router.post('/login', async( request, response, next) => {
    try {
        const user = await login(request.body)
        response.status(200).json({
            success: true,
            message: 'Acceso Correcto',
            data: user
        })
    } catch (error) {
        next(error)
    }
})

// GET /list

//GET
// router.get('/list', authenticate, authorize('admin'), async (request, response, next) => {
//     try{
//         console.log('User authenticated:',request.user)
//         const user = await getAllUsers()
//         response.status(200).json({
//             success : true,
//             message:'Properties retrieved sucessfully',
//             data : user
//         })
//     }catch(error){
//         next(error)
//     }
// })

export default router