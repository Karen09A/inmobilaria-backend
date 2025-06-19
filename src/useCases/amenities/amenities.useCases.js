//  CRUD amenity use Cases casos de usos pues


import { Amenity } from "../../models/index.js";
import { StatusHttp } from "../../lib/status.http.js";
// Leer mas de query mongoose

// Create a New Amenity

async function createAmenity (amenityData) {
  const { name } = amenityData
  const existingAmenity = await Amenity.findOne({ name })
  if (existingAmenity) {
    throw new StatusHttp(`Ya existe una amenidad con el nombre ${name}`, 400)
  }
  const newAmenity = await Amenity.create(amenityData)
  return newAmenity
}

// Obtener todas las amenidades
async function getAllAmenity () {
  const amenities = await Amenity.find({})
  return amenities
}

// Obtener una amenidad por ID
async function getAmenityById (id) {
  const amenity = await Amenity.findById(id)
  if (!amenity) {
    throw new StatusHttp(`No se encontró la amenidad con el ID: ${id}`, 404)
  }
  return amenity
}

// Actualizar una amenidad
async function updateAmenity (id, newData) {
  const updatedAmenity = await Amenity.findByIdAndUpdate(id, newData, { new: true })
  if (!updatedAmenity) {
    throw new StatusHttp(`No se encontró la amenidad con el ID: ${id}`, 404)
  }
  return updatedAmenity
}

// Eliminar una amenidad
async function deleteAmenity (id) {
  const deletedAmenity = await Amenity.findByIdAndDelete(id)
  if (!deletedAmenity) {
    throw new StatusHttp(`No se encontró la amenidad con el ID: ${id}`, 404)
  }
  return deletedAmenity
}
// Exportar las funciones
export {
  createAmenity,
  getAllAmenity,
  getAmenityById,
  updateAmenity,
  deleteAmenity
}