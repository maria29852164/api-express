import {Router} from 'express';

export const router = new Router();

router.get('/products',(req,res)=>{
   return res.json({
     name:'Maria'
   })
})

