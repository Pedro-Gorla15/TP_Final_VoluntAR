import express from 'express'
import ControladorConexion from '../controlador/conexion.js'

class RouterConexion {
    constructor() {
        this.router = express.Router()
        this.controlador = new ControladorConexion()
    }

    start() {
        this.router.get('/:idAnciano/:idVoluntario', this.controlador.obtenerConexion)
        this.router.get('/', this.controlador.listarConexiones)
        return this.router
    }
}

export default RouterConexion
