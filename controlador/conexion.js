import ServicioConexion from '../servicio/conexion.js'

class ControladorConexion {
    constructor() {
        this.servicio = new ServicioConexion()
    }

    obtenerConexion = async (req, res) => {
        try {
            const { idAnciano, idVoluntario } = req.params
            const conexion = await this.servicio.obtenerConexion(idAnciano, idVoluntario)
            res.json(conexion)
        } catch (error) {
            if (error.message === 'Uno o ambos IDs no existen en la base de datos') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    }
}

export default ControladorConexion
