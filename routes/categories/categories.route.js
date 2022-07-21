import {Router} from 'express'
export const routerCategories= new Router()

routerCategories.get('/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params;
  return res.json({
    categoryId,
    productId
  })
})
