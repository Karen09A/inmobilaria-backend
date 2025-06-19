import exporess from 'express'
import { Category } from '../../useCases/index.js'

const router = exporess.Router()

// POST /categories
router.post('/', async (request, response, next) => {
  try {
    const createdCategories = await Category.createCategory(request.body)
    response.status(201).json({
      success: true,
      message: 'Categoría creada exitosamente',
      data: createdCategories
    })
  } catch (error) {
    next(error)
  }
})

// GET /categories
router.get('/', async (request, response, next) => {
  try {
    const allCategories = await Category.getAllCategories()
    response.status(200).json({
      success: true,
      message: 'Categorías obtenidas exitosamente',
      data: allCategories
    })
  } catch (error) {
    next(error)
  }
})

// GET /categories/:id
router.get('/:id', async (request, response, next) => {
  try {
    const category = await Category.getCategoryById(request.params.id)
    response.status(200).json({
      success: true,
      message: 'Categoría obtenida exitosamente',
      data: category
    })
  } catch (error) {
    next(error)
  }
})

// PATCH /categories/:id
router.patch('/:id', async (request, response, next) => {
  try {
    const updatedCategory = await Category.updateCategory(request.params.id, request.body)
    response.status(200).json({
      success: true,
      message: 'Categoría actualizada exitosamente',
      data: updatedCategory
    })
  } catch (error) {
    next(error)
  }
})

// DELETE /categories/:id
router.delete('/:id', async (request, response, next) => {
  try {
    const deletedCategory = await Category.deleteCategory(request.params.id)
    response.status(200).json({
      success: true,
      message: 'Categoría eliminada exitosamente',
      data: deletedCategory
    })
  } catch (error) {
    next(error)
  }
})

// Exportar el router
export default router