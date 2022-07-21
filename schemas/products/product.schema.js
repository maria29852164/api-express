import joi, {number, string}  from 'joi'

const name = joi.string().alphanum().min(3).max(20);
const price = joi.number().integer().min(10);
const id= joi.string().uuid()

export const createProductSchema =  joi.object({
    name: name.required(),
    price: price.required()
  }
)
export const updateProductSchema =  joi.object({
    name, price
  }
)
export const getProductSchema = joi.object({id})


