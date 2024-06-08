class VoluntariosMem {
    #voluntarios = []

    constructor() {
        this.#voluntarios = [
            { id: '1', nombre: 'Pedro', edad: 25, direccion: 'Calle A', telefono: '123456789', habilidades: ['compras', 'limpieza'] },
            { id: '2', nombre: 'Juan', edad: 30, direccion: 'Calle B', telefono: '987654321', habilidades: ['acompañamiento', 'cuidado'] }
        ]
    }

    obtenerVoluntarios = async () => this.#voluntarios

    obtenerVoluntario = async id => {
        const voluntario = this.#voluntarios.find(v => v.id === id)
        return voluntario || {}
    }

    guardarVoluntario = async voluntario => {
        const id = String(parseInt(this.#voluntarios[this.#voluntarios.length - 1]?.id || 0) + 1)
        const voluntarioConId = { id, ...voluntario }
        this.#voluntarios.push(voluntarioConId)
        return voluntarioConId
    }

    actualizarVoluntario = async (id, voluntario) => {
        const index = this.#voluntarios.findIndex(voluntario => voluntario.id === id)
        if (index !== -1) {
            const voluntarioAnt = this.#voluntarios[index]
            const voluntarioAct = { ...voluntarioAnt, ...voluntario }
            this.#voluntarios.splice(index, 1, voluntarioAct)
            return voluntarioAct
        } else {
            return {}
        }
    }

    borrarVoluntario = async id => {
        let voluntario = {}
        const index = this.#voluntarios.findIndex(voluntario => voluntario.id === id)
        if (index !== -1) {
            voluntario = this.#voluntarios.splice(index, 1)[0]
        }
        return voluntario
    }
}

export default VoluntariosMem
