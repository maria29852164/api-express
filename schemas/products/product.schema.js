import joi, {number, string}  from 'joi'

const name = joi.string().alphanum().min(3).max(20);
const price = joi.number().integer().min(10);
const id= joi.string().uuid()
const image = joi.string().uri()

export const createProductSchema =  joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
  }
)
export const updateProductSchema =  joi.object({
    name, price, image
  }
)
export const getProductSchema = joi.object({id})


