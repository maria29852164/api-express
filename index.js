import express from 'express';
import {router} from './routes/router'
const app =  express()
const port = process.env.PORT || 3000;
// define routes
app.use(router)

app.listen(port, ()=> console.log(`Server at running in the port ${port}`) )

