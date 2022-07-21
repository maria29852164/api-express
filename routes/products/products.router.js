import {Router} from 'express'
export const routerProducts = new Router()
import faker from "faker";


export const PATH_PRODUCTS = '/products';


routerProducts.get('/product/:id',(req,res)=>{
  const {id} = req.params;
  return res.json({
    id,
    name:"maria"
  });
})

routerProducts.get('/', (req,res)=>{
  const {limit} = req.query
  const cantProducts = limit || 10

  for(let i = 0; i < cantProducts ; i++ ){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })

  }
  return res.send(products)


})




const products = [];

const generateProducts= async counter => {
  if(counter > 10){
    console.log(products)
    return products
  }
  products.push({
    name: faker.commerce.productName(),
    price: faker.commerce.price()
  })

  setTimeout(()=>  {
    let increment = counter +1
    return generateProducts(increment)
  }, 500 )

}
