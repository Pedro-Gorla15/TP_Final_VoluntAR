import Joi from 'joi'

const mensajesError = {
    'string.empty': 'El campo {#label} no puede estar vacío',
    'any.required': 'El campo {#label} es obligatorio',
    'number.base': 'El campo {#label} debe ser un número',
    'number.min': 'El campo {#label} debe ser mayor o igual a {#limit}',
    'number.max': 'El campo {#label} debe ser menor o igual a {#limit}',
    'string.pattern.base': 'El campo {#label} tiene un formato inválido'
}

export const validar = anciano => {
    const ancianoSchema = Joi.object({
        nombre: Joi.string().required().messages(mensajesError),
        edad: Joi.number().integer().min(65).max(99).required().messages(mensajesError),
        telefono: Joi.string().required().messages(mensajesError),
        direccion: Joi.string().required().messages(mensajesError),
        necesidad: Joi.string().required().messages(mensajesError),
    })

    const { error } = ancianoSchema.validate(anciano)
    if (error) {
        return { result: false, error: error.details[0].message }
    }
    return { result: true }
}
