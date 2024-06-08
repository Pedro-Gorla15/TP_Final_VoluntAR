import fs from 'fs'

class AncianosFile {
    #nombreArchivo = null

    constructor() {
        this.#nombreArchivo = 'ancianos.json'
    }

    #leerArchivo = async nombre => {
        let ancianos = []
        try {
            ancianos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        } catch (error) {
            console.error(`Error al leer el archivo ${nombre}:`, error)
        }

        return ancianos
    }

    #escribirArchivo = async (nombre, ancianos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(ancianos, null, '\t'))
    }

    obtenerAncianos = async () => {
        return await this.#leerArchivo(this.#nombreArchivo)
    }

    obtenerAnciano = async id => {
        const ancianos = await this.#leerArchivo(this.#nombreArchivo)
        const anciano = ancianos.find(a => a.id === id)
        return anciano || {}
    }

    guardarAnciano = async anciano => {
        const ancianos = await this.#leerArchivo(this.#nombreArchivo)
        const id = String(parseInt(ancianos[ancianos.length - 1]?.id || 0) + 1)
        const ancianoConId = { id, ...anciano }
        ancianos.push(ancianoConId)
        await this.#escribirArchivo(this.#nombreArchivo, ancianos)

        return ancianoConId
    }

    actualizarAnciano = async (id, anciano) => {
        const ancianos = await this.#leerArchivo(this.#nombreArchivo)
        const index = ancianos.findIndex(anciano => anciano.id === id)
        if (index !== -1) {
            const ancianoAnt = ancianos[index]
            const ancianoAct = { ...ancianoAnt, ...anciano }
            ancianos.splice(index, 1, ancianoAct)
            await this.#escribirArchivo(this.#nombreArchivo, ancianos)
            return ancianoAct
        } else {
            return {}
        }
    }

    borrarAnciano = async id => {
        const ancianos = await this.#leerArchivo(this.#nombreArchivo)
        let anciano = {}

        const index = ancianos.findIndex(anciano => anciano.id === id)
        if (index !== -1) {
            anciano = ancianos.splice(index, 1)[0]
            await this.#escribirArchivo(this.#nombreArchivo, ancianos)
        }
        return anciano
    }
}

export default AncianosFile
