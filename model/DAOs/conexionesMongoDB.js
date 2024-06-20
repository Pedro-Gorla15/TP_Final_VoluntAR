import CnxMongoDB from "../DBMongo.js"
import { ObjectId } from 'mongodb'

class ConexionesMongoDB {
    constructor() { }

    obtenerConexiones = async () => {
        if (!CnxMongoDB.connectionOK) return []

        const conexiones = await CnxMongoDB.db.collection('conexiones').find({}).toArray()
        return conexiones
    }

    guardarConexion = async (conexion) => {
        if (!CnxMongoDB.connectionOK) return []

        await CnxMongoDB.db.collection('conexiones').insertOne(conexion)
        return conexion
    }
}

export default ConexionesMongoDB
