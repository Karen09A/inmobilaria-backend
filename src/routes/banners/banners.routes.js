import express from 'express'
import { Banners } from '../../useCases/index.js'

const router = express.Router()

// POST /banners
router.post('/', async (request, response, next) => {
  try {
    const newBanner = await Banners.createBanner(request.body, request.file)
    response.status(201).json({
      success: true,
      message: 'Banner creado exitosamente',
      data: newBanner
    })
  } catch (error) {
    next(error)
  }
})

// GET /banners
router.get('/', async (request, response, next) => {
  try {
    const bannersList = await Banners.getAllBanners()
    response.status(200).json({
      success: true,
      message: 'Banners obtenidos exitosamente',
      data: bannersList
    })
  } catch (error) {
    next(error)
  }
})

// GET /banners/:id
router.get('/:id', async (request, response, next) => {
  try {
    const banner = await Banners.getBannerById(request.params.id)
    response.status(200).json({
      success: true,
      message: 'Banner obtenido exitosamente',
      data: banner
    })
  } catch (error) {
    next(error)
  }
})

// PATCH /banners/:id
router.patch('/:id', async (request, response, next) => {
  try {
    const updatedBanner = await Banners.updateBanner(request.params.id, request.body, request.file)
    response.status(200).json({
      success: true,
      message: 'Banner actualizado exitosamente',
      data: updatedBanner
    })
  } catch (error) {
    next(error)
  }
})

// DELETE /banners/:id
router.delete('/:id', async (request, response, next) => {
  try {
    const deletedBanner = await Banners.deleteBanner(request.params.id)
    response.status(204).json({
      success: true,
      message: 'Banner eliminado exitosamente',
      data: deletedBanner
    })
  } catch (error) {
    next(error)
  }
})

export default router