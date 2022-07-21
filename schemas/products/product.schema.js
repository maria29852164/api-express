import joi, {number, string}  from 'joi'

const name = string().alphanum().min(3).max(20);
const price = number().integer().min(10);
const id= string().uuid()

export const createProductSchema =  joi.schema({
    name: name.required(),
    price: price.required()
  }
)
export const updateProductSchema =  joi.schema({
    name, price
  }
)
export const getProductSchema = joi.schema({name,price,id})

