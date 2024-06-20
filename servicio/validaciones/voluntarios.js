import Joi from 'joi'

const mensajesError = {
    'string.empty': 'El campo {#label} no puede estar vacío',
    'any.required': 'El campo {#label} es obligatorio',
    'number.base': 'El campo {#label} debe ser un número',
    'number.min': 'El campo {#label} debe ser mayor o igual a {#limit}',
    'string.pattern.base': 'El campo {#label} tiene un formato inválido'
}

export const validar = voluntario => {
    const voluntarioSchema = Joi.object({
        nombre: Joi.string().required().messages(mensajesError),
        edad: Joi.number().integer().min(18).required().messages(mensajesError),
        telefono: Joi.string().required().messages(mensajesError),
        direccion: Joi.string().required().messages(mensajesError),
        habilidades: Joi.string().pattern(/^(?:[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+(?:, ?[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)*)$/).required().messages({
            'string.pattern.base': 'El campo {#label} debe ser una lista de habilidades separadas por comas sin caracteres especiales',
            ...mensajesError
        }),
    })

    const { error } = voluntarioSchema.validate(voluntario)
    if (error) {
        return { result: false, error: error.details[0].message }
    }
    return { result: true }
}
