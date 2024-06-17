import CnxMongoDB from "../DBMongo.js"
import { ObjectId } from 'mongodb'

class VoluntariosMongoDB {
    constructor() { }

    obtenerVoluntarios = async () => {
        if (!CnxMongoDB.connectionOK) return []

        const voluntarios = await CnxMongoDB.db.collection('voluntarios').find({}).toArray()
        return voluntarios
    }

    obtenerVoluntario = async id => {
        if (!CnxMongoDB.connectionOK) return {}

        const voluntario = await CnxMongoDB.db.collection('voluntarios').findOne({ _id: new ObjectId(id) })
        return voluntario
    }

    guardarVoluntario = async voluntario => {
        if (!CnxMongoDB.connectionOK) return {}

        await CnxMongoDB.db.collection('voluntarios').insertOne(voluntario)
        return voluntario
    }

    actualizarVoluntario = async (id, voluntario) => {
        if (!CnxMongoDB.connectionOK) return {}

        await CnxMongoDB.db.collection('voluntarios').updateOne({ _id: new ObjectId(id) }, { $set: voluntario })
        const voluntarioActualizado = await this.obtenerVoluntario(id)
        return voluntarioActualizado
    }

    borrarVoluntario = async id => {
        if (!CnxMongoDB.connectionOK) return {}

        const voluntarioBorrado = await this.obtenerVoluntario(id)
        await CnxMongoDB.db.collection('voluntarios').deleteOne({ _id: new ObjectId(id) })
        return voluntarioBorrado
    }
}

export default VoluntariosMongoDB
