import fs from 'fs'

class VoluntariosFile {
    #nombreArchivo = null

    constructor() {
        this.#nombreArchivo = 'voluntarios.json'
    }

    #leerArchivo = async nombre => {
        let voluntarios = []
        try {
            voluntarios = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch { }

        return voluntarios
    }

    #escribirArchivo = async (nombre, voluntarios) => {
        console.log(voluntarios)
        await fs.promises.writeFile(nombre, JSON.stringify(voluntarios, null, '\t'))
    }

    obtenerVoluntarios = async () => {
        return await this.#leerArchivo(this.#nombreArchivo)
    }

    obtenerVoluntario = async id => {
        const voluntarios = await this.#leerArchivo(this.#nombreArchivo)
        const voluntario = voluntarios.find(v => v.id === id)
        return voluntario || {}
    }

    guardarVoluntario = async voluntario => {
        const voluntarios = await this.#leerArchivo(this.#nombreArchivo)
        const id = String(parseInt(voluntarios[voluntarios.length - 1]?.id || 0) + 1)
        const voluntarioConId = { id, ...voluntario }
        voluntarios.push(voluntarioConId)
        await this.#escribirArchivo(this.#nombreArchivo, voluntarios)

        return voluntarioConId
    }

    actualizarVoluntario = async (id, voluntario) => {
        const voluntarios = await this.#leerArchivo(this.#nombreArchivo)
        const index = voluntarios.findIndex(voluntario => voluntario.id === id)
        if (index != -1) {
            const voluntarioAnt = voluntarios[index]
            const voluntarioAct = { ...voluntarioAnt, ...voluntario }
            voluntarios.splice(index, 1, voluntarioAct)
            await this.#escribirArchivo(this.#nombreArchivo, voluntarios)
            return voluntarioAct
        }
        else {
            return {}
        }
    }

    borrarVoluntario = async id => {
        const voluntarios = await this.#leerArchivo(this.#nombreArchivo)
        let voluntario = {}

        const index = voluntarios.findIndex(voluntario => voluntario.id === id)
        if (index != -1) {
            voluntario = voluntarios.splice(index, 1)[0]
            await this.#escribirArchivo(this.#nombreArchivo, voluntarios)
        }
        return voluntario
    }
}

export default VoluntariosFile
