import joi from "joi"; 

const schema = joi.object({   
    firstName: joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
        'string.base': 'The name cannot use only numbers',
        'string.pattern.base': 'The name can only contain letters, numbers and spaces',
        'string.min': 'The name must be at least 3 characters',
        'string.max': 'The name must be a maximum of 22 characters'
    }), 
    lastName: joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
        'string.base': 'The name cannot use only numbers',
        'string.pattern.base': 'The name can only contain letters, numbers and spaces',
        'string.min': 'The name must be at least 3 characters',
        'string.max': 'The name must be a maximum of 22 characters'
    }),
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.email': 'Must be a valid email'
    }),    
    password: joi.string().required().min(3).messages({
        'string.min': 'La contraseña debe tener al menos 3 caracteres',
    }),    
    photo: joi.string().required().messages({
        'string.pattern.base': 'please enter url image valid'
    }), 
    country: joi.string().required().messages({
        'string.pattern.base': 'please enter your country'
    }), 
    
    
    online: joi.boolean()
})

export default schema