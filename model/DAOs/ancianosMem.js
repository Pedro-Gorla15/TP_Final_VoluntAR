class AncianosMem {
    #ancianos = []

    constructor() {
        this.#ancianos = [
            { id: '1', nombre: 'Juan Pérez', edad: 82, direccion: 'Calle Falsa 123', telefono: '123456789', necesidad: 'Ayuda con las compras' },
            { id: '2', nombre: 'María Gómez', edad: 76, direccion: 'Avenida Siempre Viva 456', telefono: '987654321', necesidad: 'Acompañamiento para caminar' }
        ]
    }

    obtenerAncianos = async () => this.#ancianos

    obtenerAnciano = async id => {
        const anciano = this.#ancianos.find(a => a.id === id)
        return anciano || {}
    }

    guardarAnciano = async anciano => {
        const id = String(parseInt(this.#ancianos[this.#ancianos.length - 1]?.id || 0) + 1)
        const ancianoConId = { id, ...anciano }
        this.#ancianos.push(ancianoConId)
        return ancianoConId
    }

    actualizarAnciano = async (id, anciano) => {
        const index = this.#ancianos.findIndex(anciano => anciano.id === id)
        if (index !== -1) {
            const ancianoAnt = this.#ancianos[index]
            const ancianoAct = { ...ancianoAnt, ...anciano }
            this.#ancianos.splice(index, 1, ancianoAct)
            return ancianoAct
        } else {
            return {}
        }
    }

    borrarAnciano = async id => {
        let anciano = {}
        const index = this.#ancianos.findIndex(anciano => anciano.id === id)
        if (index !== -1) {
            anciano = this.#ancianos.splice(index, 1)[0]
        }
        return anciano
    }
}

export default AncianosMem
