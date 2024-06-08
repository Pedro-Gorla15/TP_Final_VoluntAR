import CnxMongoDB from "../DBMongo.js"
import { ObjectId } from 'mongodb'


class AncianosMongoDB {
    constructor() { }

    obtenerAncianos = async () => {
        if (!CnxMongoDB.connectionOK) return []

        const ancianos = await CnxMongoDB.db.collection('ancianos').find({}).toArray()

        return ancianos
    }

    obtenerAnciano = async id => {
        if (!CnxMongoDB.connectionOK) return []

        const anciano = await CnxMongoDB.db.collection('ancianos').findOne({ _id: new ObjectId(id) })
        return anciano
    }

    guardarAnciano = async anciano => {
        if (!CnxMongoDB.connectionOK) return []

        await CnxMongoDB.db.collection('ancianos').insertOne(anciano)
        return anciano
    }

    actualizarAnciano = async (id, anciano) => {
        if (!CnxMongoDB.connectionOK) return []

        await CnxMongoDB.db.collection('ancianos').updateOne({ _id: new ObjectId(id) }, { $set: anciano })
        const ancianoActualizado = await this.obtenerAnciano(id)
        return ancianoActualizado
    }

    borrarAnciano = async id => {
        if (!CnxMongoDB.connectionOK) return []

        const ancianoBorrado = await this.obtenerAnciano(id)
        await CnxMongoDB.db.collection('ancianos').deleteOne({ _id: new ObjectId(id) })
        return ancianoBorrado
    }
}

export default AncianosMongoDB
