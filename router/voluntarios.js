import express from 'express'
import ControladorVoluntarios from '../controlador/voluntarios.js'

class RouterVoluntarios {
    constructor() {
        this.router = express.Router()
        this.controlador = new ControladorVoluntarios()
    }

    start() {
        this.router.get('/:id?', this.controlador.obtenerVoluntarios)
        this.router.post('/', this.controlador.guardarVoluntario)
        this.router.put('/:id', this.controlador.actualizarVoluntario)
        this.router.delete('/:id', this.controlador.borrarVoluntario)

        return this.router
    }
}

export default RouterVoluntarios
