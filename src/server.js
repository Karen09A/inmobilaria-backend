// Toda configuracion necesaria 
import express from 'express'
import cors from 'cors'
import http from 'http'
// Importar las ruta de estate
import estatesRoutes from './routes/estates/estates.routes.js'
import amenitiesRoutes from './routes/amenities/amenities.routes.js'
import categoriesRoutes from './routes/categories/categories.routes.js' // Import categories routes
import bannersRoutes from './routes/banners/banners.routes.js'
import characteristicsRoutes from './routes/characteristics/characteristics.routes.js'
import authRoutes from './routes/auth/auth.routes.js'

import handlerErrors from './middleware/handleErrors.js'
const app = express()// Create an Express application
app.use(cors()) //Enable CORS for all routes
app.use(express.json()) // Enable JSON parsing for request bodies

const httpServer = http.createServer(app)// Create an HTTP server using the express app

// Routes

app.use('/estates',estatesRoutes)
app.use('/amenities',amenitiesRoutes)
app.use('/categories', categoriesRoutes) 
app.use('/banners', bannersRoutes)
app.use('/characteristics', characteristicsRoutes)
app.use('/auth', authRoutes)

//Define route for the root path

app.get('/', (req, res) => {
  res.json({
    api: 'Api de ejemplo',
    version: '1.0.0',
    usergit: 'karenGonz'
    })
})

//Middlewares -- Handler Errors

app.use(handlerErrors)

export{
  httpServer
}
