import {Router} from 'express'
export const routerProducts = new Router()
import faker from "faker";
import {ProductsService} from "../../services/products/products.service";


export const PATH_PRODUCTS = '/products';
const productService = new ProductsService()


routerProducts.get('/product/:id',(req,res)=>{
  const {id} = req.params;
  const product = productService.findOne(id)
  return res.json(product)
})

routerProducts.get('/', (req,res)=>{
  const {limit} = req.query
  const cantProducts = limit || 10

  // for(let i = 0; i < cantProducts ; i++ ){
  //   products.push({
  //     name: faker.commerce.productName(),
  //     price: parseInt(faker.commerce.price(),10),
  //     image: faker.image.imageUrl()
  //   })
  //
  // }
  // return res.send(products)

    productService.all(cantProducts).then(data=>{
     return res.json(data);
   })


})

routerProducts.post('/store',(req,res)=> {
   const body = req.body
  return res.json({
    message:'Created',
    body
  })
})




