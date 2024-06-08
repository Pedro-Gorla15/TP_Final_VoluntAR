import Joi from 'joi'


export const validar = anciano => {

    const ancianoSchema = Joi.object({
        nombre: Joi.string().required(),
        edad: Joi.number().integer().min(65).max(99).required(),
        telefono: Joi.string().required(),
        direccion: Joi.string().required(),
        necesidad: Joi.string().required(),
    })

    const { error } = ancianoSchema.validate(anciano)
    if (error) {
        return { result: false, error }
    }
    return { result: true }

}