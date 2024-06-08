import ServicioVoluntarios from '../servicio/voluntarios.js'

class ControladorVoluntarios {

    constructor() {
        this.servicio = new ServicioVoluntarios()
    }

    obtenerVoluntarios = async (req, res) => {
        const { id } = req.params
        const voluntarios = await this.servicio.obtenerVoluntarios(id)
        res.json(voluntarios)
    }

    guardarVoluntario = async (req, res) => {
        const voluntario = req.body
        const voluntarioGuardado = await this.servicio.guardarVoluntario(voluntario)
        res.json(voluntarioGuardado)
    }

    actualizarVoluntario = async (req, res) => {
        const { id } = req.params
        const voluntario = req.body
        const voluntarioActualizado = await this.servicio.actualizarVoluntario(id, voluntario)
        res.json(voluntarioActualizado)
    }

    borrarVoluntario = async (req, res) => {
        const { id } = req.params
        const voluntarioEliminado = await this.servicio.borrarVoluntario(id)
        res.json(voluntarioEliminado)
    }
}

export default ControladorVoluntarios
