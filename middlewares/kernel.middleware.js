import {handleBoomError, handleError, logsErrors} from "./handler.error";
import {validate} from "./handler.validator";

export const defineMiddlewares= (app)=> {

  app.use(logsErrors)


  app.use(handleBoomError)
  app.use(handleError)




}
