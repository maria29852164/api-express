import boom from "@hapi/boom";

export const validate = (schema,property)=> {
    return (req,res,next)=> {
      const data = req[property]
      const {error} = schema.validate(data,{abortEarly:false})
      if(error){
        next( boom.badRequest(`Hubo un error en la validacion ${error}`))
      }
      next()
    }
}
