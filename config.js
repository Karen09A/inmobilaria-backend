import * as dotend from 'dotenv'

dotend.config({path:'.env'})

export const config = {
    port : process.env.PORT || 4000,
    dbUri : process.env.DB_URI || 'mongodb://localhost:27017/realstate',
    jwtSecret : process.env.JWT_SECRET || 'your_jwt_secret'
}