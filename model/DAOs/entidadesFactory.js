import VoluntariosFile from "./voluntariosFile.js"
import VoluntariosMem from "./voluntariosMem.js"
import VoluntariosMongoDB from "./voluntariosMongoDB.js"
import AncianosFile from "./ancianosFile.js"
import AncianosMem from "./ancianosMem.js"
import AncianosMongoDB from "./ancianosMongoDB.js"
import ConexionesMongoDB from "./conexionesMongoDB.js"

class ModelFactory {
    static get(tipo, entidad) {
        switch (entidad) {
            case 'voluntarios':
                switch (tipo) {
                    case 'MEM':
                        console.log('*** Persistiendo Voluntarios en Memoria ***')
                        return new VoluntariosMem()
                    case 'FILE':
                        console.log('*** Persistiendo Voluntarios en FileSystem ***')
                        return new VoluntariosFile()
                    case 'MONGODB':
                        console.log('*** Persistiendo Voluntarios en MongoDB ***')
                        return new VoluntariosMongoDB()
                    default:
                        console.log('*** Persistiendo Voluntarios en Memoria (default) ***')
                        return new VoluntariosMem()
                }
            case 'ancianos':
                switch (tipo) {
                    case 'MEM':
                        console.log('*** Persistiendo Ancianos en Memoria ***')
                        return new AncianosMem()
                    case 'FILE':
                        console.log('*** Persistiendo Ancianos en FileSystem ***')
                        return new AncianosFile()
                    case 'MONGODB':
                        console.log('*** Persistiendo Ancianos en MongoDB ***')
                        return new AncianosMongoDB()
                    default:
                        console.log('*** Persistiendo Ancianos en Memoria (default) ***')
                        return new AncianosMem()
                }
            case 'conexiones':
                switch (tipo) {
                    case 'MONGODB':
                        console.log('*** Persistiendo Conexiones en MongoDB ***')
                        return new ConexionesMongoDB()
                    default:
                        console.log('*** Persistiendo Conexiones en Memoria (default) ***')
                        return new ConexionesMongoDB() // Por simplicidad, solo MongoDB 
                }
        }
    }
}

export default ModelFactory
