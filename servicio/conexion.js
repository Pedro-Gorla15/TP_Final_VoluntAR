import ModelFactory from '../model/DAOs/entidadesFactory.js'
import config from '../config.js'

class ServicioConexion {
    constructor() {
        this.modelAncianos = ModelFactory.get(config.MODO_PERSISTENCIA, 'ancianos')
        this.modelVoluntarios = ModelFactory.get(config.MODO_PERSISTENCIA, 'voluntarios')
    }

    obtenerConexion = async (idAnciano, idVoluntario) => {
        const anciano = await this.modelAncianos.obtenerAnciano(idAnciano)
        const voluntario = await this.modelVoluntarios.obtenerVoluntario(idVoluntario)

        if (!anciano || !voluntario) {
            throw new Error('Uno o ambos IDs no existen en la base de datos')
        }

        return { anciano, voluntario }
    }
}

export default ServicioConexion
