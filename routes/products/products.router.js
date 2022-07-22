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

routerProducts.get('/', async (req,res,next)=>{
  try{
    const products = await productService.find();
    return res.json(products)
  }catch (e){
    next(e)
  }



})






