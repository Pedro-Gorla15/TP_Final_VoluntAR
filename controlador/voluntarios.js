import ServicioVoluntarios from '../servicio/voluntarios.js'

class ControladorVoluntarios {

    constructor() {
        this.servicio = new ServicioVoluntarios()
    }

    obtenerVoluntarios = async (req, res) => {
        try {
            const { id } = req.params
            const voluntarios = await this.servicio.obtenerVoluntarios(id)
            res.json(voluntarios)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    guardarVoluntario = async (req, res) => {
        try {
            const voluntario = req.body
            const voluntarioGuardado = await this.servicio.guardarVoluntario(voluntario)
            res.json(voluntarioGuardado)
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    actualizarVoluntario = async (req, res) => {
        try {
            const { id } = req.params
            const voluntario = req.body
            const voluntarioActualizado = await this.servicio.actualizarVoluntario(id, voluntario)
            res.json(voluntarioActualizado)
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    borrarVoluntario = async (req, res) => {
        try {
            const { id } = req.params
            const voluntarioEliminado = await this.servicio.borrarVoluntario(id)
            res.json(voluntarioEliminado)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default ControladorVoluntarios
