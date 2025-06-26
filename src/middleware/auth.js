//Middleware para verificar el token de Autenticación
import { verifyToken } from "../lib/jwt.js"
import { StatusHttp } from "../lib/statushttp.js"
import { User } from "../models/index.js"

export const authenticate = async(request, response, next) => {
    try{
        const authHeader = request.headers.authorization
        const token = authHeader && authHeader.split(' ')[1] //
        /** Extrae el token del encabezado Authorization, si existe.
         * authHeader tiene el formato: "Bearer <token>"
         *  .split(' ') divide la cadena en ["Bearer", "<token>"]
         *  [1] obtiene solo el token (la segunda parte) */

        if (!token) {
            throw new StatusHttp('Token de autorizacion no proporcionado', 401)
        }
        // Verificar el token con JWT
        const decoded = verifyToken(token)

        // Verificar usuario que existe y este activo
        const userFound = await User.findById(decoded.userId).select('+active')
        if(!userFound || !userFound.active){
            throw new StatusHttp('Usuario no encontrado o inactivo', 401)
        }

        // Agregamos el usuario decodificado al request para su uso posterior
        request.user = {
            userId: userFound._id,
            role: userFound.role
        }

        next()
    }catch(error){
        next(error)
    }
}


// Middleware para verificar roles de usuario
export const authorize = (...roles) => {
  return (request, response, next) => {
    if (!request.user || !roles.includes(request.user.role)) {
      return next(new StatusHttp('No tienes permisos para acceder a este recurso', 403))
    }
    next()
  }
}