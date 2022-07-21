import {Router} from 'express'
export const routerProducts = new Router()
import faker from "faker";
import {ProductsService} from "../../services/products/products.service";


export const PATH_PRODUCTS = '/products';
const productService = new ProductsService()
routerProducts.post('/store',(req,res)=> {
  const body = req.body
  const product = productService.store(body);
  return res.status(201).json(product);
})
routerProducts.patch('/:id', (req,res)=> {
  const body = req.body;
  const {id} = req.params;

  let product = productService.update(body,id);
  return res.status(200).json(product);


})
const getParamsId= (req)=>{
  const {id} = req.params
  return id
}
routerProducts.delete('/:id',(req,res)=> {
  const product = productService.destroy(getParamsId(req))
  return res.status(200).json(product)
})

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






