import express, {Router} from 'express';
import {routesApi} from './routes/router'
import cors from 'cors'
import {defineMiddlewares} from "./middlewares/kernel.middleware";
const app =  express()

const port = process.env.PORT || 3001;
// define routes
const whileList= ['https://localhost:9000']
const options = {
  origin: (origin , callback)=> {
    if(whileList.includes(origin) || !origin){
      callback(null,true)
    }else{
      callback(new Error('Sin acceso'))
    }
  }
}


app.use(cors(options))
routesApi(app)
defineMiddlewares(app)


app.listen(port, ()=> console.log(`Server at running in the port ${port}`) )

