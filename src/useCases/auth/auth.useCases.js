import bcrypt from "../../lib/bcrypt.js"
import { generateToken } from "../../lib/jwt.js"
import { StatusHttp } from "../../lib/status.http.js"
import { User } from "../../models/index.js"


async function register(data) {
    const { email, password } = data

    const userFound = await User.findOne({ email })
    if(userFound) {
        throw new StatusHttp('Este usuario ya existe', 400)
    }

    // Validar la logngitud de la contraseña
    if(password.length < 8) {
        throw new StatusHttp('La contraseña debe contener al menos 8 carácteres', 400)
    }

    // agregar más validaciones de email, telefonos, etc...

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password)

    // Crear el usuario
    const createdUser = await User.create({...data, password: hashedPassword})

    return createdUser

}

async function login (data) {
    const { email, password } = data

    const userFound = await User.findOne({ email }).select('+password')
    if(!userFound) {
        throw new StatusHttp('¡Credenciales inválidas!', 500)
    }

    // Verificar la contraseña compare te recibe el texto plano y el hash
    const ispasswordValid = await bcrypt.compare(password, userFound.password)
    if(!ispasswordValid) {
        throw new StatusHttp('¡Credenciales inválidas!', 500)
    }

    // Generar el token la firma de cada peticion no mandar contraseñas o cosas vulnerables
    const tokenPayload = {
        userId: userFound._id,
        role: userFound.role
    }

    const token = generateToken(tokenPayload)

    return {
        token,
        user: userFound
    }
}

export {
    register,
    login
}