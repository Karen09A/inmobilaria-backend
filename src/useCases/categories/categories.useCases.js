import { StatusHttp } from "../../lib/statushttp.js";
import { Category } from '../../models/index.js'

// Crear una categoría
async function createCategory (categoryData) {
  const { name } = categoryData
  const categoryFound = await Category.findOne({ name })
  if (categoryFound) {
    throw new StatusHttp(`Ya existe una categoría con el nombre ${name}`, 400)
  }
  const newCategory = await Category.create(categoryData)
  return newCategory
}

// Obtener todas las categorías
async function getAllCategories () {
  const categories = await Category.find({})
  return categories
}

// Obtener una categoría por ID
async function getCategoryById (id) {
  const category = await Category.findById(id)
  if (!category) {
    throw new StatusHttp(`No se encontró la categoría con el ID: ${id}`, 404)
  }
  return category
}

// Actualizar una categoría
async function updateCategory (id, newData) {
  const updatedCategory = await Category.findByIdAndUpdate(id, newData, { new: true })
  if (!updatedCategory) {
    throw new StatusHttp(`No se encontró la categoría con el ID: ${id}`, 404)
  }
  return updatedCategory
}
// Eliminar una categoría
async function deleteCategory (id) {
  const deletedCategory = await Category.findByIdAndDelete(id)
  if (!deletedCategory) {
    throw new StatusHttp(`No se encontró la categoría con el ID: ${id}`, 404)
  }
  return deletedCategory
}
// Exportar las funciones
export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}