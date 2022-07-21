import express, {Router} from 'express';
import {routesApi} from './routes/router'
import {defineMiddlewares} from "./middlewares/kernel.middleware";
const app =  express()

const port = process.env.PORT || 3001;
// define routes



routesApi(app)
defineMiddlewares(app)


app.listen(port, ()=> console.log(`Server at running in the port ${port}`) )

