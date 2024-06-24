import express from 'express'
import ControladorVoluntarios from '../controlador/voluntarios.js'

class RouterVoluntarios {
    constructor(upload) {
        this.router = express.Router();
        this.controlador = new ControladorVoluntarios();
        this.upload = upload;
    }

    start() {
        this.router.get('/:id?', this.controlador.obtenerVoluntarios)
        this.router.post('/', this.upload.single('fotoPerfil'), this.controlador.guardarVoluntario)
        this.router.put('/:id', this.upload.single('fotoPerfil'), this.controlador.actualizarVoluntario)
        this.router.delete('/:id', this.controlador.borrarVoluntario)

        return this.router
    }
}

export default RouterVoluntarios
