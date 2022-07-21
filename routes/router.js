import {routerProducts, PATH_PRODUCTS} from './products/products.router'
import {routerCategories} from "./categories/categories.route";
import {routerUser} from "./users/users.router";
import express, {Router} from "express";



// router.get('/categories/:categoryId/products/:productId',(req,res)=>{
//   const {categoryId, productId} = req.params;
//   return res.json({
//     categoryId,
//     productId
//   })
// })





export const routesApi =  app => {

  const router = new Router()
  app.use(express.json())
  app.use('/api/v1', router)
  router.use(PATH_PRODUCTS, routerProducts)
  router.use('/categories', routerCategories)
  router.use('/users', routerUser)
}
