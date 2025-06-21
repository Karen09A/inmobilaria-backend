import { StatusHttp } from '../../lib/status.http.js'
import { Characteristic } from '../../models/index.js'

// Crear una característica
async function createCharacteristic (data) {
  // TODO: Validar la subidad de imagen para características
  const { name } = data
  // Validar si existe el nombre
  const characteristicFound = await Characteristic.findOne({ name })
  if (characteristicFound) {
    throw new StatusHttp('Ya existe una característica con ese nombre', 400)
  }
  // Crear la característica
  const characteristic = await Characteristic.create(data)
  return characteristic
}

// Obtener todas las características
async function getAllCharacteristics () {
  const characteristics = await Characteristic.find({}).populate('image')
  return characteristics
}

// Obtener una característica por ID
async function getCharacteristicById (id) {
  const characteristic = await Characteristic.findById(id).populate('image')
  if (!characteristic) {
    throw new StatusHttp('No se encontró la característica', 404)
  }
  return characteristic
}

// Actualizar una característica
async function updateCharacteristic (id, newData) {
  const characteristic = await Characteristic.findByIdAndUpdate(id, newData, {
    new: true
  }).populate('image')
  if (!characteristic) {
    throw new StatusHttp('No se encontró la característica', 404)
  }
  return characteristic
}

// Eliminar una característica
async function deleteCharacteristic (id) {
  const characteristic = await Characteristic.findByIdAndDelete(id)
  if (!characteristic) {
    throw new StatusHttp('No se encontró la característica', 404)
  }
  return characteristic
}
// Exportar las funciones
export {
  createCharacteristic, deleteCharacteristic, getAllCharacteristics,
  getCharacteristicById,
  updateCharacteristic
}