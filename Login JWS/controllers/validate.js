import Joi from "joi";

export const validate = (data) =>{
    const schema = Joi.object({
        name: Joi.string().required().min(2).max(50),
        email: Joi.string().required().min(2).max(200),
        password: Joi.string().required().min(6).max(200),
    })

    return schema.validate(data);
}
