import { StatusHttp } from "../../lib/status.http.js";
import { Banner } from '../../models/index.js'

async function createBanner (bannerData, file) {
//   if (!file) {
//     throw new status.http('File is required', 400)
//   }
  const { title } = bannerData
  const bannerFound = await Banner.findOne({ title })
  if (bannerFound) {
    throw new StatusHttp('Banner with this title already exists')
  }
  // Hacer lalógica para gestionar el archivo multimedia
  if (file) {
    // Aquí podrías agregar la lógica para manejar el archivo multimedia, como guardarlo en un servicio de almacenamiento
    // y luego asignar su ID al campo `image` del bannerData.
    // Por ejemplo:
    // const multimedia = await Multimedia.create({ file: file.path })
    // bannerData.image = multimedia._id
  }
  const newBanner = await Banner.create(bannerData)
  return newBanner
}

// Obtener todos los banners
async function getAllBanners () {
  const banners = await Banner.find({}).populate(['image', 'estateId']) // Asegúrate de que el campo 'image' esté poblado con la URL del multimedia
  return banners
}

// Obtener un banner por ID
async function getBannerById (id) {
  const banner = await Banner.findById(id).populate(['image', 'estateId'])
  if (!banner) {
    throw new StatusHttp(`Banner with ID ${id} not found`, 404)
  }
  return banner
}

// Actualizar un banner
async function updateBanner (id, newBannerData, file) {
  const banner = await Banner.findById(id)
  if (!banner) {
    throw new StatusHttp(`Banner with ID ${id} not found`, 404)
  }
  if (file) {
    // Aquí podrías agregar la lógica para manejar el archivo multimedia, como guardarlo en un servicio de almacenamiento
    // y luego asignar su ID al campo `image` del newBannerData.
    // Por ejemplo:
    // const multimedia = await Multimedia.create({ file: file.path })
    // newBannerData.image = multimedia._id
  }
  const updatedBanner = await Banner.findByIdAndUpdate(id, newBannerData, { new: true }).populate('image', 'url')
  if (!updatedBanner) {
    throw new StatusHttp(`Banner with ID ${id} not found`, 404)
  }
  return updatedBanner
}

// Eliminar un banner
async function deleteBanner (id) {
  const banner = await Banner.findByIdAndDelete(id)
  if (!banner) {
    throw new StatusHttp(`Banner with ID ${id} not found`, 404)
  }
  return banner
}

// Exportar las funciones
export {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner
}