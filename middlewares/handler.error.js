export const logsErrors = (error ,req,res ,next )=> {
  console.log(error)
  next(error)
}
export const handleError =(error ,req,res ,next )=> {

    return res.status(500)
      .json({
        message: error.message,
        stack: error.stack
      })


}

export const handleBoomError =(error ,req,res ,next )=> {
  if(error.isBoom){
    const {output}= error
    return res.status(output.statusCode)
      .json({payload: output.payload})
  }
  next(error)




}




