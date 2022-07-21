import express, {Router} from 'express';
import {routesApi} from './routes/router'
const app =  express()

const port = process.env.PORT || 3000;
// define routes



routesApi(app)



app.listen(port, ()=> console.log(`Server at running in the port ${port}`) )

