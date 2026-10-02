import { createError } from "../utils/error.js";
import Joi  from "joi";


const createUserSchema = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    age: Joi.number().integer().min(15).required(),
})

const createUserId = Joi.object({
    id: Joi.number().integer().positive().required().options({
        convert:true,
    }),
})

export function validateCreateUser(req,res,next){
    const {error}= createUserSchema.validate(req.body);
    if(error){
        throw createError(error.details[0].message, 400);
    }
    next()
}

export function validateCreateIdUser(req,res,next){
    const {error,value} = createUserId.validate(req.params);
    if(error){
        throw createError("ID not found",400)
    }
    req.params = value
    next()
}
// string- matin sonini sanay salom 12345
// number- min 15 > 13 false