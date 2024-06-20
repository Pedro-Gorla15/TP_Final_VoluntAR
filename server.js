import express from 'express'
import RouterVoluntarios from './router/voluntarios.js'
import RouterAncianos from './router/ancianos.js'
import RouterConexion from './router/conexion.js'
import CnxMongoDB from './model/DBMongo.js'
import config from './config.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Restful : voluntarios y ancianos
app.use('/api/voluntarios', new RouterVoluntarios().start())
app.use('/api/ancianos', new RouterAncianos().start())
app.use('/api/conexion', new RouterConexion().start())

if (config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor VoluntAR escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
