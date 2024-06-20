import ModelFactory from '../model/DAOs/entidadesFactory.js'
import config from '../config.js'

class ServicioConexion {
    constructor() {
        this.modelAncianos = ModelFactory.get(config.MODO_PERSISTENCIA, 'ancianos')
        this.modelVoluntarios = ModelFactory.get(config.MODO_PERSISTENCIA, 'voluntarios')
        this.modelConexiones = ModelFactory.get(config.MODO_PERSISTENCIA, 'conexiones')
    }

    obtenerConexion = async (idAnciano, idVoluntario) => {
        const anciano = await this.modelAncianos.obtenerAnciano(idAnciano)
        const voluntario = await this.modelVoluntarios.obtenerVoluntario(idVoluntario)

        if (!anciano || !voluntario) {
            throw new Error('Uno o ambos IDs no existen en la base de datos')
        }

        const conexion = { anciano, voluntario }
        await this.modelConexiones.guardarConexion(conexion)
        return conexion
    }

    obtenerConexiones = async () => {
        return await this.modelConexiones.obtenerConexiones()
    }
}

export default ServicioConexion
