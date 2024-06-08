import express from 'express'
import ControladorAncianos from '../controlador/ancianos.js'

class RouterAncianos {
    constructor() {
        this.router = express.Router()
        this.controlador = new ControladorAncianos()
    }

    start() {
        this.router.get('/:id?', this.controlador.obtenerAncianos)
        this.router.post('/', this.controlador.guardarAnciano)
        this.router.put('/:id', this.controlador.actualizarAnciano)
        this.router.delete('/:id', this.controlador.borrarAnciano)

        return this.router
    }
}

export default RouterAncianos
