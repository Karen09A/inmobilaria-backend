import express from 'express'
import { Characteristics } from '../../useCases/index.js'

const router = express.Router()

// POST /characteristics
router.post('/', async (request, response, next) => {
  try {
    const characteristic = await Characteristics.createCharacteristic(request.body)
    response.status(201).json({
      success: true,
      message: 'Característica creada correctamente',
      data: characteristic
    })
  } catch (error) {
    next(error)
  }
})

// GET /characteristics
router.get('/', async (request, response, next) => {
  try {
    const characteristicsList = await Characteristics.getAllCharacteristics()
    response.status(200).json({
      success: true,
      message: 'Características obtenidas correctamente',
      data: characteristicsList
    })
  } catch (error) {
    next(error)
  }
})

// GET /characteristics/:id
router.get('/:id', async (request, response, next) => {
  try {
    const characteristic = await Characteristics.getCharacteristicById(request.params.id)
    response.status(200).json({
      success: true,
      message: 'Característica obtenida correctamente',
      data: characteristic
    })
  } catch (error) {
    next(error)
  }
})

// PATCH /characteristics/:id
router.patch('/:id', async (request, response, next) => {
  try {
    const updatedCharacteristic = await Characteristics.updateCharacteristic(request.params.id, request.body)
    response.status(200).json({
      success: true,
      message: 'Característica actualizada correctamente',
      data: updatedCharacteristic
    })
  } catch (error) {
    next(error)
  }
})

// DELETE /characteristics/:id
router.delete('/:id', async (request, response, next) => {
  try {
    const deletedCharacteristic = await Characteristics.deleteCharacteristic(request.params.id)
    response.status(200).json({
      success: true,
      message: 'Característica eliminada correctamente',
      data: deletedCharacteristic
    })
  } catch (error) {
    next(error)
  }
})

// Exportar el router
export default router