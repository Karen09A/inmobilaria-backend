
import { Banner } from "../../models/index.js";
import { StatusHttp } from "../../lib/status.http.js";

async function createBanner(bannerData,file) {

    const {name} =bannerData
    // Validar si existe una amenidad con ese nombre

    const existingbanner =  await Banner.findOne({name})
    if (existingbanner) {
        throw new StatusHttp(`Ya existe esta amenidad con ese nombre`)        
    }
    if(file){

    }
    // Crea una nueva amenidad

    const newbanner = await Banner.create(bannerData)
    return newbanner
}

async function getAllBanners(){
    const banners = await Banner.find({}).populate ('image','url')
    return banners
}

async function updateAmenity(identifer, newData ,file) {
    const isObjectId = isValidObjectId(identifer)
    let updateAmenity
    if(isObjectId){
        updateAmenity = await Amenity.findByIdAndUpdate(identifer,newData,{new :true})//Actualiza por ID    
    }else{
        updateAmenity = await Amenity.findOneAndUpdate({slug : identifer},newData,{new :true})
    }
    //Validar si la propiedad existe
    if(!updateAmenity){
        throw new StatusHttp(`No se encontro la amenidad con el identificador ${identifer}`)
    }
    return updateAmenity 
}