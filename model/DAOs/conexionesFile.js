import fs from 'fs'

class ConexionesFile {
    #nombreArchivo = 'conexiones.json'

    #leerArchivo = async () => {
        let conexiones = []
        try {
            conexiones = JSON.parse(await fs.promises.readFile(this.#nombreArchivo, 'utf-8'))
        } catch (error) {
            console.error(`Error al leer el archivo ${this.#nombreArchivo}:`, error)
        }
        return conexiones
    }

    #escribirArchivo = async (conexiones) => {
        await fs.promises.writeFile(this.#nombreArchivo, JSON.stringify(conexiones, null, 2))
    }

    obtenerConexiones = async () => {
        return await this.#leerArchivo()
    }

    guardarConexion = async (conexion) => {
        const conexiones = await this.#leerArchivo()
        const id = String(parseInt(conexiones[conexiones.length - 1]?.id || 0) + 1)
        const conexionConId = { id, ...conexion }
        conexiones.push(conexionConId)
        await this.#escribirArchivo(conexiones)
        return conexionConId
    }
}

export default ConexionesFile
