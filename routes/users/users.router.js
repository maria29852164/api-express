import {Router} from 'express'
export const routerUser = new Router();


routerUser.get('/',(req,res)=> {
  const {limit} = req.query
  return res.json({
    limit

  })
})
