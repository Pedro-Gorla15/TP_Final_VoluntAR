class ConexionesMem {
    #conexiones = []

    obtenerConexiones = async () => {
        return this.#conexiones
    }

    guardarConexion = async (conexion) => {
        this.#conexiones.push(conexion)
        return conexion
    }
}

export default ConexionesMem
