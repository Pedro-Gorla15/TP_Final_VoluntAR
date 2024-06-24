import express from 'express'
import ControladorAncianos from '../controlador/ancianos.js'

class RouterAncianos {
    constructor(upload) {
        this.router = express.Router();
        this.controlador = new ControladorAncianos();
        this.upload = upload;
    }

    start() {
        this.router.get('/:id?', this.controlador.obtenerAncianos)
        this.router.post('/', this.upload.single('fotoPerfil'), this.controlador.guardarAnciano)
        this.router.put('/:id', this.upload.single('fotoPerfil'), this.controlador.actualizarAnciano)
        this.router.delete('/:id', this.controlador.borrarAnciano)

        return this.router
    }
}

export default RouterAncianos
