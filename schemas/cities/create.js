import joi from "joi"; 

    const schema = joi.object({   
        name: joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
            'string.base': 'The name cannot use only numbers',
            'string.pattern.base': 'The name can only contain letters, numbers and spaces',
            'string.min': 'The name must be at least 3 characters',
            'string.max': 'The name must be a maximum of 22 characters'
        }), 
        country: joi.string().required().messages({
            'string.pattern.base': 'please enter your country'
        }),
        image: joi.string().required().messages({
            'string.pattern.base': 'please enter url image valid'
        }), 
        description: joi.string().required().messages({
            'string.pattern.base': 'please enter url image valid'
        }),
        continent: joi.string().required().messages({
            'string.pattern.base': 'please enter url image valid'
        }),
        population: joi.number()
        .required()
        .positive()
        .messages({
            'number.base': 'El valor debe ser un número',
            'number.positive': 'El valor debe ser positivo',
        }),
    })
    
    export default schema