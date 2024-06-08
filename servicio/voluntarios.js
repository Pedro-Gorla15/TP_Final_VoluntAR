import ModelFactory from '../model/DAOs/entidadesFactory.js'
import config from '../config.js'

class ServicioVoluntarios {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA, 'voluntarios')
    }

    obtenerVoluntarios = async id => {
        if (id) {
            const voluntario = await this.model.obtenerVoluntario(id)
            return voluntario
        } else {
            const voluntarios = await this.model.obtenerVoluntarios()
            return voluntarios
        }
    }

    guardarVoluntario = async voluntario => {
        const voluntarioGuardado = await this.model.guardarVoluntario(voluntario)
        return voluntarioGuardado
    }

    actualizarVoluntario = async (id, voluntario) => {
        const voluntarioActualizado = await this.model.actualizarVoluntario(id, voluntario)
        return voluntarioActualizado
    }

    borrarVoluntario = async id => {
        const voluntarioEliminado = await this.model.borrarVoluntario(id)
        return voluntarioEliminado
    }
}

export default ServicioVoluntarios
