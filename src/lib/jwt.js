import jwt  from 'jsonwebtoken'
import { config } from '../../config.js';

function generateToken(payload, expiresIn = config.jwtExpired_in) {
    return jwt.sign(payload, config.jwtSecret, {expiresIn})
}

function verifyToken(token) {
    return jwt.verify(token, config.jwtSecret)
}

export {
    generateToken,
    verifyToken
}