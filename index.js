import { config } from './config.js'
import { httpServer } from './src/server.js'
import db from './src/lib/db.js'
const PORT = config.port

//Connect to the database

//Iniciar el servidor y la base de datos
async function startServer(){
  try {
    await db.connectDB()
    httpServer.listen(PORT,() => {
      console.log(`Servidor corriendo en el puerto ${PORT}`)
    })
  } catch (error) {
    console.error('Error al iniciar le servidor',error)
  }
}

startServer().catch(error => console.error('Error al iniciar la aplicacion',error))