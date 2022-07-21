import {routerProducts, PATH_PRODUCTS} from './products/products.router'
import {routerCategories} from "./categories/categories.route";
import {routerUser} from "./users/users.router";



// router.get('/categories/:categoryId/products/:productId',(req,res)=>{
//   const {categoryId, productId} = req.params;
//   return res.json({
//     categoryId,
//     productId
//   })
// })





export const routesApi =  app => {
  app.use(PATH_PRODUCTS, routerProducts)
  app.use('/categories', routerCategories)
  app.use('/users', routerUser)
}
