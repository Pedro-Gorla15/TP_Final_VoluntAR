import ServicioAncianos from '../servicio/ancianos.js'

class ControladorAncianos {

    constructor() {
        this.servicio = new ServicioAncianos()
    }

    obtenerAncianos = async (req, res) => {
        try {
            const { id } = req.params
            const ancianos = await this.servicio.obtenerAncianos(id)
            res.json(ancianos)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    guardarAnciano = async (req, res) => {
        try {
            const anciano = req.body
            const ancianoGuardado = await this.servicio.guardarAnciano(anciano)
            res.json(ancianoGuardado)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    actualizarAnciano = async (req, res) => {
        const { id } = req.params
        const anciano = req.body
        const ancianoActualizado = await this.servicio.actualizarAnciano(id, anciano)
        res.json(ancianoActualizado)
    }

    borrarAnciano = async (req, res) => {
        const { id } = req.params
        const ancianoEliminado = await this.servicio.borrarAnciano(id)
        res.json(ancianoEliminado)
    }
}

export default ControladorAncianos
