import { MongoClient, ObjectId } from "mongodb"
import config from '../config.js'


class CnxMongoDB {

    static client = null
    static db = null
    static connectionOK = false

    static conectar = async _ => {
        try {
            console.log('Conectando a la base de datos...')
            CnxMongoDB.client = new MongoClient(config.STRCNX)
            await CnxMongoDB.client.connect()
            console.log('Base Conectada')

            CnxMongoDB.db = CnxMongoDB.client.db(config.BASE)
            CnxMongoDB.connectionOK = true
        }
        catch (error) {
            console.log(`Error en la conexión de la base de datos: ${error.message}`)
        }
    }
}

export default CnxMongoDB
export { ObjectId } 
