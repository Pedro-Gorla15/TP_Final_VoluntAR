import ModelFactory from '../model/DAOs/entidadesFactory.js'
import config from '../config.js'
import { validar } from './validaciones/voluntarios.js'

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
        const res = validar(voluntario)
        if (res.result) {
            voluntario.habilidades = voluntario.habilidades.split(',').map(habilidad => habilidad.trim())
            voluntario.edad = Number(voluntario.edad)
            const voluntarioGuardado = await this.model.guardarVoluntario(voluntario)
            return voluntarioGuardado
        } else {
            throw new Error(res.error)
        }
    }

    actualizarVoluntario = async (id, voluntario) => {
        const res = validar(voluntario)
        if (res.result) {
            voluntario.habilidades = voluntario.habilidades.split(',').map(habilidad => habilidad.trim())
            const voluntarioActualizado = await this.model.actualizarVoluntario(id, voluntario)
            return voluntarioActualizado
        } else {
            throw new Error(res.error)
        }
    }

    borrarVoluntario = async id => {
        const voluntarioEliminado = await this.model.borrarVoluntario(id)
        return voluntarioEliminado
    }
}

export default ServicioVoluntarios
