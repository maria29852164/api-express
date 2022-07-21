import {Router} from 'express'
export const routerProducts = new Router()
import faker from "faker";
import {ProductsService} from "../../services/products/products.service";
import {validate} from "../../middlewares/handler.validator";
import {createProductSchema, getProductSchema, updateProductSchema} from "../../schemas/products/product.schema";


export const PATH_PRODUCTS = '/products';
const productService = new ProductsService()
routerProducts.post('/store',validate(createProductSchema,'body'),async (req,res)=> {
  const body = req.body
  const product = await productService.store(body);


  return res.status(201).json(product);
})
routerProducts.patch('/:id',validate(getProductSchema,'params'),validate(updateProductSchema,'body'),(req,res)=> {
  const body = req.body;
  const {id} = req.params;

  let product =  productService.update(body,id);
  return res.status(200).json(product);


})
const getParamsId= (req)=>{
  const {id} = req.params
  return id
}
routerProducts.delete('/:id',validate(getProductSchema,'params'),(req,res,next)=> {
  try{
    const product =  productService.destroy(getParamsId(req))
    return res.status(200).json(product)
  }catch (e){
    next(e)
  }

})

routerProducts.get('/product/:id',validate(getProductSchema,'params'),(req,res)=>{
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






