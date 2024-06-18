import ModelFactory from '../model/DAOs/entidadesFactory.js'
import config from '../config.js'
import { validar } from './validaciones/ancianos.js'

class ServicioAncianos {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA, 'ancianos')
    }

    obtenerAncianos = async id => {
        if (id) {
            const anciano = await this.model.obtenerAnciano(id)
            return anciano
        } else {
            const ancianos = await this.model.obtenerAncianos()
            return ancianos
        }
    }

    guardarAnciano = async anciano => {
        const res = validar(anciano)
        if (res.result) {
            anciano.edad = Number(anciano.edad)
            const ancianoGuardado = await this.model.guardarAnciano(anciano)
            return ancianoGuardado
        } else {
            console.log(res.error)
            throw res.error
        }
    }

    actualizarAnciano = async (id, anciano) => {
        anciano.edad = Number(anciano.edad)
        const ancianoActualizado = await this.model.actualizarAnciano(id, anciano)
        return ancianoActualizado
    }

    borrarAnciano = async id => {
        const ancianoEliminado = await this.model.borrarAnciano(id)
        return ancianoEliminado
    }
}

export default ServicioAncianos
