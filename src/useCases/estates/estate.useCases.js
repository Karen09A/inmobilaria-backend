//CRUD  estates use cases

import { isValidObjectId } from "mongoose";
import { Estate } from "../../models/index.js";
import { StatusHttp } from "../../lib/status.http.js";

// Create New estate

async function createEstate(estateData) {
    const {name} = estateData 
    //Validar si existe una propiedad con ese nombre

    const existingEstate = await Estate.findOne({name})

    if(existingEstate){
        throw new StatusHttp(`Ya existe esta propiedad con el nombre ${name}`,400)
    }

    // Crea una nueva propiedad
    const newEstate = await Estate.create(estateData)
    return newEstate
}

// Obtener todas las estates

async function getAllEstates() {

    const estates = await Estate.find({}) //Encuentra todos los documentos de la coleccion Estate
    return estates
    
}

//Get an estate by ID or Slug

async function getEstateByIdOrSlug(identifer) {
    const isObjectId = isValidObjectId(identifer)

    let estate // sE REASIGNA POR ESO LET
    if(isObjectId){
        estate = await Estate.findById(identifer)// Busca por Id
    }else{
        estate = await Estate.findOne({ slug : identifer})// Busca por slug
    }
    //Validar si la propiedad existe
    if(!estate){
       // throw new Error(`No se encontro la propiedad con el identificador${identifer}`,404)
       throw new StatusHttp(`No se encontro la propiedad con el identificador ${identifer}`,404)
    }
    return estate
}

/** Update
 * @param {*} identifer - Puede ser un ID MONGO DB o un slug
 * @param {*} newData  -    Objeto con los nuevos datos de la propiedad
 * @returns {Promise<Estate>} -- Devuelve una promesa que resuleve a un objeto Estate actualizado
 * 
 *  */ 

async function updateEstate(identifer, newData) {
    const isObjectId = isValidObjectId(identifer)
    let updateEstate
    if(isObjectId){
        updateEstate = await Estate.findByIdAndUpdate(identifer,newData,{new :true})//Actualiza por ID    
    }else{
        updateEstate = await Estate.findOneAndUpdate({slug : identifer},newData,{new :true})
    }
    //Validar si la propiedad existe
    if(!updateEstate){
        throw new StatusHttp(`No se encontro la propiedad con el identificador ${identifer}`)
    }
    return updateEstate 
}


// Delate

async function delateEstate(identifer) {
    const isObjectId = isValidObjectId(identifer)

    let delateEstate // sE REASIGNA POR ESO LET
    if(isObjectId){
        delateEstate = await Estate.findByIdAndDelete(identifer)// Busca por Id
    }else{
        delateEstate = await Estate.findOneAndDelete({ slug : identifer})// Busca por slug
    }
    //Validar si la propiedad existe
    if(!delateEstate){
        throw new StatusHttp(`No se encontro la propiedad con el identificador ${identifer}`)
    }
    return delateEstate
}


export{
    createEstate,
    getAllEstates,
    getEstateByIdOrSlug,
    updateEstate,
    delateEstate
}